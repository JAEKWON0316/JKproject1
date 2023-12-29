/* 예제5.4
   4X4 키패드 입력
*/
#include <LiquidCrystal.h>

LiquidCrystal lcd(13, 12, 11, 10, 9, 8); 

//열의 수를 설정
const int numRows = 4;
//행이 수를 설정
const int numCols = 4;

//행과 열에 대하여 문자를 할당한다.
char keys[numCols][numRows]={
  {'1','2','3','A'}, //1행
  {'4','5','6','B'}, //2행
  {'7','8','9','C'}, //3행
  {'*','0','#','D'}}; //4행

//열에 연결된 핀번호
int rowPins[] = {3,2,1,0};
//행에 연결된 핀번호
int colPins[] = {7,6,5,4};

void setup()
{ 
  lcd.begin(16, 2);
  lcd.setCursor(0,0);
  lcd.print("Message from keypad");
  //열을 입력 풀업 모드로 설정한다.
  for(int i=0; i<numRows ;i++){
    pinMode(rowPins[i], INPUT_PULLUP);
  }
  //행을 출력 모드로 설정한다. 초기값을 HIGH로 설정한다.
  for(int i=0; i<numCols; i++){
    pinMode(colPins[i], OUTPUT);
    digitalWrite(colPins[i], HIGH); //평상시에는 스위치가 열려있음
  }
  Serial.begin(9600); //시리얼 통신 설정
}

void loop()
{
  //key 변수에 키패드 입력 값을 읽어서 저장한다.
  char key = keypadRead();
  //key 변수가 0일때는 입력이 없는 것이고
  //그외의 값에서는 입력이 발생한 것이다.
  if(key !=0){
    lcd.setCursor(0,1);
    lcd.print(key);
    
    
    /* Serial.print("You Push ");
       Serial.print(key);
       Serial.println(" key");
       */
   }
}

char keypadRead() {
char key = 0;
  
  for(int i=0; i<numCols; i++){
    //행 중에 하나를 LOW로 설정한다.
    digitalWrite(colPins[i], LOW);
    //열을 하나씩 바꿔가면서 값을 읽는다.
    for(int j=0;j<numRows;j++){
    //열의 입력이 LOW일 때 키 입력이 발생한 것이다.
    if(digitalRead(rowPins[j]) == LOW){
      delay(10); //바운싱 방지를 위해 10ms 대기한다.
        
   // 키를 놓을 때까지 기다린다.
      while(digitalRead(rowPins[j]) == LOW);
        
   //keys 상수에서 위치에 맞는 값을 가져온다.
        key = keys [i][j]; //행 열
      };
    }
   //LOW로 설정했던 행을 다시 HIGH로 설정한다.
    digitalWrite(colPins[i], HIGH);
  }
    return key;
}
