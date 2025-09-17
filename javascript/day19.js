/// objects in javascript
let cars = ["nexon", "polo gt"];

let myCar = {
  color: "black",
  model: "nexon ev",
  color:"red",
  brand: "tata",
  no: 455456,
  onSale: false,
  owners: ["ram", "raj", "abc"],
  fullDetail: function (m,c,o) {
    return `car model is ${m} and color is ${c} and owners are ${o}`;
  },
};

//accessing values "objectName.keyname" || "objectName['keyName']==> key should be in string"
console.log(myCar.color);
// console.log(myCar[no]);

//override "objectName.keyName = "new value"" // new data


//adding new key value pair in a object
// ObjectName.newKeyName = NewValue

// create object by create() method


let mindcodersCar = Object.create(myCar)


const car = {type:"Fiat", model:"500", color:"white"};
// Object.freeze(car)
// Object.preventExtensions(car)
Object.seal(car)


// Prevents adding object properties
// Object.preventExtensions(object)

// // Returns true if properties can be added to an object
// Object.isExtensible(object)

// // Prevents adding and deleting object properties
// Object.seal(object)

// // Returns true if object is sealed
// Object.isSealed(object)

// // Prevents any changes to an object
// Object.freeze(object)

// // Returns true if object is frozen
// Object.isFrozen(object)