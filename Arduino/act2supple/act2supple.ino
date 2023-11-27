int leds[] = { 9, 2, 3, 4, 5, 6, 7, 8};
int i = 0;

void setup() {
  Serial.begin(9600);
  for (int i = 0; i <= 7; i++) {
    pinMode(leds[i], OUTPUT);
  }
}

void loop() {
  Serial.print("Decimal input: ");
  while (!Serial.available()) {}
  int decimalNumber = 0;
  decimalNumber = Serial.parseInt();
  Serial.println(decimalNumber);
 
  if (decimalNumber == 0) {
    Serial.println("Binary representation: 00000000");
    // Set all LEDs to LOW
    for (int i = 0; i <= 7; i++) {
      digitalWrite(leds[i], LOW);
    }
  } else {
    // Convert decimal to binary using bitset
    String binaryString = "";
    for (int j = sizeof(int) * 4 - 1; j >= 0; --j) {
      if (decimalNumber & (1 << j)) {
        binaryString += '1';
      } else {
        binaryString += '0';-
      }
    }
    Serial.print("Binary representation: ");
    Serial.println(binaryString);
   
    while (decimalNumber >= 1) {
      for(int k=0; k <=7; k++){
        digitalWrite(leds[k], decimalNumber % 2);
        decimalNumber /= 2;
      }
      i++;
    }
  }
  Serial.end();
  Serial.begin(9600);
}