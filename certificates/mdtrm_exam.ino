int led_red = 2;
int led_yellow = 3;
int led_green = 4;

void setup() {

pinMode(led_red,OUTPUT);
pinMode(led_yellow,OUTPUT);
pinMode(led_green,OUTPUT);

Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    char input = Serial.read();
    setColor(input);
   }
}

void setColor(char color) {
  int redVal, greenVal, yellowVal;
  String colorName;

  switch (color) {
    case 'A':
      redVal = "255";
      greenVal = "0";
      yellowVal = "0";
      colorName = "Red";
      break;
    case 'B':
      redVal = "0";
      greenVal = "255";
      yellowVal = "0";
      colorName = "Green";
      break;
    case 'C':
      redVal = "0";
      greenVal = "0";
      yellowVal = "255";
      colorName = "Yellow";
      break;

# repeat until case F

    default:
      redVal = "0";
      greenVal = "0";
      yellowVal = "0";
      colorName = "There's no color";
      break;
}

analogWrite(led_red, redVal);
analogWrite(led_yellow, greenVal);
analogWrite(led_green, yellowVal);

Serial.print("Your Lucky color is: ");
Serial.println(colorName);

}s