
// question 1

let  user = { name: "Alice", age: 25, country: "USA" }

let {name,age,country}=user

console.log(name,age,country)

// question 2

let colors = ["red", "blue", "green"]

let [a,b,c]=colors

console.log(a,b,c)

// question 3

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let merge=[...arr1, ...arr2]

console.log(merge)

// question 4

let obj1 = { p: 1, q: 2 }

let obj2 = {r:3,s:4}

let merged = {...obj1, ...obj2}

console.log(merged)