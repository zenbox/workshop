#include <Arduino.h>
#include "DHT.h"
#include <U8g2lib.h>
#include <Wire.h>

#define DHTTYPE DHT11
#define DHTPIN 8

// Bibliothek instanziieren
// Eine Instanz der Bibliothek einfügen
DHT dht(DHTPIN, DHTTYPE);
U8G2_SSD1306_128X64_NONAME_1_HW_I2C oled(U8G2_R0, /* reset=*/ U8X8_PIN_NONE);

void setup() {
  Serial.begin(9600);
  Serial.println(F("DHT22 test!"));

  dht.begin();

  oled.begin();
  oled.enableUTF8Print();
  oled.setFont(u8g2_font_6x12_me);
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature(); // Celsius
  float f = dht.readTemperature(true); // (isFahrenheit = true)

  // Check if any reads failed and exit early (to try again).
  if (isnan(h) || isnan(t)) {
    Serial.println(F("Failed to read from DHT sensor!"));
    return;
  }

  Serial.print(F("Humidity: "));
  Serial.print(h);
  Serial.print(F("%  Temperature: "));
  Serial.print(t);
  Serial.println();

  oled.firstPage();
  do {
    oled.setCursor(0, 32);
    oled.print(t);
    oled.print("°C");
    oled.setCursor(0, 48);
    oled.print(h);
    oled.print("%");
  } while (oled.nextPage());

  delay(50);
}