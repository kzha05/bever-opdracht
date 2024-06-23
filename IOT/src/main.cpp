// src/main.cpp

#include <Arduino.h>
#include <AccelStepper.h>

// Pin definitions


const int STEPPER_1_PINS[] = {2, 3, 4, 5};
const int STEPPER_2_PINS[] = {6, 7, 8, 9};
const int STEPPER_3_PINS[] = {10, 11, 12, 13};

// Stepper settings
const int STEPPER_SPEED = 13; // in RPM
const int STEPS_PER_REVOLUTION = 255;
const int SECOND_ROTATE_COOLDOWN = 1; // seconds

AccelStepper steppers[] = {
        AccelStepper(AccelStepper::FULL4WIRE, STEPPER_1_PINS[0], STEPPER_1_PINS[1], STEPPER_1_PINS[2],
                     STEPPER_1_PINS[3]),
        AccelStepper(AccelStepper::FULL4WIRE, STEPPER_2_PINS[0], STEPPER_2_PINS[1], STEPPER_2_PINS[2],
                     STEPPER_2_PINS[3]),
        AccelStepper(AccelStepper::FULL4WIRE, STEPPER_3_PINS[0], STEPPER_3_PINS[1], STEPPER_3_PINS[2],
                     STEPPER_3_PINS[3])
};


void setup() {
    Serial.begin(9600);

    pinMode(A0, INPUT);

    for (auto &stepper: steppers) {
        stepper.setMaxSpeed(500);
        stepper.setSpeed(500);
    }

}

void loop() {

    int button_state = digitalRead(A0);

    steppers[1].runSpeed();
    steppers[2].runSpeed();

//    digitalWrite(A0, HIGH);

    if (button_state == HIGH) {
        Serial.println("press");
        steppers[0].runSpeed();
    }

}
