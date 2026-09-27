//Generics allow you to write code that works with different types while still keeping type safety.
//I don't know the type yet when declaring the function. You tell me the type when you use this function.
// with generic <T> will be any type

function getElement<T>(arr: T): T{  //here you donot know what will bethe type off arr.
    return arr;
}

const arr1 = getElement<string>('hello'); //here you tell the type of arr is string
const arr2 = getElement<number>(3637); //here you tell the type of arr is number

console.log(arr1);
console.log(arr2);

//you can use genrics in interface also
interface apiResponse<T>{
    success: boolean;
    data: T;
}

const userResponse: apiResponse<string> = {
    success: true,
    data: "Pranay"
};

const ageResponse: apiResponse<number> = {
    success: true,
    data: 23
};

console.log(userResponse.data);
console.log(ageResponse.data);

