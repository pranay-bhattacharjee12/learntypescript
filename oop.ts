/* =====================================================================
 *                 TYPESCRIPT CLASSES — QUICK NOTES
 * =====================================================================
 * Topics covered:
 *   1. Basic class + constructor
 *   2. Access modifiers  (public / private / protected)
 *   3. readonly properties
 *   4. Getters & Setters
 *   5. static members
 *   6. Parameter properties (constructor shorthand)
 *   7. Abstract classes
 *
 * Convention tip: class names are usually written in PascalCase
 * (Chai, Shop, Cup), but the names from the original notes are kept here.
 * ===================================================================== */


/* ---------------------------------------------------------------------
 * 1. BASIC CLASS + CONSTRUCTOR
 * ---------------------------------------------------------------------
 * - A class is a blueprint for creating objects.
 * - Properties must be declared with their types.
 * - The constructor runs automatically when you use `new`,
 *   and is used to initialise the properties.
 * ------------------------------------------------------------------- */

// class chai {
//     flavour: string;
//     price: number;
//
//     constructor(flavour: string, price: number) {
//         this.flavour = flavour;   // `this` refers to the object being created
//         this.price = price;
//     }
// }
//
// const masalaChai = new chai("Masala", 10);   // creating an object (instance)


/* ---------------------------------------------------------------------
 * 2. ACCESS MODIFIERS
 * ---------------------------------------------------------------------
 * public    → accessible from anywhere (this is the DEFAULT)
 * private   → accessible ONLY inside the same class
 * protected → accessible inside the class AND its subclasses,
 *             but NOT from outside (i.e. not from an object)
 * ------------------------------------------------------------------- */

// ---- public & private ----
class chai {
    public flavour: string = "Masala";    // anyone can read/change this
    private ingredients: string = "sugar"; // hidden from outside the class

    // A public method can still read private data and expose it safely
    revealIngredients() {
        return this.ingredients;
    }
}

const c = new chai();
console.log(c.flavour);             // ✅ allowed (public)
console.log(c.revealIngredients()); // ✅ allowed (goes through a public method)
// console.log(c.ingredients);      // ❌ Error: 'ingredients' is private


// ---- protected ----
class shop {
    protected shopName: string = "Chaiwala";
}

// `extends` creates a subclass (child class) that inherits from `shop`
class branch extends shop {
    getname() {
        return this.shopName; // ✅ allowed: subclass can access protected member
    }
}

const b = new branch();
console.log(b.getname());   // ✅ "Chaiwala"
// console.log(b.shopName); // ❌ Error: protected, not accessible from outside


/* ---------------------------------------------------------------------
 * 3. READONLY PROPERTIES
 * ---------------------------------------------------------------------
 * - A `readonly` property can be assigned ONLY:
 *     a) where it is declared, or
 *     b) inside the constructor
 * - After the object is created, it can never be changed.
 * ------------------------------------------------------------------- */

class cup {
    readonly size: string = "M"; // default value

    constructor(size: string) {
        this.size = size; // ✅ allowed: we are still inside the constructor
    }
}

const myCup = new cup("L");
console.log(myCup.size); // ✅ "L" (reading is fine)
// myCup.size = "S";     // ❌ Error: cannot assign to 'size', it is read-only


/* ---------------------------------------------------------------------
 * 4. GETTERS & SETTERS
 * ---------------------------------------------------------------------
 * - Let you control how a private property is read (get) and changed (set).
 * - They are used like normal properties (no brackets when calling).
 * - Setters are handy for VALIDATION before saving a value.
 * - Convention: prefix the private backing field with an underscore (_sugar).
 * ------------------------------------------------------------------- */

class Moderchai {
    private _sugar: number = 2;

    // getter → runs when you READ chai1.sugar
    get sugar() {
        return this._sugar;
    }

    // setter → runs when you ASSIGN chai1.sugar = value
    set sugar(value: number) {
        if (value < 0) {
            throw new Error("Sugar cannot be negative");
        }
        this._sugar = value;
    }
}

const chai1 = new Moderchai();
chai1.sugar = 5;          // calls the setter (validation passes)
console.log(chai1.sugar); // calls the getter → 5
// chai1.sugar = -1;      // ❌ runtime error: "Sugar cannot be negative"


/* ---------------------------------------------------------------------
 * 5. STATIC MEMBERS
 * 6. PARAMETER PROPERTIES (constructor shorthand)
 * ---------------------------------------------------------------------
 * static:
 *   - Belongs to the CLASS itself, not to individual objects.
 *   - Access it with ClassName.property, not object.property.
 *
 * Parameter properties:
 *   - Writing an access modifier (public/private/protected/readonly)
 *     before a constructor parameter automatically declares AND assigns
 *     that property. No need to write `this.price = price`.
 * ------------------------------------------------------------------- */

class ekchai {
    static flavour: string = "Masala"; // shared by the class, not per object

    // `public price` = declare property + assign it, in one step
    constructor(public price: number) {}
}

console.log(ekchai.flavour); // ✅ "Masala" (accessed via the class)

const e = new ekchai(20);
console.log(e.price);        // ✅ 20 (created by the parameter property)
// console.log(e.flavour);   // ❌ Error: static members are not on objects


/* ---------------------------------------------------------------------
 * 7. ABSTRACT CLASSES
 * ---------------------------------------------------------------------
 * - An abstract class is a BASE class that cannot be instantiated directly.
 * - `abstract` members have no implementation; they are a "contract"
 *   that every subclass MUST implement.
 * - Abstract classes can ALSO contain normal (implemented) methods.
 * ------------------------------------------------------------------- */

abstract class chaiwala {
    abstract flavour: string;          // subclass must define this
    abstract price: number;            // subclass must define this

    abstract getFlavour(): string;     // subclass must implement this

    // a normal method that every subclass gets for free
    describe(): string {
        return `${this.getFlavour()} chai costs ₹${this.price}`;
    }
}

// const x = new chaiwala();  // ❌ Error: cannot create an instance of an abstract class

// A concrete subclass that fulfils the contract
class gingerChai extends chaiwala {
    flavour: string = "Ginger";
    price: number = 15;

    getFlavour(): string {
        return this.flavour;
    }
}

const g = new gingerChai();
console.log(g.describe()); // ✅ "Ginger chai costs ₹15"