
// Define the pins for the red, yellow, and green LEDs for both directions
const int red1 = 2;
const int yellow1 = 3;
const int green1 = 4;
const int red2 = 5;
const int yellow2 = 6;
const int green2 = 7;

void setup() {
  // Set the pin modes to OUTPUT
  pinMode(red1, OUTPUT);
  pinMode(yellow1, OUTPUT);
  pinMode(green1, OUTPUT);
  pinMode(red2, OUTPUT);
  pinMode(yellow2, OUTPUT);
  pinMode(green2, OUTPUT);
}

void loop() {
  // Turn on the green light for one direction and the red light for the other direction
  digitalWrite(green1, HIGH);
  digitalWrite(yellow1, LOW);
  digitalWrite(red1, LOW);
  digitalWrite(green2, LOW);
  digitalWrite(yellow2, LOW);
  digitalWrite(red2, HIGH);
  // Wait for 5 seconds
  delay(3000);

  digitalWrite(green1, LOW);
  digitalWrite(yellow1, HIGH);
  digitalWrite(red1, LOW);
  digitalWrite(green2, LOW);
  digitalWrite(yellow2, HIGH);
  digitalWrite(red2, LOW);
  // Wait for 5 seconds
  delay(2000);

  digitalWrite(green1, LOW);
  digitalWrite(yellow1, LOW);
  digitalWrite(red1, HIGH);
  digitalWrite(green2, HIGH);
  digitalWrite(yellow2, LOW);
  digitalWrite(red2, LOW);
  // Wait for 5 seconds
  delay(3000);

  digitalWrite(green1, LOW);
  digitalWrite(yellow1, HIGH);
  digitalWrite(red1, LOW);
  digitalWrite(green2, LOW);
  digitalWrite(yellow2, HIGH);
  digitalWrite(red2, LOW);
  // Wait for 5 seconds
  delay(2000);


}
