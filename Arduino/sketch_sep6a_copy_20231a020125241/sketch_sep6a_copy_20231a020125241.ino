//Analog Input
int x = 0;
int pin = A0;
void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
}
void loop() {
  x = analogRead(pin);
  Serial.println(x);
  delay(1000);
}