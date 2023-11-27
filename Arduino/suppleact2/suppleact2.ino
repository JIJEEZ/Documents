int ledpins[8] = {2,3,4,5,6,7,8,9};
int potPin = A0;
int potVal = 0;
int i=0;

void setup()
{
  for(i=0;i<=8;i++){
  	pinMode(ledpins[i], OUTPUT);
  }
  pinMode(potPin, INPUT);
  Serial.begin(9600);
}

void loop()
{
  potVal = analogRead(potPin)/4;
  Serial.println(potVal);

  for(i=0;i<=8;i++){
   digitalWrite(ledpins[i],(potVal%2)); 
   potVal/=2;
  } 
}