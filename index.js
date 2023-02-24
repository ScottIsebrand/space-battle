// Read everything, then create classes,  6 alien ships, 1 human ship
// we attack, they attack, if we destroy ship, we retreat & end game or attack next ship
// win condition = destroy all 6 ships

class Ship {
  constructor(hull, firepower, accuracy) {
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
    this.isAlive = true;
  }

  attackByAssembly(alien1) {
    // declare a random number
    const randomNum = Math.random();

    // compare for successful attack
    if (randomNum < this.accuracy) {
      // uss firepower deducts alien ship hull
      alien1.hull = alien1.hull - this.firepower;
      console.log(`You HIT the alien !`);
    }
    if (alien1.hull <= 0) {
      alien1.isAlive = false;
    } else {
      console.log('You missed the alien !');
    }
  }

  retreat() {
    console.log('You retreat to fight again another day');
  }
}

const ussAssembly = new Ship(20, 5, 0.7);

class Alien {
  constructor(hull, firepower, accuracy) {
    // logic for aliens
    this.hull = Math.round(Math.random() * 3 + 3);
    this.firepower = Math.round(Math.random() * 2) + 2;
    this.accuracy = Math.round(Math.random() * 2 + 6) / 10;
    this.isAlive = true;
  }

  attackByAlien(ship) {
    const randomNum = Math.random();
    if (randomNum < this.accuracy) {
      console.log('Alien hit the USS Assembly!');
    }
  }
}

const alien1 = new Alien();
const alien2 = new Alien();
const alien3 = new Alien();
const alien4 = new Alien();
const alien5 = new Alien();
const alien6 = new Alien();

const arrayOfAliens = [alien1, alien2, alien3, alien4, alien5, alien5];
// want to attack or retreat?
// using an array to iterate through alien ships

ussAssembly.attackByAssembly();
