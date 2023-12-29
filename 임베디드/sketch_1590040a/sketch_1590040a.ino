// 미세먼지 없을때 초기 V 값
// 공기청정기 위 등에서 먼지를 가라앉힌 후 voltage값 개별적으로 측정필요
#include "MQ7.h"
#include "DHT.h" //DHT 라이브러리 호출
DHT dht(10, DHT22); //DHT 설정(10,DHT22)
#include <LiquidCrystal.h>
LiquidCrystal lcd(8, 9, 4, 5, 6, 7);
#define no_dust 0.60 //최초 전원 인가 후 깨끗한 환경에서의 지속적으로 측정되는 전압값 

int dustout = A4; // 센서의 5번핀 먼지를 측정 아두이노 A4번에 연결
int v_led = A5; // 센서의 3번핀을 아두이노 A5번에 연결  센서 내부 적외선 led를 on/off 제어
int s_ledr = 13; // 공기 상태에 나쁨 RED
int s_ledg = 12; // 공기 상태에 보통 Green
int s_ledb = 11; // 공기 상태에 좋음 Blue
float vo_value = 0; // 센서로 읽은 값 변수 선언
float sensor_voltage = 0; // 센서로 읽은 값을 전압으로 측정한 값
float dust_density = 0; // 실제 미세먼지 밀도
int motor = 3;    //motor를 디지털핀 3번에 연결
int  bz =  2 ;    //부저 핀 번호 지정 4번 MQ7

MQ7 mq7(A0, 5.0); //MQ7 아날로그 포트 A5 지정 => 일산화탄소 감지 센서

void setup()
{
  Serial.begin(9600); // 통신속도 9600bps로 시리얼 통신 시작
  dht.begin();
  pinMode(v_led, OUTPUT);  // 적외선 led 출력으로 설정
  pinMode(s_ledr, OUTPUT); // LED Red 출력 설정
  pinMode(s_ledg, OUTPUT); // LED green 출력 설정
  pinMode(s_ledb, OUTPUT); // LED blue 출력 설정
  pinMode(motor, OUTPUT);  // motor 출력 설정
  pinMode(bz, OUTPUT);     // 부저를 출력모드로 설정
  lcd.begin(16, 2);        // lcd start
  lcd.setCursor(0, 0);     
  lcd.clear();
  digitalWrite(v_led, LOW);   // 적외선 LED ON
  digitalWrite(s_ledr, LOW);  // led off
  digitalWrite(s_ledb, LOW);  // led off
  digitalWrite(s_ledg, LOW);  // led off
  
}

void loop()

{

  /*
     데이터 시트에 나와있듯이 샘플링을 위해서 적외선 LED는 0.32ms 동안 펄스를 유지해야하며,
     0.28ms이후에 데이터를 읽을 수 있습니다.
  */

  digitalWrite(v_led, LOW);
  delayMicroseconds(280); // 280us동안 딜레이
  vo_value = analogRead(dustout); // 데이터를 읽음
  delayMicroseconds(40); // 320us - 280us
  digitalWrite(v_led, HIGH); // 적외선 LED OFF
  delayMicroseconds(9680); // 10us(주기) -320us(펄스폭) 한 값
  lcd.clear();
  sensor_voltage = get_voltage(vo_value); // get_voltage 함수 실행 => 센서에서 읽어들인 값을 전압 값으로 바꿈
  dust_density = get_dust_density(sensor_voltage); // get_dust_density 함수 실행
  int dust_density1 = dust_density;

  Serial.print(dust_density1);
  Serial.println(" [ug/m^3]");
  lcd.setCursor(0, 1);
  lcd.print("Dust:");
  lcd.setCursor(5, 1);
  lcd.print(dust_density1);
  Serial.print("value = ");
  Serial.println(vo_value);
  Serial.print("Voltage = ");
  Serial.print(sensor_voltage);
  Serial.println(" [V]");
  Serial.print("Dust Density = ");
  Serial.print(dust_density);
  Serial.println(" [ug/m^3]");

  float h = dht.readHumidity(); //습도값을 h에 저장
  float t = dht.readTemperature(); //온도값을 t에 저장
  float f = dht.readTemperature(true);// 화씨 온도를 측정합니다.
  float hif = dht.computeHeatIndex(f, h);
  float hic = dht.computeHeatIndex(t, h, false);
  
  int hic1 = hic;
  int h1 = h;
  
  Serial.print("Temperature: ");
  Serial.print(hic); //온도값 출력
  Serial.println("C");

  lcd.setCursor(0, 0);
  lcd.print("temp:");
  lcd.setCursor(5, 0);
  lcd.print(hic1);
  lcd.setCursor(7, 0);
  lcd.print("C ");

  Serial.print("Humidity: "); //문자열 출력
  Serial.print(h); //습도값 출력
  Serial.println("%");

  lcd.setCursor(9, 0);
  lcd.print("Hum:");
  lcd.setCursor(13, 0);
  lcd.print(h1);
  lcd.setCursor(15, 0);
  lcd.print("%");
  lcd.setCursor(9, 1);
  lcd.print("PPM:");

  float  filteredValue =  0 ;        //측정된 센서 값을 저장 할 변수 선언
  
  for  ( int  i =  0 ; i <  100 ; i++) {
    //for 반복문 시작 100번 반복 실행
    filteredValue += mq7.getPPM() ;  //mq7의 센서값을 filteredValue에 저장
    delayMicroseconds( 100 );         //100ms 딜레이
  }

  filteredValue /=  100 ;              //100번 더해진 값을 100으로 나눔

  //측정 값중 노이즈를 줄이기 위한 코딩

  Serial.print( "CO: " );              //시리얼 통신으로 프린트할 내용
  Serial.print(filteredValue);         //100번 측정한 평균값 출력
  Serial.println( "ppm" );

  lcd.setCursor(13,1);
  lcd.print((int)filteredValue);
 
  if (dust_density <= 50) {

    digitalWrite(s_ledr, LOW);
    digitalWrite(s_ledb, HIGH);
    digitalWrite(s_ledg, LOW);
    Serial.println("LED B");
    digitalWrite(motor, LOW);

  }

  else if (dust_density <= 100) {

    digitalWrite(s_ledr, LOW);
    digitalWrite(s_ledb, LOW);
    digitalWrite(s_ledg, HIGH) ;
    Serial.println("LED G");
    digitalWrite(motor, LOW);

  }

  else {

    digitalWrite(s_ledr, HIGH);
    digitalWrite(s_ledb, LOW);
    digitalWrite(s_ledg, LOW);
    Serial.println("LED R");
    digitalWrite(motor, HIGH);

  }

  delay(2000);

  if  ( 50  <= filteredValue) {

    //if 조건문 측정한 센서의 평균값이
    digitalWrite(bz, HIGH);            //50 이상이라면 부저를 울림

  }

  else  {

    digitalWrite(bz, LOW);

  }

}

float get_voltage(float value)

{

  float V = value * 5.0 / 1024; // 아날로그값을 전압값으로 바꿈
  return V;

}

 

float get_dust_density(float voltage)

{

  float dust = (voltage - no_dust) / 0.005; // 데이터 시트에 있는 미세먼지 농도(ug) 공식 기준
  return dust;

}
