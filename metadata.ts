import 'reflect-metadata';

@printMetaData
class Plane {
  color: string = 'red';

  @markFunction('Hello')
  fly(): void {
    console.log('frrrrrr');
  }
}

function markFunction(secretInfo: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

function printMetaData(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key);
    console.log(secret);
  }
}

