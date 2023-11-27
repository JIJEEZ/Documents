void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("\nEnter a Value/Char: \n");
  while (!Serial.available()) {
  }
  
  String c = Serial.readString();
  
  bool isNumeric = true;
  for (char ch : c) {
    if (!isDigit(ch) && ch != '.' && ch != '-') {
      isNumeric = false;
      break;
    }
  }

  if (isNumeric) {
    float floatNum = c.toFloat();
    Serial.println("Float =  " + String(floatNum));
    convertAndPrintBin(floatNum);
  } else {
    Serial.println("Entered:  " + c);
    Serial.println("Binary =  ");
    int n = c.length();
    for (int i = 0; i < n; i++) {
      byte bytes = c[i];
      int binArr[8]; 
      int index = 0;
      while (bytes > 0) {
        binArr[index++] = bytes % 2;
        bytes /= 2;
      }
      for (int j = index - 1; j >= 0; j--) {
        Serial.print(binArr[j]);
      }
    }
  }
}

void convertAndPrintBin(float value) {
  bool isNegative = value < 0;
  if (isNegative) {
    value = -value;
  }

  long intPart = long(value);
  float fractionalPart = value - float(intPart);

  long intBin[32];
  int intLength = convertToBin(intPart, intBin);

  long fractionalBin[32];
  int fractionalLength = convertFractionToBin(fractionalPart, fractionalBin);

  if (fractionalPart == 0) {
    Serial.print("\nBinary =  ");
    if (isNegative) {
      Serial.print("-");
    }
    printBin(intBin, intLength);
  } else {
    Serial.print("\nBinary =  ");
    if (isNegative) {
      Serial.print("-");
    }
    printBin(intBin, intLength);
    Serial.print(".");
    printBin(fractionalBin, fractionalLength);
  }
}

int convertToBin(long num, long bin[]) {
  int length = 0;
  while (num > 0) {
    bin[length++] = num % 2;
    num /= 2;
  }
  reverseArray(bin, length);
  return length;
}

int convertFractionToBin(float fraction, long bin[]) {
  int length = 0;
  while (length < 32 && fraction > 0) {
    fraction *= 2;
    bin[length++] = int(fraction);
    fraction -= int(fraction);
  }
  return length;
}

void printBin(long bin[], int length) {
  for (int i = 0; i < length; i++) {
    Serial.print(bin[i]);
  }
}

void reverseArray(long arr[], int length) {
  for (int i = 0; i < length / 2; i++) {
    long temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
}
