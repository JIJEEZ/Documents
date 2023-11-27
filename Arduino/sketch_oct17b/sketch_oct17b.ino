int a = 2;
int b = 3;
int c = 4;
int d = 5;
int e = 6;
int f = 7;
int g = 8;

int button4Pin = 0;  // Define pin for the first pushbutton
int button1Pin = 1;  // Define pin for the second pushbutton
int button2Pin = 9;
int button3Pin = 13;

int led1 = 1;
int led2 = 9;
int led3 = 10;  // Define pin for the third LED

// Define the segmentPins array for the 7-segment display
int segmentPins[7] = { a, b, c, d, e, f, g };

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(segmentPins[i], OUTPUT);
  }

  pinMode(led1, OUTPUT);
  pinMode(led2, OUTPUT);
  pinMode(led3, OUTPUT);

  // Set up DPT switch pins as inputs with pull-up resistors
  pinMode(button1Pin, INPUT_PULLUP);
  pinMode(button2Pin, INPUT_PULLUP);
  pinMode(button3Pin, INPUT_PULLUP);
  pinMode(button4Pin, INPUT_PULLUP);
}

void displayDigit(int value) {
  // Define segments for each digit (0-9 and A-F)
  int digitSegments[16][7] = {
    { 1, 1, 1, 1, 1, 1, 0 },  // 0
    { 0, 1, 1, 0, 0, 0, 0 },  // 1
    { 1, 1, 0, 1, 1, 0, 1 },  // 2
    { 1, 1, 1, 1, 0, 0, 1 },  // 3
    { 0, 1, 1, 0, 0, 1, 1 },  // 4
    { 1, 0, 1, 1, 0, 1, 1 },  // 5
    { 1, 0, 1, 1, 1, 1, 1 },  // 6
    { 1, 1, 1, 0, 0, 0, 0 },  // 7
    { 1, 1, 1, 1, 1, 1, 1 },  // 8
    { 1, 1, 1, 1, 0, 1, 1 },  // 9
    { 1, 1, 1, 0, 1, 1, 1 },  // A
    { 0, 0, 1, 1, 1, 1, 1 },  // B
    { 1, 0, 0, 1, 1, 1, 0 },  // C
    { 0, 1, 1, 1, 1, 0, 1 },  // D
    { 1, 0, 0, 1, 1, 1, 1 },  // E
    { 1, 0, 0, 0, 1, 1, 1 }   // F
  };

  // Display the specified digit
  if (value >= 0 && value <= 15) {
    for (int i = 0; i < 7; i++) {
      digitalWrite(segmentPins[i], digitSegments[value][i]);
    }
  }
}

void loop() {
  // Read the state of push buttons
  int button1State = digitalRead(button1Pin);
  int button2State = digitalRead(button2Pin);
  int button3State = digitalRead(button3Pin);
  int button4State = digitalRead(button4Pin);

  // Determine the displayed digit based on button states
  int displayedDigit = 0;

  if (button4State == LOW) {
    displayedDigit += 1;
  }

  if (button3State == LOW) {
    displayedDigit += 2;
  }

  if (button2State == LOW) {
    displayedDigit += 4;
  }

  if (button1State == LOW) {
    displayedDigit += 8;
  }

  // Display the determined digit
  displayDigit(displayedDigit);

  // Display the binary value on the LEDs
  digitalWrite(led1, displayedDigit & 0x01);
  digitalWrite(led2, (displayedDigit >> 1) & 0x01);
  digitalWrite(led3, (displayedDigit >> 2) & 0x01);
}