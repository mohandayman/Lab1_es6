class Engine {
  static #count = 0; // Static Property Count
  constructor(color) {
    // Engine Constructor
    if (new.target === Engine) {
      // If The Consturctor Is Engine Class
      throw new Error("Cannot Instantiate An Engine Class");
    } else {
      // If The The Consturctor Is Not Engine ex: Car
      this.color = color;
      Engine.#count++;
    }
  }

  static get count() {
    // Get Private Member Count
    return Engine.#count;
  }
}
Engine.prototype.move = function () {
  // Define Move Function As Prototype Function To Save Memory
  console.log("Moving");
};
// ======================================== Car Class=====================================================
class Car extends Engine {
  // Class Car Inherit => Engine Class
  #ownerName; // Private Property Owner Nmae
  constructor(ownerName, BrandName, ProductionYear, color = "red") {
    // Car Constructor
    // Inizilize The Car Properties
    super(color);
    (this.#ownerName = ownerName),
      (this.BrandName = BrandName),
      (this.ProductionYear = ProductionYear);
  }
  set ownerName(value) {
    // private prov setter
    this.#ownerName = value;
  }
  get ownerName() {
    // private prov setter
    return this.#ownerName;
  }
}
Car.prototype.move = function () {
  console.log(`${this.ownerName} is Moving !!`);
};

Car.prototype.toString = () => {
  return `the Class Name : ${Car.name}`;
};
var car1 = new Car("Mohand", "BMW", "2022");
var car2 = new Car("ayman", "BMW", "2022");
var car3 = new Car("Ahmed", "BMW", "2022");
console.log(car1);
car1.move();

console.log(car1.toString());

console.log(Car.count);
