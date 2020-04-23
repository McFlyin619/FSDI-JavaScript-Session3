// Object Literal

const person = {
    name:'OBrien',
    age:33,
    birthYear:function(){
        return new Date().getFullYear()-this.age;
    }
}

const person2 = {
    name:'Joel',
    age: 30
}

console.log(person.birthYear());
console.log(person.age);


//  Object Constructor

class Task {
    constructor(name,priority){
        this.name = name;
        this.priority = priority;
    }
}

const task1 = new Task('Learn JS','High');
const task2 = new Task('Homework','Medium');
const task3 = new Task('Complete Canvas','Low');

document.getElementById("task").innerHTML = `Name: ${task1.name}, Priority: ${task1.priority}`;
console.log(`Name: ${task2.name}, Priority: ${task2.priority}`);
console.log(`Name: ${task3.name}, Priority: ${task3.priority}`);


// Object Literal

let lion = {
    name:'Simba',
    foodType:'Carnivore',
    kingOfJungle:true
}

let monkey = {
    name:'Louie',
    foodType:'Carnivore',
    kingOfJungle:false
}

console.log(lion);
console.log(monkey);

//  Object Constructor

class Animal {
    constructor(name, foodType, kingOfJungle) {
        this.name = name;
        this.foodType = foodType;
        this.kingOfJungle = kingOfJungle;
    }
}

let animal1 = new Animal('Snoopy','Carnivore',false);
let animal2 = new Animal('Garfield','Lasagna',true);

console.log(animal1);
console.log(animal2);