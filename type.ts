//types- type is used to give a name to a type so you can reuse it.

type User = {
    name: string,
    age: number | string,
    email?: string
}

type admin ={
    role: string,
}

//in types you canot impletment like in interfaces but you can extend types using intersection types.

type superAdmin  = User & admin;


const user1: User ={
    name: "raman",
    age: 23
}

const user2: superAdmin ={
    name: "ramesh",
    age: 30,
    role: "Super Admin"
}

console.log(`user1 name is ${user1.name} and age is ${user1.age}`);
console.log(`user2 name is ${user2.name} and age is ${user2.age} and role is ${user2.role}`);   
