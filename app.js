




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
