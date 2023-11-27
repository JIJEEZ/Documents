float inputsignal = 0.0;
float outputsignal = 0.0;
float prevSignal =0.0;
float a = 0.70;

void setup() {
  Serial.begin(9600);
}

void loop() {
  inputsignal = analogRead(A0);
  //outputsignal = a* (prevSignal)+((1-a)*(inputsignal));
  //prevSignal = outputsignal;
  Serial.println(inputsignal);
  Serial.print("\t");
  //Serial.println(outputsignal);
  delay(10);
}
