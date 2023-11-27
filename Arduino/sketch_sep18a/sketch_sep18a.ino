void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.print("Enter a number, float, byte, or character: ");
  while (!Serial.available()) {
  }
 
  String userInput = Serial.readStringUntil('\n');
  Serial.println(userInput);
 
  if (userInput.length() == 1 && !isDigit(userInput.charAt(0))) {
    char charInput = userInput.charAt(0);
    String binaryCharOutput = applyBinaryConversion(charInput);
    Serial.print("Binary representation of char '");
    Serial.print(charInput);
    Serial.print("': ");
    Serial.println(binaryCharOutput);
  }
  else if (userInput.equalsIgnoreCase("byte")) {
    byte byteInput = 0x7F; // Maximum positive value for a byte (127)
    String binaryByteOutput = applyBinaryConversion(byteInput);
    Serial.print("Binary representation of byte: ");
    Serial.println(binaryByteOutput);
  }
  else {
    float inputValue = userInput.toFloat();
    String binaryOutput = applyBinaryConversion(inputValue);
    if (inputValue < 0 && binaryOutput.length() < 16) {
      binaryOutput = applyTwosComplement(binaryOutput);
    }
    Serial.print("Binary representation: ");
    Serial.println(binaryOutput);
  }
 
  while (Serial.available()) {
    Serial.read();
  }
 
  delay(1000);
}

String applyBinaryConversion(float value) {
  String binaryOutput = "";
  int intPart = abs(int(value));
  float fractionalPart = abs(value) - intPart;

  if (intPart == 0) {
    binaryOutput = "0";
  } else {
    while (intPart > 0) {
      int remainder = intPart % 2;
      binaryOutput = String(remainder) + binaryOutput;
      intPart /= 2;
    }
  }

  binaryOutput += ".";
  while (fractionalPart > 0 && binaryOutput.length() < 16) {
    fractionalPart *= 2;
    if (fractionalPart >= 1) {
      binaryOutput += "1";
      fractionalPart -= 1;
    } else {
      binaryOutput += "0";
    }
  }
  return binaryOutput;
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
  int decimalPointPos = binary.indexOf('.');
 
  String intPart = binary.substring(0, decimalPointPos);
  String fracPart = binary.substring(decimalPointPos + 1);
 
  String invertedIntPart = "";
  for (int i = 0; i < intPart.length(); i++) {
    if (intPart[i] == '0') {
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
  for (int i = 0; i < fracPart.length(); i++) {
    if (fracPart[i] == '0') {
      invertedFracPart += '1';
    } else {
      invertedFracPart += '0';
    }
  }
 
  String result = twosComplementIntPart + "." +    invertedFracPart;
  return result;
}