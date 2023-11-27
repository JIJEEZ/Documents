int LED1 = 2;
int LED2 = 3;
int LED3 = 4;
int LED4 = 5;
int LED5 = 6;
int LED6 = 7;
int LED7 = 8;

void setup()
{
  Serial.begin(9600);
  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);
  pinMode(LED4, OUTPUT);
  pinMode(LED5, OUTPUT);
  pinMode(LED6, OUTPUT);
  pinMode(LED7, OUTPUT);
}
void loop()
{
  digitalWrite(LED1, HIGH);
  Serial.println(sizeof(LED1));
  delay(100);
  digitalWrite(LED2, HIGH);
  Serial.println(sizeof(LED2));
  delay(100);
  digitalWrite(LED3, HIGH);
  Serial.println(sizeof(LED3));
  delay(100);
  digitalWrite(LED4, HIGH);
  Serial.println(sizeof(LED4));
  delay(100);
  digitalWrite(LED5, HIGH);
  Serial.println(sizeof(LED5));
  delay(100);
  digitalWrite(LED6, HIGH);
  Serial.println(sizeof(LED6));
  delay(100);
  digitalWrite(LED7, HIGH);
  Serial.println(sizeof(LED7));
  delay(100);
}