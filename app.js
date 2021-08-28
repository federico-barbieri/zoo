




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

const myElephant = new Elephant('Johnny', true, true);

console.log(myElephant.name);
