# gesture-car
CS307 Final Project to Code a Gesture-Controlled Car
Final Project Write-up
## Packages and Requirements
### Front-end(npm):
    1. cd to “/GCar-Frontend” folder and run “npm install” to download all of the packages
        Dependencies can be found in "/GCar-Frontend/package.json" 
    
### Back-end(pip):
    1. Activate virtual environment, cd to “/dev” folder, and run “pip install -r requirements.txt” to download all of the 
        Dependencies can be found in "requirements.txt"
## Running the programs
### Front-end:
    1. cd to “/GCar-Frontend” and run “npm run dev” to start front-end application
### Back-end:
    1. cd to “/dev” and run “python main.py” to start back-end application
### Hardware:
    1. Ensure Arduino is powered on

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
