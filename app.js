// TEXT SELECTORS

const welcome = document.querySelector('.welcome-title');

const magic = document.querySelector('.magic');


// ANIMAL SELECTORS

const animals = document.querySelector('.animals');

const tiger = document.querySelector('.tiger');

const tigerGroup = document.querySelector('.tiger-group');

const tigerFeatures = document.querySelector('.tiger-features');

const monkey = document.querySelector('.monkey');

const monkeyGroup = document.querySelector('.monkey-group');

const monkeyFeatures = document.querySelector('.monkey-features');

const elephant = document.querySelector('.elephant');

const elephantGroup = document.querySelector('.elephant-group');

const elephantFeatures = document.querySelector('.elephant-features');

// ATTRIBUTES SELECTOR
const attribute = document.querySelector('.attr');

const tigerName = document.querySelector('.tiger-name');
const tigerHobby = document.querySelector('.tiger-hobby');
const tigerSuperpower = document.querySelector('.tiger-superpower');

const monkeyName = document.querySelector('.monkey-name');
const monkeyHobby = document.querySelector('.monkey-hobby');
const monkeySuperpower = document.querySelector('.monkey-superpower');

const elephantName = document.querySelector('.elephant-name');
const elephantHobby = document.querySelector('.elephant-hobby');
const elephantSuperpower = document.querySelector('.elephant-superpower');

// TRY AGAIN BUTTON SELECTOR
const tryAgainBtn = document.querySelector('.try-again-btn');
//
//
//

// RANDOM GENERATOR OF COLORS FOR THE MAIN TITLE

function randomColor () {
let randomNum1 = Math.floor(Math.random()*255);
let randomNum2 = Math.floor(Math.random()*255);
let randomNum3 = Math.floor(Math.random()*255);

let randomColor = (`rgb(${randomNum1}` + `, ` + `${randomNum2}, ` + `${randomNum3})`);
return randomColor;
}

welcome.addEventListener('mouseover', () =>{
  magic.style.color = randomColor();
})


// MAKING ALL FEATURES INVISIBLE

tigerFeatures.style.display = 'none';

monkeyFeatures.style.display = 'none';

elephantFeatures.style.display = 'none';


// ADDING EVENT LISTENERS THAT MAKE THE FEATURES VISIBLE AGAIN

tiger.addEventListener('click', () => {
tigerFeatures.style.display = "flex";
tigerGroup.style.flexDirection = 'row';
tigerGroup.style.width = '25rem';
tigerGroup.style.alignItems = 'center';
tigerGroup.style.alignSelf = 'center';
tigerGroup.style.justifyContent = 'space-between';
tigerGroup.style.margin = '0 auto 0 auto';
monkey.style.display = 'none';
monkeyGroup.style.display = 'none';
elephant.style.display = 'none';
elephantGroup.style.display = 'none';
tryAgainBtn.style.display = 'inline';
})

monkey.addEventListener('click', () => {
monkeyFeatures.style.display = "flex";
monkeyGroup.style.flexDirection = 'row';
monkeyGroup.style.width = '25rem';
monkeyGroup.style.justifyContent = 'space-between';
monkeyGroup.style.alignItems = 'center';
monkeyGroup.style.margin = '0 auto 0 auto';
tiger.style.display = 'none';
elephant.style.display = 'none';
tigerGroup.style.display = 'none';
elephantGroup.style.display = 'none';
tryAgainBtn.style.display = 'inline';
})

elephant.addEventListener('click', () => {
elephantFeatures.style.display = "flex";
elephantGroup.style.flexDirection = 'row';
elephantGroup.style.width = '25rem';
elephantGroup.style.justifyContent = 'space-between';
elephantGroup.style.alignItems = 'center';
elephantGroup.style.margin = '0 auto 0 auto';
tiger.style.display = 'none';
monkey.style.display = 'none';
tigerGroup.style.display = 'none';
monkeyGroup.style.display = 'none';
tryAgainBtn.style.display = 'inline';
})


// REVEALING THE INFORMATION OF EACH ANIMAL ATTRIBUTE

// tiger attributes
tigerName.addEventListener('click', () => {
  tigerName.innerHTML = myTiger.name;
  tigerName.style.cursor = "default";
})

tigerHobby.addEventListener('click', () =>{
  tigerHobby.innerHTML = myTiger.hobby;
  tigerHobby.style.cursor = 'default';
})

tigerSuperpower.addEventListener('click', () =>{
  tigerSuperpower.innerHTML = myTiger.superpower;
  tigerSuperpower.style.cursor = 'default';
})

// monkey attributes
monkeyName.addEventListener('click', () => {
  monkeyName.innerHTML = myMonkey.name;
  monkeyName.style.cursor = 'default';
})

monkeyHobby.addEventListener('click', () => {
  monkeyHobby.innerHTML = myMonkey.hobby;
  monkeyHobby.style.cursor = 'default';
})

monkeySuperpower.addEventListener('click', () => {
  monkeySuperpower.innerHTML = myMonkey.superpower;
  monkeySuperpower.style.cursor = 'default';
})

// elephant attributes
elephantName.addEventListener('click', () =>{
  elephantName.innerHTML = myElephant.name;
  elephantName.cursor = 'default';
})

elephantHobby.addEventListener('click', () =>{
  elephantHobby.innerHTML = myElephant.hobby;
  elephantHobby.cursor = 'default';
})

elephantSuperpower.addEventListener('click', () =>{
  elephantSuperpower.innerHTML = myElephant.superpower;
  elephantSuperpower.cursor = 'default';
})


// TRY AGAIN BUTTON EVENT LISTENER

tryAgainBtn.addEventListener('click', () => {
  tigerFeatures.style.display = 'inline-flex';
  tigerFeatures.style.display = 'none';
  monkeyFeatures.style.display = 'inline-flex';
  monkeyFeatures.style.display = 'none';
  elephantFeatures.style.display = 'inline-flex';
  elephantFeatures.style.display = 'none';
  tiger.style.display = 'inline';
  monkey.style.display = 'inline';
  elephant.style.display = 'inline';
  animals.style.display = 'none';
  animals.style.display = 'flex';
  animals.style.justifyContent = 'space-around';
  animals.style.alignItems = 'center';
  tigerGroup.style.display = 'flex';
  tigerGroup.style.flexDirection = 'column';
  tigerGroup.style.width = '10rem';
  tigerGroup.style.margin = '0 0 0 0';
  monkeyGroup.style.display = 'flex';
  monkeyGroup.style.flexDirection = 'column';
  monkeyGroup.style.width = '10rem';
  monkeyGroup.style.margin = '0 0 0 0';
  elephantGroup.style.display = 'flex';
  elephantGroup.style.flexDirection = 'column';
  elephantGroup.style.width = '10rem';
  elephantGroup.style.margin = '0 0 0 0';
})


// CLASSES, BEAUTIFUL CLASSES

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


const myTiger = new Tiger ('Diego', 10, true);

myTiger._species = 'Mammal';
myTiger._age = 30;
myTiger._hobby = "Being moody";
myTiger._superpower = "Magnum gaze";


const myMonkey = new Monkey('Nick', true);

myMonkey._species = 'Mammal';
myMonkey._age = 25;
myMonkey._hobby = 'Watch tv';
myMonkey._superpower = 'Tail punch';

const myElephant = new Elephant('Johnny', true, true);

myElephant._species = 'Mammal';
myElephant._age = '60';
myElephant._hobby = 'Chillax';
myElephant._superpower = "Memory";
