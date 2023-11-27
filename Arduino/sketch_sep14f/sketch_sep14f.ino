
int ledpins[8] = {2, 3, 4, 5, 6, 7, 8};

char fibonacci[256];

void setup() {
  for (int i = 0; i < 8; i++) {
    pinMode(ledpins[i], OUTPUT);
  }
}

void loop() {
  fibonacci[0] = 0; //index 0 is 0
  fibonacci[1] = 1; //index 1 is 1 
  //^start dito magbase as previous num yung sa next value
  
  //start sa 2nd index which is 3rd value 
  //0,1,1,2,3
  for (int i = 2; i < 256; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    if (fibonacci[i] > 255) {
      fibonacci[i] = 0; // Reset to 0 
    }
  }
  
  for (int i = 0; i < 256; i++) {
    bin(fibonacci[i]);
    delay(2000); 
  }
}

// binary on leds
void bin(char num) {
  for (int i = 0; i < 8; i++) {
    int bit = (num >> i) & 1; // bit
    digitalWrite(ledpins[i], bit);
  }
}
