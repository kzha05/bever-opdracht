// lib/StepperControl/StepperControl.cpp
#include "StepperControl.h"
#include <Arduino.h>
#include <Stepper.h>

// External declarations
extern Stepper steppers[];

// Function Definition
void rotateTarget(int targetNumber) {
    if (targetNumber < 0 || targetNumber >= NUM_STEPPERS) {
        Serial.println("Invalid target number!");
        return;
    }

    Stepper& stepper = steppers[targetNumber];
    stepper.step(STEPS_PER_REVOLUTION / 2); // Rotate 180 degrees (1024 steps)
    delay(SECOND_ROTATE_COOLDOWN * 1000);
    stepper.step(STEPS_PER_REVOLUTION / 2); // Rotate back 180 degrees
    delay(SECOND_ROTATE_COOLDOWN * 1000);
}
