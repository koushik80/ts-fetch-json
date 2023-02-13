// Annotations around Objects

const profile = {
  name: 'Koushik',
  age: 42,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

const { age }: { age: number } = profile; // destructure
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile; // destructure