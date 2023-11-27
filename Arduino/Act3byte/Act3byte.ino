byte LEDs[] = { 1, 2, 3, 4, 5, 6, 7, 8 };
const int DigPinsUsed = sizeof(LEDs) / sizeof(LEDs[0]);
int SizeUsed() {
  int total = sizeof(LEDs);
  int sketchSize = sizeof(setup) + sizeof(loop) + sizeof(SizeUsed);
  return total + sketchSize;
}
void setup() {
  Serial.begin(9600);
  for (int i = 1; i <= 8; i++) {
    pinMode(i, OUTPUT);
  }
}

void loop() {
  for (int j = 0; j < 8; j++) {
    digitalWrite(LEDs[j], HIGH);
  }
  Serial.print("Sized Used: ");
  Serial.print(SizeUsed());
  Serial.println(" bytes");
  Serial.end();  // To stop the loop
}