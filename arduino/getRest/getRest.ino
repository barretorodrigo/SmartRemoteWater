#include <WiFiClient.h>
#include <ESP8266WiFiAP.h>
#include <ESP8266WiFiType.h>
#include <ESP8266WiFi.h>
#include <WiFiServer.h>
#include <ESP8266WiFiScan.h>
#include <ESP8266WiFiGeneric.h>
#include <WiFiClientSecure.h>
#include <ESP8266WiFiSTA.h>
#include <ESP8266WiFiMulti.h>
#include <WiFiUdp.h>
#include <ESP8266HTTPClient.h>
#include <ArduinoJson.h>

const char* ssid = "PudasNET";
const char* password = "******";

//Parse JSON
StaticJsonBuffer<200> jsonBuffer;

void setup() {
 
  Serial.begin(115200);
  delay(10);

  // Connect to Wi-Fi network
  Serial.println();
  Serial.println();
  Serial.print("Connecting to...");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {

    delay(1000);
    Serial.print("Connecting..");

  }

}

void loop() {
  
  getPayload();
  delay(30000);    

}


void getPayload(){
  if (WiFi.status() == WL_CONNECTED) { 

      HTTPClient http;  
  
      http.begin("http://www.mocky.io/v2/5ba157c435000071005bbd50");  
      int httpCode = http.GET();
  
      if (httpCode > 0) { 
  
        String payload = http.getString();
        Serial.println(getLabelOnPayload(payload, "sensor"));
        
      }
  
      http.end();   
  
  }
}

String getLabelOnPayload(String payload, String label){
  JsonObject& root = jsonBuffer.parseObject(payload);
  
  
         // Test if parsing succeeds.
        if (!root.success()) {
          Serial.println("parseObject() failed");
          return "error";
        }
        const char* value = root[label];
        return value;
  }
