//task 1
const yearsOfExperience = 0.1;

if (yearsOfExperience <= 0.5) {
    console.log('Salary = 0, bonus = 0%');
} else if (yearsOfExperience > 0.5 && yearsOfExperience <= 1) {
    console.log('Salary = 100, bonus = 1%');
} else if (yearsOfExperience > 1 && yearsOfExperience <= 2) {
    console.log('Salary = 333, bonus = 3%');
} else if (yearsOfExperience > 2 && yearsOfExperience <= 4) {
    console.log('Salary = 555, bonus = 4%');
} else if (yearsOfExperience > 4) {
    console.log(`Salary = 666, bonus = ${yearsOfExperience * 666}`)
} else console.log('Error');

//task2
const month = 'October';
switch (month) {
    case 'January': console.log(month);
        break;
    case 'February': console.log(month);
        break;
    case 'March': console.log(month);
        break;
    case 'April': console.log(month);
        break;
    case 'May': console.log(month);
        break;
    case 'June': console.log(month);
        break;
    case 'July': console.log(month);
        break;
    case 'August': console.log(month);
        break;
    case 'September': console.log(month);
        break;
    case 'October': console.log(month);
        break;
    case 'November': console.log(month);
        break;
    case 'December': console.log(month);
        break;
    default: console.log('Error');
};

//task 3
const value = 30;
for (let i = 0; i <= value; i++) {
    if (i % 2 === 0 && i !== 0 && i !== 22) {
        console.log(i);
    };
};

//task 4
const valueA = 12;
const valueB = 70;
console.log(valueA > valueB ? valueA : valueB);

//task 5
const myString = 'Javascript is fun';
let i = 0;

while (i < myString.length) {
    const currentChar = myString[i];
    if (currentChar === 'a') {
        i++;
        continue;
    }
    if (currentChar === 'n') {
        console.log(`The loop was interrupted on '${currentChar}' char`);
        break;
    }
    i++;
};