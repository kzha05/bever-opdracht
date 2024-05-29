// src/main.cpp

#include <Arduino.h>
#include <IRremote.h>
#include <Stepper.h>
#include "StepperControl.h"

// Pin definitions
const int RECEIVER_PIN = 2;
const int STEPPER_1_PINS[] = {10, 11, 12, 13};
const int STEPPER_2_PINS[] = {14, 15, 16, 17};
const int STEPPER_3_PINS[] = {18, 19, 20, 21};

// Stepper settings
const int STEPPER_SPEED = 10; // in RPM
const int STEPS_PER_REVOLUTION = 2048;
const int SECOND_ROTATE_COOLDOWN = 1; // seconds

// Initialize IR receiver and steppers
// TODO: IR availability discontinued, will move to discontinued folder on next commit.
IRrecv receiver(RECEIVER_PIN);
decode_results results;
Stepper steppers[] = {
        Stepper(STEPS_PER_REVOLUTION, STEPPER_1_PINS[0], STEPPER_1_PINS[1], STEPPER_1_PINS[2], STEPPER_1_PINS[3]),
        Stepper(STEPS_PER_REVOLUTION, STEPPER_2_PINS[0], STEPPER_2_PINS[1], STEPPER_2_PINS[2], STEPPER_2_PINS[3]),
        Stepper(STEPS_PER_REVOLUTION, STEPPER_3_PINS[0], STEPPER_3_PINS[1], STEPPER_3_PINS[2], STEPPER_3_PINS[3])
};

const int NUM_STEPPERS = sizeof(steppers) / sizeof(steppers[0]);

void setup() {
    Serial.begin(9600);

    for (auto &stepper : steppers) {
        stepper.setSpeed(STEPPER_SPEED);
    }

    // TODO: IR availability discontinued, will move to discontinued folder on next commit.
    receiver.enableIRIn();
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH); // Assuming setLEDFeedback(true) lights up the built-in LED
}

void loop() {
    // TODO: IR availability discontinued, will move to discontinued folder on next commit.
    if (receiver.decode()) {
        int targetNumber = 0; // Replace this with actual logic to determine the target number
        rotateTarget(targetNumber);
        receiver.resume();
    }
}
