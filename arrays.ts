const carMakers: string[] = ['Volvo', 'Toyota', 'Honda', 'Benz', 'BMW'];

const dates = [new Date(), new Date()];

const carByMake: string[][] = [
  ['s80'],
  ['corolla'],
  ['CRV'],
  ['AMG'],
  ['X5']
];

// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

carMakers.push(100);

// Help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible dates

const importantDates: (string | Date)[] = [new Date()];

importantDates.push('2030-10-10');
importantDates.push(new Date());
