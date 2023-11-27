int ledpins[7] = { 2, 3, 4, 5, 6, 7, 8};
byte size;


void setup()
{
  Serial.begin(9600);
  for (int i = 0; i<=6; i++)
  {
    pinMode(ledpins[i], OUTPUT);
  }
}

void loop() {
  for (int i = 0; i <= 6; i++)
  {
    digitalWrite(ledpins[i], HIGH);
  }
  Serial.println(sizeof(ledpins)); 
  delay(500);
}