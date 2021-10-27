class Car {
    constructor(model, milesPerGallon) {
        this.model = model;
        this.milesPerGallon = milesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fills(gallons){
        this.tank += gallons;
    }

    drive(distance) {
        if(distance < this.tank * this.milesPerGallon){
            this.odometer += distance;
            this.tank = distance / this.milesPerGallon;
        }
        else if(distance == this.tank * this.milesPerGallon ){
            this.odometer += distance;
            this.tank = distance / this.milesPerGallon;
            return "I ran out of fuel at" + this.distance + "miles! " + this.odometer + " being odometer";
        }
        else {
            this.odometer += this.tank * this.milesPerGallon;
            this.tank = distance / this.milesPerGallon;
            return "I ran out of fuel at" + this.tank * this.milesPerGallon + "miles! " + this.odometer + " being odometer";
        }
        
    }

}