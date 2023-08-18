#include <Arduino.h>

// Globale Variablen
const byte A = 1;
const byte B = 2;
const byte C = 3;
const byte D = 4;

int delayTime = 1;
int stepsPerRotation = 4096;

void setup() {
  pinMode(A, OUTPUT);
  pinMode(B, OUTPUT);
  pinMode(C, OUTPUT);
  pinMode(D, OUTPUT);
}

void write (bool a, bool b, bool c, bool d) {
  digitalWrite(A, a);
  digitalWrite(B, b);
  digitalWrite(C, c);
  digitalWrite(D, d);
}

void oneStep() {
  write(1, 0, 0, 0); // 8 Microsteps
  delay(delayTime);
  write(1, 1, 0, 0);
  delay(delayTime);
  write(0, 1, 0, 0);
  delay(delayTime);
  write(0, 1, 1, 0);
  delay(delayTime);
  write(0, 0, 1, 0);
  delay(delayTime);
  write(0, 0, 1, 1);
  delay(delayTime);
  write(0, 0, 0, 1);
  delay(delayTime);
  write(1, 0, 0, 1);
  delay(delayTime);
}

void loop() {
  int index = 0;
  while (index < stepsPerRotation) {
    oneStep();
    index++;
  }
}