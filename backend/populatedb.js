
  // Get arguments passed on command line
  const userArgs = process.argv.slice(2);
  
  const Hero = require("./models/hero");
  const Pet = require("./models/pet");
  
  const heroes = [];
  const pets = [];
  
  
  const mongoose = require("mongoose");
  mongoose.set("strictQuery", false); // Prepare for Mongoose 7
  
  const mongoDB = userArgs[0];
  
  main().catch((err) => console.log(err));
  
  async function main() {
    console.log("Debug: About to connect");
    await mongoose.connect(mongoDB);
    console.log("Debug: Should be connected?");
    await createPets();
    await createHeroes();    
    console.log("Debug: Closing mongoose");
    mongoose.connection.close();
  }
  
  async function petCreate(id, name) {
    const pet = new Pet({ id: id, name: name });
    await pet.save();
    pets.push(pet);
    console.log(`Added pet: ${name}`);
  }

  async function heroCreate(id, name, pet) {
    const hero = new Hero({ id: id, name: name, pet: pet});
    await hero.save();
    heroes.push(hero);
    console.log(`Added hero: ${name}`);
  }

  async function createHeroes() {
    console.log("Adding heroes");
    await Promise.all([
      heroCreate(1,"Alberto", pets[0]),
      heroCreate(2, "Jonas", pets[1]),
      heroCreate(3, "Pedro", pets[2]),
      heroCreate(3, "António", pets[1]),
      heroCreate(3, "Norberto", pets[2])
    ]);
  }
  
  async function createPets() {
    console.log("Adding pets");
    await Promise.all([
      petCreate(1, "Cão"),
      petCreate(2, "Gato"),
      petCreate(3, "Coelho"),
      petCreate(4, "Cavalo"),
      petCreate(5, "Leão Marinho"),
    ]);
  }
  