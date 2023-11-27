const int button1 = 2;  // Connect button 1 to digital pin 2
const int button2 = 3;  // Connect button 2 to digital pin 3
const int button3 = 4;  // Connect button 3 to digital pin 4
const int button4 = 5;  // Connect button 4 to digital pin 5

const int led1 = 6;  // Connect LED 1 to digital pin 6
const int led2 = 7;  // Connect LED 2 to digital pin 7
const int led3 = 8;  // Connect LED 3 to digital pin 8

const int digitPins[] = { 9, 10, 11, 12 };  // Connect 7-segment display to pins 9, 10, 11, and 12

int currentMode = 0;
int digitCount = 0;
int numbers[] = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 };

void setup() {
  pinMode(button1, INPUT_PULLUP);
  pinMode(button2, INPUT_PULLUP);
  pinMode(button3, INPUT_PULLUP);
  pinMode(button4, INPUT_PULLUP);
  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);

  for (int i = 0; i < 4; i++) {
    pinMode(digitPins[i], OUTPUT);
  }
}

void loop() {
  switch (currentMode) {
    case 0:
      // Mode 0: LEDs off
      digitalWrite(led1, LOW);
      digitalWrite(led2, LOW);
      digitalWrite(led3, LOW);
      break;

    case 1:
      // Mode 1: Cycle through LEDs
      digitalWrite(led1, HIGH);
      delay(500);
      digitalWrite(led1, LOW);
      digitalWrite(led2, HIGH);
      delay(500);
      digitalWrite(led2, LOW);
      digitalWrite(led3, HIGH);
      delay(500);
      digitalWrite(led3, LOW);
      break;

    case 2:
      // Mode 2: Display numbers on 7-segment display
      displayNumber(numbers[digitCount]);
      digitCount = (digitCount + 1) % 10;
      delay(1000);
      break;
  }

  // Check button presses to change modes
  if (digitalRead(button1) == LOW) {
    currentMode = 0;
  } else if (digitalRead(button2) == LOW) {
    currentMode = 1;
  } else if (digitalRead(button3) == LOW) {
    currentMode = 2;
  } else if (digitalRead(button4) == LOW) {
    // Additional modes can be added here
  }
}

void displayNumber(int number) {
  for (int i = 0; i < 4; i++) {
    digitalWrite(digitPins[i], number & 1);
    number >>= 1;
  }
}