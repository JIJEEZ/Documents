import os 
import numpy as np
import matplotlib.pyplot as plt
import csv
from IPython.display import clear_output
dataPath = "/Users/jio/Documents/DSP/kids1"
savePath = "activity4_castillo"

dataFiles = os.listdir(dataPath)
dataFilesPath = [os.path.join(dataPath,file) for file in dataFiles if 
                 file.split(".")[0].split("_")[-1]=="B1" and "BaseNoise" not in file and "csv" in file]

print("Number of files to process:", len(dataFilesPath))
dataFilesPath[:10]
## SORTING
def sorter(p):
    ## Extract step number from file name
    return int(p.split("_")[-2])

## SORT ALL FILES BY STEP
dataFilesPath.sort(key=sorter)
dataFilesPath[:10]
def getDataPoints(filepath):
    ## GETTING DATA FROM CSV FILE
    dataPoints = []
    idx = []
    with open(filepath) as f:
        reader = csv.reader(f)
        for i in range(6): next(reader)
        for row in reader:
            if len(row) > 0: 
                idx.append(row[0])
                dataPoints.append(row[1])

    dataPoints = np.array(dataPoints, dtype=float)
    idx = np.array(idx, dtype=float)
    return idx,dataPoints
## GETTING MEAN OF ALL CSV
meanCsv = []
idx = []
flag = 0
for path in dataFilesPath:
    if flag == 0:
        idx,dataPoints = getDataPoints(path)
        meanDataPoints = np.mean(dataPoints)
        meanCsv.append(meanDataPoints)
        flag = 1
        continue
    _,dataPoints = getDataPoints(path)
    meanDataPoints = np.mean(dataPoints)
    meanCsv.append(meanDataPoints)
## LISTING INDEX STEPS
idxSteps = [i for i in range(0, len(meanCsv))]
idxSteps = np.array(idxSteps).T

## PLOTTING
color = "orange"
markerColor = "b*"
previousLoad = -1

for step,path in enumerate(dataFilesPath):

    partialLoad = 100/len(dataFilesPath)
    currentLoad = round(step*partialLoad)

    _,dataPoints = getDataPoints(dataFilesPath[step])
    #### GETTING MEAN, STD, AND ZSCORE OF DATA
    meanDataPoints = np.mean(dataPoints)
    stdDataPoints = np.std(dataPoints)
    zscoreDataPoints = [(x-meanDataPoints)/stdDataPoints for x in dataPoints]

    #### PLOTTING DATA
    ## PLOTTING SIDE BY SIDE
    figure, axs = plt.subplots(nrows=1, ncols= 3, figsize=(15,4))
    txt = f"mean = {meanDataPoints}\nstd = {stdDataPoints}"
    name = f"Step #{step}"

    axs[0].plot(idxSteps,meanCsv, color=color)
    axs[0].plot(step,meanCsv[step], markerColor)
    axs[0].set_title(name)
    axs[0].set_xlabel("Step #", fontsize=8)
    axs[0].set_ylabel("Acoustic Intensity", fontsize=8)
    axs[0].set(xlim =(-5, 200), ylim =(-0.9e-3, 0))

    axs[1].hist(zscoreDataPoints, bins = 200, color=color)
    axs[1].set_title(name)
    axs[1].set_xlabel("Acoustic Intensity", fontsize=8)
    axs[1].set_ylabel("Count", fontsize=8)
    axs[1].text(-3.8, 800, txt, fontsize=8)
    axs[1].set(xlim =(-4, 4), ylim =(0, 900))

    axs[2].plot(idx,dataPoints, color=color)
    axs[2].set_xlabel("Time (s)", fontsize=8)
    axs[2].set(xlim =(-0.0001, 0.0084), ylim =(-1.7, 1.7))

    #### Display the plot instead of saving
    plt.show()

    if currentLoad >= previousLoad: 
        previousLoad = currentLoad
        clear_output(wait=True)
        print(f'{currentLoad+1}% | ', end="")
        for i in range(currentLoad): print('#', end='')
        for i in range(currentLoad,99): print('-', end='')
        print(' |', end="")
