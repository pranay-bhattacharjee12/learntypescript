//interfaces- an interface is a way to define the structure/shape of an object.
//Any object using this interface must have these properties with these types.

interface User {
    name: string,
    age: number,
    email ?: string;  //optional property
}


//extending interfaces- an interface can extend another interface, inheriting its properties and adding new ones.
interface Admin extends User {
    role: string;
}

//This function accepts a User object and must return a boolean.
function eligbleForVoting(user: User) : boolean {
    return user.age >= 18;
}

//user1 follows the User interface structure
const user1: User = {
    name: "Pranay",
    age: 23,
    email: "pranay@gmail.com"
};

const user2: User = {
    name: "Rahul",
    age: 16
};

const user3: Admin ={
    name: "AdminUser",
    age: 30,
    email: "adminuser@gmail.com",
    role: "Super Admin"
};

console.log(`${user1.name} is eligible for voting: ${eligbleForVoting(user1)}`);
console.log(`${user2.name} is eligible for voting: ${eligbleForVoting(user2)}`);
console.log(`${user3.name} is eligible for voting: ${eligbleForVoting(user3) && ` and role is ${user3.role}`}`);