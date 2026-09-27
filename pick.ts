//Pick is a built-in TypeScript utility type that lets you create a new type by selecting only certain properties from an existing type.
//From this type, I only want these properties

interface User {
    name: string;
    id: string;
    password: string;
}

//When returning user information to the frontend, you don't want to expose the password.
// them you use pick make update one which reflcet in fe

type public = Pick<User, "name"| "id">;

const user: Public = {
    name: "Pranay",
    email: "pranay@gmail.com"
};

console.log(`user name is ${user.name} and isd is ${user.email}`);

//omit - keep everrything except omit

type show = Omit<User, "password">


const user2: show ={
    name: "rm das",
    id: "13"
}
console.log(`user name is ${user2.name} and id is ${user2.id}`);


