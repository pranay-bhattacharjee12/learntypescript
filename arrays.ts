//declearing an array of strings

let fruits: string[] = ["Apple", "Mango", "Banana"];
fruits.push("Orange");
console.log(fruits);

type NumberArray = number[];
function maxvalue(arr: NumberArray): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}   

console.log(maxvalue([36,437, 76]));