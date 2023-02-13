
//Modifiers
/*
class Vehicle {
  public drive(): void {
    console.log('done done');
  }

  public honk(): void {
    console.log('Eureka Eureka');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('boom boom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
};

const car = new Car();
car.startDrivingProcess();
car.honk();
*/

// Fields

/*
class Vehicle {
  constructor(public color: string) {
  }

  protected honk(): void {
    console.log('Eureka Eureka');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);
*/

// Fields with inheritance

class Vehicle {
  constructor(public color: string) {
  }

  public honk(): void {
    console.log('Eureka Eureka');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, public color: string) {
    super(color);
  }


  drive(): void {
    console.log('boom boom');
  }

  startDrivingProcess(): void {
    this.drive();
  }
};

const car = new Car(4, 'red');
car.startDrivingProcess();
car.honk();
