# gesture-car
CS307 Final Project to Code a Gesture-Controlled Car
Final Project Write-up
## NOTE:
    - Code will not connect properly without a bluetooth conenction to an rc car
## Packages and Requirements
### Front-end(npm):
    1. cd to “/GCar-Frontend” folder and run “npm install” to download all of the packages
        Dependencies can be found in "/GCar-Frontend/package.json" 
Note: [npm](https://github.com/coreybutler/nvm-windows) and [NodeJS](https://nodejs.org/en/download/prebuilt-installer) must be added ahead of time
### Back-end(pip):
    1. Activate virtual environment and run “pip install -r requirements.txt” to download all of the 
        Dependencies can be found in "requirements.txt"
## Running the programs
### Front-end:
    1. cd to “/GCar-Frontend” and run “npm run dev” to start front-end application
### Back-end:
    1. cd to “/dev” and run “python main.py” to start back-end application
### Connecting the Car:

Make sure the car is powered on and that the LED on the Bluetooth module is blinking rapidly.

#### Steps for Windows 11

1. Open **Settings** using <kbd>Win</kbd> + <kbd>I</kbd>.
2. Navigate to **Bluetooth & Devices** > **Devices**.
3. Scroll down to find **Bluetooth Devices Discover**.
   - Click the dropdown and select **Advanced**.
4. Click **Add Device** > **Bluetooth**.
5. Look for **"HC-05"** in the list of devices the name may have a prefix.
6. Select **HC-05** and enter the PIN **1234**.
7. Once paired, scroll to **More Bluetooth Settings** and click on **COM Ports**.
8. Find the **HC-05** and the label **Outgoing**.
   - Remember the COM port (i.e., `COM5`).

#### Updating the Code

1. Open `main.py` in your code editor.
2. Press <kbd>Ctrl</kbd> + <kbd>F</kbd> to search for the variable `com_port`.
3. Update `com_port` to match the outgoing COM port from Step 8 (i.e, `COM5`).


## How to Use:
    1. This is a gesture controlled car trained on 5 ASL signs that correlate to instructions to the car
    2. The five signs are “Y”, “L”,”C”,”W”,”O”. The front end provides examples for how to sign this these letters
        “Y” - Stop
        “W” - Go
        “L” - Left
        “C” - Right
        “O” - Reverse
### Known Bugs:
    1. Latency between image recognition and instruction to the car is a little slow

### Meeting Times
    1. September 20, 2024:
        Time: 2 hours
        Present: Ashton, Perry, Colsen, Porter
        Discussed: allocated tasks initially, and preliminary discussion of which hardware we would purchase, started researching datasets on Kaggle
    2. November 18, 2024:
        Time: 3 hours
        Present: Porter, Colsen
        Discussed: finished training several models and validating that the final model functions as intended, created slides and filled out information on the slides
    3. December 2, 2024:
        Time: 4 hours
        Present: Perry, Colsen, Ashton, Porter
        Discussed: Integrated components of the model, fixed movement speed issues with the car, and wrote the user manual and dependency list. 
