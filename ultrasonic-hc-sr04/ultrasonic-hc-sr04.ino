#include <Arduino.h>

const byte TRIGGER_PIN = 9;
const byte ECHO_PIN = 10;
const byte RELAIS_PIN = 3;

float duration, distance;

void setup() {
  Serial.begin(9600);

  pinMode(TRIGGER_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(RELAIS_PIN, OUTPUT);

}

void loop() {

  // Messung beginnen
  digitalWrite(TRIGGER_PIN, LOW);
  delayMicroseconds(5);
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10); //          Zeitdauer < 20 µs!
  digitalWrite(TRIGGER_PIN, LOW); // Trigger Signal!

  // Annahme des Messwertes
  duration = pulseIn(ECHO_PIN, HIGH);
  Serial.print("Dauer: ");
  Serial.print(duration);
  Serial.print("  ");

  // In Entfernung umrechnen
  distance = (duration * .03435) / 2;

  float minDist = 3.27; // Soll: 3cm
  float maxDist = 29.53; // Soll 30cm

  // Kalibration mit zwei Referenzwerten (z. B. Lineal-Messung)
  distance = map(distance, minDist, maxDist, 3, 30);

  Serial.print("Entfernung: ");
  Serial.print(distance);
  Serial.print("cm");
  Serial.println();

  if (distance < 10) {
    digitalWrite(RELAIS_PIN, HIGH);
  } else {
    digitalWrite(RELAIS_PIN, LOW);
  }

  delay(500);

}