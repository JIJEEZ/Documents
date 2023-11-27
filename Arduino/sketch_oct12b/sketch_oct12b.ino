int button1Pin = 13;  // Define pin for the first pushbutton
int button2Pin = 12;  // Define pin for the second pushbutton
int button3Pin = 11;  // Define pin for the third pushbutton

int led1Pin = 8;  // Define pin for the first LED
int led2Pin = 7;  // Define pin for the second LED
int led3Pin = 6;  // Define pin for the third LED

void setup() {
  // Set up pushbutton pins as inputs with pull-up resistors
  pinMode(button1Pin, INPUT_PULLUP);
  pinMode(button2Pin, INPUT_PULLUP);
  pinMode(button3Pin, INPUT_PULLUP);

  // Set up LED pins as outputs
  pinMode(led1Pin, OUTPUT);
  pinMode(led2Pin, OUTPUT);
  pinMode(led3Pin, OUTPUT);
}

void loop() {
  // Read the state of pushbuttons
  int buttonState1 = digitalRead(button1Pin);
  int buttonState2 = digitalRead(button2Pin);
  int buttonState3 = digitalRead(button3Pin);

  // Turn on the respective LEDs based on the pushbutton states
  digitalWrite(led1Pin, buttonState1 == LOW ? HIGH : LOW);
  digitalWrite(led2Pin, buttonState2 == LOW ? HIGH : LOW);
  digitalWrite(led3Pin, buttonState3 == LOW ? HIGH : LOW);
}
