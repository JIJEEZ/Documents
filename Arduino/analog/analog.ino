float x = 0.0;
int pin = A0;
void setup() {
  pinMode(A0, INPUT);
  Serial.begin(9600);
}
void loop() {
  x = analogRead(pin) * 500.0 / 1023.0;
  Serial.println(x);
  delay(1000);
}