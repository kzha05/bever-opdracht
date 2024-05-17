#include <Arduino.h>
#include <IRremote.h>
#include <Stepper.h>

const int RECEIVER_PIN = 2;
const int STEPPER_1_PINS[] = {10, 11, 12, 13};
const int STEPPER_2_PINS[] = {14, 15, 16, 17};
const int STEPPER_3_PINS[] = {18, 19, 20, 21};
const int STEPS_PER_REVOLUTION = 2048;
const int SECOND_ROTATE_COOLDOWN = 1;

IRrecv receiver(RECEIVER_PIN);
decode_results results;
Stepper steppers[] = {
        Stepper(STEPS_PER_REVOLUTION, STEPPER_1_PINS[0], STEPPER_1_PINS[1], STEPPER_1_PINS[2], STEPPER_1_PINS[3]),
        Stepper(STEPS_PER_REVOLUTION, STEPPER_2_PINS[0], STEPPER_2_PINS[1], STEPPER_2_PINS[2], STEPPER_2_PINS[3]),
        Stepper(STEPS_PER_REVOLUTION, STEPPER_3_PINS[0], STEPPER_3_PINS[1], STEPPER_3_PINS[2], STEPPER_3_PINS[3])
};

void rotateTarget(int targetNumber) {
    Stepper stepper = steppers[targetNumber];
    stepper.step(STEPS_PER_REVOLUTION / 2); // Rotate 180 degrees (1024 steps)
    delay(SECOND_ROTATE_COOLDOWN * 1000);
    stepper.step(-STEPS_PER_REVOLUTION / 2); // Rotate back 180 degrees
    delay(SECOND_ROTATE_COOLDOWN * 1000);
}

void setup() {
    Serial.begin(9600);

    for (auto stepper: steppers) {
        stepper.setSpeed(10);
    }

    receiver.enableIRIn();
    setLEDFeedback(true);
}

void loop() {
    if (receiver.decode()) {
        int targetNumber = 0;
        rotateTarget(targetNumber);
        receiver.resume();
    }
}