const add = (a: number, b: number): number => {
  return a + b;
};

const divide = (a: number, b: number): number => {
  return a / b;
};

const multiply = (a: number, b: number): number => {
  return a * b;
};

// void and never
const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

// destructuring annotations

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);








