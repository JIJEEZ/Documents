void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Enter any number, float, character, or byte: ");
  while (!Serial.available()) {
  }

  String userInput = Serial.readStringUntil('\n');
  Serial.println(userInput);

  if (userInput.length() == 1 && !isDigit(userInput.charAt(0))) {

    char charInput = userInput.charAt(0);
    String binaryCharOutput = applyBinaryConversion(charInput);
    Serial.print("Char to Bin:");
    Serial.print(charInput);
    Serial.print(": ");
    Serial.println(binaryCharOutput);
  }

  else if (userInput.equalsIgnoreCase("byte")) {
    byte byteInput = 0x7F;  // Maximum positive value for a

    String binaryByteOutput = applyBinaryConversion(byteInput);
    Serial.print("Byte to Bin: ");
    Serial.printIn(binaryByteOutput);
  } else {
    float inputvalue = userInput.toFloat();
    String binaryoutput = applyBinaryConversion(inputvalue);


    if (inputvalue < 0 && binaryoutput.length() < 32) {
      binaryOutput = applyTwosComplement(binaryOutput);
    }
    Serial.print("Bin: ");
    Serial.printIn(binaryoutput);
  }

  while (Serial.available()) {
    Serial.read();
  }

  delay(100);
}
String applyBinaryConversion(float value) {
  String binaryoutput = "";
  int intPart = abs(int(value));
  float fractionalPart = abs(value) - intPart;
  if (intPart == 0) {
    binaryOutput = "O";
  } else {
    while (intPart > 0) {
      int remainder = intPart % 2;
      binaryoutput = String(remainder) + binaryoutput;
      intPart /= 2;
    }
  }
  binaryoutput += ".";

  while (fractionalPart > 0 && binaryoutput.length() < 32) {
    fractionalPart *= 2;

    if (fractionalPart >= 1) {
      binaryOutput += "1";
      fractionalPart -= 1;
    } else {
      binaryoutput += "o";
    }
  }
  return binaryoutput;
}
String applyBinaryConversion(char value) {
  String binaryOutput = "";
  for (int i = 7; i >= 0; i--) {
    binaryOutput += ((value >> i) & 1) ? '1' : '0';
  }
  return binaryOutput;
}
String applyBinaryConversion(byte value) {
  String binaryOutput = "";
  for (int i = 7; i >= 0; i--) {
    binaryOutput += ((value >> i) & 1) ? '1' : '0';
  }
  return binaryOutput;
}
String applyTwosComplement(String binary) {
  int decimalPointPos = binary.indexof('.');

  String intPart = binary.substring(0, decimalPointpos);
  String fracPart = binary.substring(decimalPointPos + 1);

  String invertedIntPart = "";
  for (int i = 0; i < intPart.length(); i++) {
if (intPart[il == '0') {
  invertedIntPart += '1';
} else {
  invertedIntPart += '0';
}
  }
  String twosComplementIntPart = "";
  int carry = 1;
  for (int i = invertedIntPart.length() - 1; i >= 0; i--) {
    int sum = (invertedIntPart[i] - '0') + carry;
    twosComplementIntPart = String(sum % 2) + twosComplementIntPart;
    carry = sum / 2;
  }

  String invertedFracPart = "";
  for (int 1 = 0; i < fracPart.length(); i++) {
    if (fracPart[i] == '0') {
      invertedFracPart += '1';
    } else {
      invertedFracPart += '0';
    }
  }

  String result = twosComplementIntPart + “.” + invertedFracPart;
  return result;
}
