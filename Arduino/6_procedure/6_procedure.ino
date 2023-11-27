int analogPin = A0; // The analog input pin
int measuredValue; // Variable to store the measured value

void setup() {
  Serial.begin(9600); // Initialize the serial communication
}

void loop() {
  measuredValue = analogRead(analogPin); // Read analog data from the sensor
  float actualValue = map(measuredValue, 0, 1023, 0, 100); // Map the measured value to the actual value range
  
  // Print the values to the serial monitor
  Serial.print("Measured Value: ");
  Serial.print(measuredValue);
  Serial.print("\t Actual Value: ");
  Serial.println(actualValue);

  delay(1000); // Delay for a second before the next reading
}
