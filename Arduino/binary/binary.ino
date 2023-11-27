float Num;//user input


void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Enter a number: ");
  while (!Serial.available()) {
  }
  Num;
  Num = Serial.parseFloat();
  Serial.print(String(Num));
  convertBin(Num);
}

void convertBin(float val) {
  bool isNegative = val < 0;
  if (isNegative) {
    val = -val;
  }

  long intPart = long(val);
  float fraction = val - float(intPart);

  long intBin[32];
  int Len = convertToBin(intPart, intBin);

  long fractionalBin[32];
  int fracLen = FractionToBin(fraction, fractionalBin);

  if (fraction == 0) {
    Serial.println();
    Serial.print("Binary: ");
    if (isNegative) {
      Serial.print("-");
    }
    printBin(intBin, Len);
    Serial.println();
  } else {
    Serial.println();
    Serial.print("Binary ");
    if (isNegative) {
      Serial.print("-");
    }
    printBin(intBin, Len);
    Serial.print(".");
    printBin(fractionalBin, fracLen);
    Serial.println();
  }
  Serial.println();
}

int convertToBin(long num, long bin[]) {
  int length = 0;
  while (num > 0) {
    bin[length++] = num % 2;
    num /= 2;
  }
  revArray(bin, length);
  return length;
}

int FractionToBin(float fraction, long bin[]) {
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

void revArray(long arr[], int length) {
  for (int i = 0; i < length / 2; i++) {
    long temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
}
