'use strict'

class Entity {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}

class Stuff extends Entity {
    constructor(name, stuff = []) {
        super(name);
        this._stuff = stuff; 
    }

    addItemStuff(item) {
        this._stuff.push(item);
    }
}

class User extends Entity {
    constructor(firstName, lastName) {
        super(firstName);
        this._lastName = lastName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this._lastName = value;
    }
}

class Box extends Entity {
    constructor(name, user, stuff = []) {
        super(name);
        this._user = user;
        this._stuff = stuff;
    }

    addStuff(stuff) {
        this._stuff.push(stuff);
    }
}

const userOne = new User("Marek", "Hamsik");
const userTwo = new User("Lorenzo", "Insigne");
console.log(userOne);
console.log(userTwo);

const stuffOne = new Stuff("sports");
stuffOne.addItemStuff("football");
stuffOne.addItemStuff("tennis");
console.log(stuffOne);

const stuffTwo = new Stuff("animals", ["dog", "cat", "fox"]);
console.log(stuffTwo);

const boxOne = new Box("boxOne", userOne);
boxOne.addStuff(stuffOne);
console.log(boxOne);

const boxTwo = new Box("boxTwo", userTwo, [stuffTwo]);
console.log(boxTwo);