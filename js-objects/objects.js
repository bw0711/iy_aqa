//task 1

let automationQA = {};

automationQA.programmerName = "Ivan";
automationQA.programmingLanguages = "Javascript";
automationQA.age = 30;
automationQA.languages = ["Ukrainian", "English"];
automationQA.preferences = { basicPreferences: "Table" };

console.log(automationQA);

//task 2

let room = {
  name: "livingRoom",
  size: 42,
  windows: true,
};

console.log(room.name, room.windows);

//task 3

let movie = {
  title: "Inception",
  releaseYear: 2010,
  genre: "Science fiction",
};

console.log(movie);

movie.title = "The Dark Knight";
movie.genre = "Superhero";
movie.actors = {
  mainRole: "Christian Bale",
  supportingRole: "Gary Oldman",
};
movie.director = "Christopher Nolan";

delete movie.title;
console.log(movie);

//task 4

const englishBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgeral",
    year: 1925,
  },
];

for (const book of englishBooks) {
  if (book.title === "The Great Gatsby") {
    continue;
  }

  if (book.year > 1940) {
    console.log(book.title, book.year);
  }

  if (book.author === "George Orwell") {
    book.author = "CHANGED HERE";
  }
}

console.log(englishBooks);

//task 5

const nestedObject = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
  },
};

for (const key in nestedObject.address) {
  const value = nestedObject.address[key];
  console.log(key, value);
}

//task 6

const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    postalCode: "10001",
  },
};

const getUserInfo = ({ name, age }) => console.log(name, age);
const getFullAddress = ({ email, address: { city, postalCode } }) =>
  console.log(email, city, postalCode);

getUserInfo(user);
getFullAddress(user);
