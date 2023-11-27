import numpy as np
import pandas as pd
from matplotlib import pyplot as plt

df= pd.read_csv('/Users/jio/Documents/DSP/mv(renzo)trad.csv', header=None, names = ["C"])


plt.figure(1)
plt.title("Time Series - sample")
plt.plot(df)
