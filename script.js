//!Array destructring
//const fruits = ["🍎", "🍌", "🍋","🍍","🍊"]
//!without destructuring
/*const apple = fruits[0];
const bannana = fruits[1];
console.log(apple);
console.log(bannana);
*/
//!with destructuring
/*const [apple,bannana,mango,pineapple,orange]= fruits;
console.log(apple);
console.log(bannana);
*/
//*Object destructuring
/*const obj = {
    names: "John",
    age: 30,
    address:{
        city:"chennai",
        state: "TamilNadu"
    }
}
*/
//!without destructuring
/*console.log(obj.name);
console.log(obj.age);
console.log(obj.address.city);
*/
//!with destructuring
//const {key} = objectname;
/*const {names,age,address:{city,state}} = obj;
console.log(names);
console.log(age);
console.log(city);
console.log(state);
*/
//? Array of objects destructuring
const groceryshop = [
    {item:"Apple",price: 25,  category:"fruits"},
    {item:"salt",price: 50, category:"misc"},
    {item:"tomato",price: 120,category:"vegetables"}
];
//!without destructuring
/*console.log(groceryshop);
console.log(groceryshop[0].item);
*/

//!with destructuring
const [{item}]= groceryshop
console.log(item);



