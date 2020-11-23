const person = {
    name: 'MOhit',
    age: 26,
    location : {
        city : 'India',
        temp: 30
    }
};

const {name,age}  = person;
const {city,temp} = person.location;
console.log(`${name} is ${age}`);
console.log(`Its ${temp}`);


//array destrytring
 