//Record is another TypeScript utility type. It is used when you want to create an object type where you know the type of the keys and the type of the values.
//I want an object/dictionary where every key follows this type and every value follows another type.
//It's basically a typed object.

type Role = "admin" | "user" | "guest";

//Every Role must have an array of strings
const permissions: Record<Role, string[]> = {
    admin: ["create", "delete", "update"],
    user: ["read", "update"],
    guest: ["read"]
};

//map also key,vlue store data struckture

const users = new Map<number, string>();

//add the data
users.set(1, "Pranay");
users.set(2, "Rahul");
users.set(3, "Amit");

//get the data 
console.log(users.get(1));
