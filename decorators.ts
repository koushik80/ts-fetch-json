class Boat {
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  //@testDecorator
  @logError
  pilot(): void {
    throw new Error();
    console.log('swish')
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops, Boat was sunk!')
    }
  }
}

new Boat().pilot();

//testDecorator(Boat.prototype, 'pilot');