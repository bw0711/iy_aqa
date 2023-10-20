// task 1
const driverAge = 21;
const ableToDrive = driverAge > 18;
console.log(ableToDrive);

//task 2
const firstName = "Alex";
const secondName = "John";
const greetings = `Hello ${firstName}, hello ${secondName}`;
console.log(greetings);
console.log(firstName + " " + secondName + " " + greetings);

//task 3
const floatNumber = "5.489";
const parseFloatValue = parseFloat(floatNumber);
console.log(typeof parseFloatValue);
console.log(isNaN(parseFloatValue));
console.log(parseFloatValue.toFixed(1));
const parseToString = parseFloatValue.toString();
console.log(typeof parseToString);

//task 4
const myStringOne =
  "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation.";
console.log(myStringOne.length);
console.log(myStringOne.replace("world", "REPLACED"));
console.log(myStringOne.endsWith("foundation"));

//task 5
const radius = 36;
console.log("Circle area = ", Math.PI * Math.pow(radius, 2));
const rectangleLenght = 15;
const rectanleWidth = 6;
console.log("Rectangle area = ", rectangleLenght * rectanleWidth);
const cylinderHeight = 30;
console.log("Cylinder area = ", Math.PI * Math.pow(radius, 2) * cylinderHeight);
