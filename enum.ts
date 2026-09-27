//an enum (enumeration) is a way to define a set of named constant values.
//So, think of an enum as a predefined collection of allowed values.


enum Role {
    Admin = "admin",  //you can declear string or num or nothing in enum
    User = "user",
    Guest = "guest"
}

function getRole(role: Role){
    if(role == Role.Admin){
        console.log("you have admin access");
    } else if (role == Role.User){
        console.log("you have user access");
    } else if(role ==Role.Guest){
        console.log("you have guest access");
    }
}

getRole(Role.Admin); // you have admin access
getRole(Role.User); // you have user access
getRole(Role.Guest); // you have guest access
