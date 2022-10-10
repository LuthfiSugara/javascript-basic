var totalCar = 10;
var carOperating = 6;
var numberOfCar = 1;

while(numberOfCar <= carOperating){
    console.log("Number of car. " + numberOfCar + "is operating well");
    numberOfCar++;
}

for(numberOfCar = carOperating + 1; numberOfCar <= totalCar; numberOfCar){
    console.log("Number of car. " + numberOfCar + "is operating well");
}