#include <FlowMeter.h>
FlowSensorProperties MySensor = {30.0f, 6.0f, {1, 1, 1, 1, 1, 1, 1, 1, 1, 1}};
//kfator = 5.5f
FlowMeter Meter = FlowMeter(2, MySensor);
const int REED_PIN = 7; // Pin connected to reed switch
const int LED_PIN = 13; // LED pin - active-high
const unsigned long period = 1000;


bool status = true;
int count=0;
int seconds=0;
float vazao;

void MeterISR() {
  // let our flow meter count the pulses
  Meter.count();
}

void setup() 
{
  Serial.begin(9600);
  // Since the other end of the reed switch is connected to ground, we need
  // to pull-up the reed switch pin internally.
  pinMode(REED_PIN, INPUT_PULLUP);
  pinMode(LED_PIN, OUTPUT);

  attachInterrupt(INT0, MeterISR, RISING);
  Meter.reset();

  digitalWrite(LED_PIN, HIGH); // Turn the LED on
  delay(1000);
  digitalWrite(LED_PIN, LOW); // Turn the LED on
  delay(1000);
}

void loop() 
{
  delay(period);
  Meter.tick(period);
  //Serial.println("Currently " + String(Meter.getCurrentFlowrate()) + " l/min, " + String(Meter.getTotalVolume())+ " l total.");
  int proximity = digitalRead(REED_PIN); // Read the state of the switch
  if (proximity == LOW && status) // If the pin reads low, the switch is closed.
  {
    //Serial.println("Switch closed");
    digitalWrite(LED_PIN, HIGH); // Turn the LED on
    count++;
    status=false;
  }
  else if(proximity == HIGH)
  {
    //Serial.println("Switch open");
    digitalWrite(LED_PIN, LOW); // Turn the LED off
    status = true;
  }
  seconds++;
  vazao=(float)count / (float)seconds;
  Serial.print(Meter.getCurrentFlowrate());
  Serial.print(";");
  Serial.print(Meter.getTotalVolume());
  Serial.print(";");
  //Serial.print("Litros: ");
  Serial.print(count);
  Serial.print(";");
  //Serial.print(" Segundo: ");
  Serial.println(seconds);
  //Serial.println(" +++++++++++++++++++++++++++++++++++++++++++");
  //Serial.print(" L/s: ");
  //Serial.println(vazao*10);

  
  
}


