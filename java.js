class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}`;
    } else {
      return `${this.firstName} e ${otherUser.firstName} hanno la stessa età`;
    }
  }
}
const mario = new User("Mario", "Rossi", 30, "Roma");
const luca = new User("Luca", "Bianchi", 25, "Milano");

console.log(mario.compareAge(luca));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  static sameOwner(pet1, pet2) {
    return pet1.ownerName === pet2.ownerName;
  }
}
const pet1 = new Pet("Fido", "Marco", "cane", "labrador");
const pet2 = new Pet("Whiskers", "Marco", "gatto", "soriano");
const pet3 = new Pet("Bunny", "Lucia", "coniglio", "nano");
console.log(Pet.sameOwner(pet1, pet2));
console.log(Pet.sameOwner(pet1, pet3));

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");

let pets = [];

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const pet = new Pet(petName, ownerName, species, breed);
  pets.push(pet);

  const listItem = document.createElement("li");
  listItem.textContent = `${petName} (di ${ownerName}): ${species}, ${breed}`;
  petList.appendChild(listItem);

  petForm.reset();
});
