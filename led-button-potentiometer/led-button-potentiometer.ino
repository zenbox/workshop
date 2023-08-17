#include <Arduino.h>

// - - - - -
// Global scoped variables
// - - - - -
// integer - Ganzzahlen; ohne Nachkommaanteil
// 0, 12, 3408, ...
// integer sind 2 Byte lang, 0 - 65535

const boolean DEBUG = false;
// int braucht 2 bytes, eines reicht aber völlig aus!
const byte LED_PIN = 3; // 0 - 255, 1 byte (8 bit)
const byte POT_PIN = A1;
const byte BTN_PIN = 5;
const byte LS_PIN = A0;

boolean ledState;
boolean btnState;
// unsigned: OHNE Vorzeichen, also keine Minus-Werte!
unsigned int potValue;
unsigned int lsValue;
long lsAverageValue = 0;

void setup() {
  // Serielle Ausgabe am Rechner
  Serial.begin(9600); // Baud-Rate (Übertragungsgeschwindigkeit)

  // Vorbereiten der Pins für ihre Aufgaben
  pinMode(LED_PIN, OUTPUT);
  pinMode(BTN_PIN, INPUT);
  // überflüssig: pinMode(A1, INPUT)
  // überflüssig: pinMode(A0, INPUT)

  // Aktuelle Zustände der Bauteile
  ledState = LOW;
  digitalWrite(LED_PIN, ledState); // Zustand auf aus setzen
  btnState = digitalRead(BTN_PIN); // Zustand abfragen
  potValue = analogRead(POT_PIN);
  lsValue = analogRead(LS_PIN);

  // Serielle Ausgabe eines Wertes
  if (DEBUG) Serial.println(potValue);

  // Aufruf der Lichtsensor Kalibration
  lsAverageValue = calibrateLightSensor(LS_PIN);
}

// Funktion:
void loop() {
  // Wiederholtes Einlesen eines Wertes
  potValue = analogRead(POT_PIN);
  lsValue = analogRead(LS_PIN);
  btnState = digitalRead(BTN_PIN);

  // Testausgabe des LS Wertes
  //  Serial.print("LS_PIN: ");
  //  Serial.print(lsValue);
  //  Serial.println();

  if (btnState == HIGH) {
    if (DEBUG) Serial.println("Der Taster ist gedrückt.");
  } else if (btnState == -1) {
    if (DEBUG) Serial.println("Der Taster ist seltsam.");
  } else {
    if (DEBUG) Serial.println("Der Taster ist NICHT gedrückt");
  }

  // BEREICH ABFRAGEN
  //  if (potValue >= 0 && potValue <= 100) {
  //    Serial.println("Das Potentiometer ist zwischen 0 und 100.");
  //  } else if (potValue > 100 && potValue <= 400) {
  //    Serial.println("Das Potentiometer ist zwischen 101 und 400.");
  //  }

  if (btnState == HIGH) {

    int dimmedPotValue = map(potValue, 0, 1023, 0, 255); // 0 (LOW) - 255 (HIGH)
    analogWrite(LED_PIN, dimmedPotValue);

  } else {
    digitalWrite(LED_PIN, LOW);
  }

  if (DEBUG) Serial.print( btnState );
  if (DEBUG) Serial.print(" / ");
  if (DEBUG) Serial.print( potValue );
  if (DEBUG) Serial.println();

  // - - - - -
  //  float fDeg = 21.3;
  //  String sUnit = "Celsius";
  //
  //  char buffer[40];
  //  sprintf(buffer, "Temp: %d degree %s", fDeg, sUnit);
  //  Serial.println(buffer);
  // - - - - -

  delay(500);
}

/**
   @desc Kalibriert einen Lichtsensor mit eine Messreihe
         über 5 Sekunden und ermittelt den Durchschnittswert
*/
long calibrateLightSensor(byte lsPin) {
  // lokale Variablen für diese Funktion
  unsigned int duration = 5000;
  unsigned int count = 1000;
  unsigned long averageValue = 0;
  unsigned long sum = 0;
  unsigned long counter = 0;
  unsigned int measureValue;

  unsigned long startTime = millis();
  Serial.println("Messung beginnt");

  do {
    // Messungen durchführen
    measureValue = analogRead(lsPin);
    sum = sum + measureValue;
    if (DEBUG) Serial.println(sum);
  } while ( millis() - startTime <= duration );

  // Durchschnittswert berechnen
  averageValue = sum / counter;
  Serial.print("averageValue: ");
  Serial.print(averageValue);
  Serial.println();

  // Rückgabe eines Wertes an den Aufruf der Funktion (im setup)
  return averageValue;
}



