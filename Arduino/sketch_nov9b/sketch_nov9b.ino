
// Define the pins for the LEDs
int ledPins[] = {2, 3, 4, 5, 6, 7};

void setup() {
  // Set the LED pins as outputs
  for (int i = 0; i < 6; i++) {
    pinMode(ledPins[i], OUTPUT);
  }
}

void loop() {
  // Turn on each LED for 500ms and then turn it off
  for (int i = 0; i < 6; i++) {
    digitalWrite(ledPins[i], HIGH);
    delay(500);
    digitalWrite(ledPins[i], LOW);
  }
}
