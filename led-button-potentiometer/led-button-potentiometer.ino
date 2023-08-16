#include <Arduino.h>

// - - - - -
// Global scoped variables
// - - - - -
// integer - Ganzzahlen; ohne Nachkommaanteil
// 0, 12, 3408, ...
// integer sind 2 Byte lang, 0 - 65535

const boolean DEBUG = false;

const byte LED_PIN = 3; // 0 - 255
const byte POT_PIN = A1;
const byte BTN_PIN = 5;

boolean ledState;
boolean btnState;
unsigned int potValue;

void setup() {
  // Serielle Ausgabe am Rechner
  Serial.begin(9600); // Baud-Rate (Übertragungsgeschwindigkeit)

  // Vorbereiten der Pins für ihre Aufgaben
  pinMode(LED_PIN, OUTPUT);
  pinMode(BTN_PIN, INPUT);
  // überflüssig: pinMode(A1, INPUT)

  // Aktuelle Zustände der Bauteile
  ledState = LOW;
  digitalWrite(LED_PIN, ledState); // Zustand auf aus setzen
  btnState = digitalRead(BTN_PIN); // Zustand abfragen
  potValue = analogRead(POT_PIN);

  // Serielle Ausgabe eines Wertes
  if (DEBUG) Serial.println(potValue);
}

void loop() {
  // Wiederholte serielle Ausgabe eines Wertes
  potValue = analogRead(POT_PIN);
  btnState = digitalRead(BTN_PIN);

  if (btnState == HIGH) {
    Serial.println("Der Taster ist gedrückt.");
  } else if (btnState == -1) {
    Serial.println("Der Taster ist seltsam.");
  } else {
    Serial.println("Der Taster ist NICHT gedrückt");
  }

  // BEREICH ABFRAGEN
//  if (potValue >= 0 && potValue <= 100) {
//    Serial.println("Das Potentiometer ist zwischen 0 und 100.");
//  } else if (potValue > 100 && potValue <= 400) {
//    Serial.println("Das Potentiometer ist zwischen 101 und 400.");
//  }

  if (btnState == HIGH) {
    
    int dimmedPotValue = map(potValue, 0,1023, 0,255); // 0 (LOW) - 255 (HIGH)
    analogWrite(LED_PIN, dimmedPotValue); 
    
  } else {
    digitalWrite(LED_PIN, LOW);
  }

  if (DEBUG) Serial.print( btnState );
  if (DEBUG) Serial.print(" / ");
  if (DEBUG) Serial.print( potValue );
  if (DEBUG) Serial.println();

  delay(500);
}