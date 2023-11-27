int Red = 11;
int Blue = 10;
int Green = 9;
int potVal = 0;
String color;
void setup()
{
  pinMode(Red, OUTPUT);
  pinMode(Blue, OUTPUT);
  pinMode(Green, OUTPUT);
  Serial.begin(9600);
  Serial.println("Enter any Letter (A-F): ");
}
void loop()
{
  potVal = analogRead(A1);
  if(Serial.available() > 0){
    color = Serial.readStringUntil('\n');
    Serial.print("Letter: ");
    Serial.println(color);
    if(color.equalsIgnoreCase("A")){
      potVal/4;
      analogWrite(Red, 255);
      analogWrite(Blue, 0);
      analogWrite(Green, 0);
      Serial.println("Your Lucky Color is RED!");
    }
    else if(color.equalsIgnoreCase("B")){
      analogWrite(Red, 0);
      analogWrite(Blue, 255);
      analogWrite(Green, 0);
      Serial.println("Your Lucky Color is BLUE!");
    }
    else if(color.equalsIgnoreCase("C")){
      analogWrite(Red, 0);
      analogWrite(Blue, 0);
      analogWrite(Green, 255);
      Serial.println("Your Lucky Color is GREEN!");
    }
    else if(color.equalsIgnoreCase("D")){
      analogWrite(Red, 255);
      analogWrite(Blue, 0);
      analogWrite(Green, 255);
      Serial.println("Your Lucky Color is YELLOW!");
    }
    else if(color.equalsIgnoreCase("E")){
      analogWrite(Red, 255);
      analogWrite(Blue, 255);
      analogWrite(Green, 255);
      Serial.println("Your Lucky Color is WHITE!");
    }
    else if(color.equalsIgnoreCase("F")){
      analogWrite(Red, 255);
      analogWrite(Blue, 255);
      analogWrite(Green, 0);
      Serial.println("Your Lucky Color is PURPLE!");
    }
    else{
      analogWrite(Red, 0);
      analogWrite(Blue, 0);
      analogWrite(Green, 0);
      Serial.println("INVALID INPUT!");
    }
  }
}