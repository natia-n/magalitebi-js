car = {
    brand: "Mitsubishi",  
    model: "Carisma",
    engine: 1800,
    fuel: 'gas',
    distance: 240000,
    comforts: ['look', 'park control'],
    owner: {
        name: 'Natia',
        date: '28/12/1981',
        id: '61006010876',
        address: {
            city: 'Batumi',
            street: 'Gorgiladze',
            building: 38,
            zip: 6010
        }
    },
    addComfort(comfort) {
        // console.log(this);
        this.comforts.push(comfort);
    },
}

car.addComfort("stereo");
// console.log(car.comforts);

//ცალკ-ცალკე დავბეჭდოს owner-ის address-ის ყველა მნიშვნელობა

for (const key in car.owner.address) { //მასივში key არის ინდექსი
     if (Object.hasOwnProperty.call(car.owner.address, key)) { //ამოწმებს თუ გააჩნია მისი საკუთარი პროფერტი. ამ შემთხვევაში არ გვინდა
        // console.log(car.owner.address[key]);        
    }
}

let arr = [5, 6, 7, 8];
let obj = {
    a: 1,
    b: 2,
    c: 3
}

let t = Object.values(car.owner.address);

// console.log(t);

for(let v of t) {
    // console.log(v);
}

// console.log(typeof asfsaf !== 'undefined')

//ორი კონსტრაქტორ ფანქშენი, ოვნერ, ადრესის და ქარისთვის და ამ ფუნქციებით ვქმნით ქარ ობიექტს

function Address(city, street, building, zip){
    this.city = city;
    this.street = street; 
    this.building = building;
    this.zip = zip;
}

function Owner(name, date, id, address){
    this.name = name;
    this.date = date; 
    this.id = id;
    this.address = address;
}

function Car(brand, model, engine, fuel, distance, comforts){
    this.brand = brand;
    this.model = model; 
    this.engine = engine;
    this.fuel = fuel;
    this.distance = distance;
    this.comforts = comforts;
    this.owners = [];
    this.addOwner = function(owner) {
        this.owners.push(owner);
    }
    this.removeOwner = function(id){
        if(id){
            this.owners = this.owners.filter(el => el.id !== id);
        }else this.owners = [];
    }
}

const address1 = new Address('Tbilisi', 'Rustaveli', 14, 56);
const owner1 = new Owner('Vakho', '10/12/1992', '61006068644', address1);
const owner2 = new Owner('Natia', '10/12/1992', '61001202350', address1);
const owner3 = new Owner('nika', '10/12/1992', '62145874510', address1);

const car1 = new Car('BMW', 'D500', 2200, 'gas', 180000, ['park control', 'mecanik']);
car1.addOwner(owner1);
car1.addOwner(owner2);
car1.addOwner(owner3);
car1.removeOwner('62145874510');
console.log(car1);

//გავარჩიო
// for i a...b
// for...in
// for...of
//spread
//rest