int decNum;

void setup() {
  Serial.begin(9600); 
}

void loop() {
 
  Serial.print("Enter a number: ");
  while (!Serial.available()) {
    // wait for input
  }
 
  decNum = Serial.parseInt(); // reads inputted number
  Serial.print(decNum); //prints the entered num
   
  // dec to char
  Serial.println();
  Serial.print("Character: ");
  Serial.println(char(decNum));
 
  delay(100);
}
