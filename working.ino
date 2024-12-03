/**
 * @file working.ino
 * @author perry shu
 * @brief code for arduino car that takes commands and runs movement with them
 * @version 0.1
 * @date 2024-12-03
 *
 * @copyright Copyright (c) 2024
 *
 */
#include <AFMotor.h>
#include <SoftwareSerial.h>

// setup for bt connection
SoftwareSerial bluetooth(9, 10);

// setup motors
AF_DCMotor motorBL(1);
AF_DCMotor motorBR(2);
AF_DCMotor motorFL(4);
AF_DCMotor motorFR(3);

int turnSpeed = 100;
int moveSpeed = 255;

void setup() {
    // connect bluetooth, also initialize serial monitor (mostly unused)
    Serial.begin(9600);
    bluetooth.begin(9600);

    Serial.println("a for Bluetooth connection...");
}

void loop() {
    if (bluetooth.available()) {

        char command = bluetooth.read();
        // serial monitor output for testing, not entirely necessary but good to keep
        Serial.print("Received and echoed: ");
        Serial.println(command);

        // movement
        switch (command) {
            case 'F':
                forward();
                break;
            case 'B':
                backward();
                break;
            case 'L':
                leftRotate();
                break;
            case 'R':
                rightRotate();
                break;
            case 'S':
                stop();
                break;
            case 'a':
                moveSpeed = 128;
                Serial.print("move speed is now: ");
                Serial.println(moveSpeed);
                break;
            case 'b':
                moveSpeed = 152;
                Serial.print("move speed is now: ");
                Serial.println(moveSpeed);
                break;
            case 'c':
                moveSpeed = 179;
                Serial.print("move speed is now: ");
                Serial.println(moveSpeed);
                break;
            case 'd':
                moveSpeed = 204;
                Serial.print("move speed is now: ");
                Serial.println(moveSpeed);

                break;
            case 'e':
                moveSpeed = 255;
                Serial.print("move speed is now: ");
                Serial.println(moveSpeed);
                break;
            case 'f':
                turnSpeed = 128;
                Serial.print("turn speed is now: ");
                Serial.println(turnSpeed);
                break;
            case 'g':
                turnSpeed = 152;
                Serial.print("turn speed is now: ");
                Serial.println(turnSpeed);
                break;
            case 'h':
                turnSpeed = 179;
                Serial.print("move speed is now: ");
                Serial.println(turnSpeed);
                break;
            case 'i':
                turnSpeed = 204;
                Serial.print("turn speed is now: ");
                Serial.println(turnSpeed);
                break;
            case 'j':
                turnSpeed = 255;
                Serial.print("turn speed is now: ");
                Serial.println(turnSpeed);
                break;
            default:
                stop();
                break;
        }
    }
}

/**
 * @brief moves forwards
 * 
 */
void forward() {
    motorBL.setSpeed(moveSpeed);
    motorBR.setSpeed(moveSpeed);
    motorFL.setSpeed(moveSpeed);
    motorFR.setSpeed(moveSpeed);
    motorBL.run(FORWARD);
    motorBR.run(FORWARD);
    motorFL.run(FORWARD);
    motorFR.run(FORWARD);
}

/**
 * @brief moves backwards
 * 
 */
void backward() {
    motorBL.setSpeed(moveSpeed);
    motorBR.setSpeed(moveSpeed);
    motorFL.setSpeed(moveSpeed);
    motorFR.setSpeed(moveSpeed);
    motorBL.run(BACKWARD);
    motorBR.run(BACKWARD);
    motorFL.run(BACKWARD);
    motorFR.run(BACKWARD);
}

/**
 * @brief rotates right
 * 
 */
void rightRotate() {
    motorBL.setSpeed(turnSpeed);
    motorBR.setSpeed(turnSpeed);
    motorFL.setSpeed(turnSpeed);
    motorFR.setSpeed(turnSpeed);
    motorBL.run(FORWARD);
    motorBR.run(BACKWARD);
    motorFL.run(FORWARD);
    motorFR.run(BACKWARD);
}

/**
 * @brief strafes right, unused because doesn't work well and looks funny
 * 
 */
void rightStrafe() {
    motorBL.setSpeed(moveSpeed);
    motorBR.setSpeed(moveSpeed);
    motorFL.setSpeed(moveSpeed);
    motorFR.setSpeed(moveSpeed);
    motorFR.run(BACKWARD);
    motorFL.run(FORWARD);
    motorBR.run(FORWARD);
    motorBL.run(BACKWARD);
}

/**
 * @brief rotates left
 * 
 */
void leftRotate() {
    motorBL.setSpeed(turnSpeed);
    motorBR.setSpeed(turnSpeed);
    motorFL.setSpeed(turnSpeed);
    motorFR.setSpeed(turnSpeed);
    motorBL.run(BACKWARD);
    motorBR.run(FORWARD);
    motorFL.run(BACKWARD);
    motorFR.run(FORWARD);
}

/**
 * @brief strafes left, unused because doesn't work well and looks funny
 * 
 */
void leftStrafe() {
    motorBL.setSpeed(moveSpeed);
    motorBR.setSpeed(moveSpeed);
    motorFL.setSpeed(moveSpeed);
    motorFR.setSpeed(moveSpeed);
    motorFR.run(FORWARD);
    motorFL.run(BACKWARD);
    motorBR.run(BACKWARD);
    motorBL.run(FORWARD);
}

/**
 * @brief stops all motors
 * 
 */
void stop() {
    motorBL.run(RELEASE);
    motorBR.run(RELEASE);
    motorFL.run(RELEASE);
    motorFR.run(RELEASE);
}