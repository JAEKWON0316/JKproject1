int a=0;

String s[] = {" Hexadecimal convert value "," Binary convert value "};

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  if(Serial.available()){
  char v =Serial.read();
    if(isDigit(v)){
      a=(v-'0');
      
  Serial.println("***entered value***");
  Serial.println(a+s[0]);
  Serial.print(+a,BIN);
  Serial.println();
  Serial.println();
  
  
  Serial.println("***entered value***");
  Serial.println(a+s[1]);
  Serial.print(+a,HEX);
  Serial.println();
  Serial.println();
    }
  }
}
