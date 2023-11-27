int LEDs[8] = { 9,2,3,4,5,6,7,8} ;

extern "C" { char *__data_load_end();} 

void setup() {
  Serial.begin(9600);
  Serial.print("Sketch Size: ");
  Serial.println((long)__data_load_end * 2);
  for (auto i : LEDs) {
    pinMode(i, OUTPUT);
  }
}
void loop() {
  Serial.println("JJJJJ");
  for (auto i : LEDs)
    digitalWrite(i, HIGH);
  delay(5000);
}