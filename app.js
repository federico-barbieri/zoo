




// CLASSES

class Animal {
  constructor(name, species, age, hobby, superpower){
    this._name = name;
    this._species = species;
    this._age = age;
    this._hobby = hobby;
    this._superpower = superpower;
  }
  get name(){
    return this._name;
  }
  get species(){
    return this._species;
  }
  get age(){
    return this._age;
  }
  get hobby(){
    return this._hobby;
  }
  get superpower(){
    return this._superpower;
  }
}

class Tiger extends Animal {
  constructor(name, spots, tail){
    super(name);
    this._spots = spots;
    this._tail = tail;
  }
  get spots(){
  return this._spots;
  }
  get tail(){
    return this._tail;
  }
}

class Monkey extends Animal {
  constructor (name, tail){
    super(name);
    this._tail = tail;
  }
  get tail(){
    return this._tail;
  }
}

class Elephant extends Animal {
  constructor (name, tail, trunk){
    super(name);
    this._tail = tail;
    this._trunk = trunk;
  }
  get tail(){
    return this._tail;
  }
  get trunk(){
    return this._trunk;
  }
}


const myMonkey = new Monkey('Nick', true);

myMonkey._species = 'Mammal';
myMonkey._age = 25;
myMonkey._hobby = 'Watch tv';
myMonkey._superpower = 'Tail punch';

console.log(myMonkey.name);
console.log(myMonkey.species);
console.log(myMonkey.age);
console.log(myMonkey.hobby);
console.log(myMonkey.superpower);



const myElephant = new Elephant('Johnny', true, true);

myElephant._species = 'Mammal';
myElephant._age = '60';
myElephant._hobby = 'Chillax in the sofa';
myElephant._superpower = "Universal memory";

console.log(myElephant.name);
console.log(myElephant.tail);
console.log(myElephant.trunk);
console.log(myElephant.species);
console.log(myElephant.age);
console.log(myElephant.hobby);
console.log(myElephant.superpower);
