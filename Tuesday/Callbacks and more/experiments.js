//1)

let nameArray = ["Oscar","Lone","Joe","Olivia","Trump","Jay","Tim","Ash"];
let namesContainingA = nameArray.filter( x => x.toLowerCase().includes('a'));

console.log(namesContainingA);

let reversedNamesArray = nameArray.map(name => name.split("").reverse().join(""));
console.log(reversedNamesArray);



//2)

//a)
function containsA(input){
    return input.toLowerCase().includes('a');
}

function myFilter(array, callback){
    resultArray = [];
    for (let i = 0; i < array.length; i++){
        let currentItem = array[i];
        if(callback(currentItem)){
        resultArray.push(currentItem);
        }
    }

    return resultArray;

}

console.log(myFilter(nameArray,containsA));

//b)

function reverseString(input){
    return input.split("").reverse().join("");
}

function myMap(array,callback){
    resultArray = [];
    for (let i = 0; i < array.length; i++){
        let currentItem = array[i];
        resultArray.push(callback(currentItem));
}
return resultArray;

}

console.log(myMap(nameArray,reverseString));

/*a) Given this array: var numbers = [1, 3, 5, 10, 11];
Use map + a sufficient callback to map numbers into this array:
var result = [4,8,15,21,11];
Hints: The map() callback can take me additional arguments, see here*/

var numbers = [1, 3, 5, 10, 11];

var result = numbers.map((element, index, elements) => {
    return index < elements.length-1 ? element+elements[index+1] : element;
}
)

console.log(result);



/*b) Use map() to create the <a>’s for a navigation set and eventually a string like below (use join() to get the string of <a>’s):
<nav>
  <a href=””>Lars</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Bo</a>
</nav>
*/

let aString = '<nav>'+nameArray.map(name => '<a href="">'+name+'</a>').join("") + '</nav>';
console.log(aString);

/*c) Use map()+(join + ..) to create a string, representing a two column table, for the data given below:
var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];*/


var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

let tableString = '<table><tr><td>name</td><td>phone</td></tr>'+ names.map(name => 
    '<tr><td>'+name.name +'</td><td>' + name.phone+'</td></tr>').join("")+'</table>';
console.log(tableString); 


let tableString2 = '<table class="table table-hover"><thead><tr><th scope="col">Name</th><th scope="col">Phone</th></tr></thead><tbody>'+ names.map(name => '<tr><td>'+name.name +'</td><td>' + name.phone+'</td></tr>').join("")+'</tbody></table>';
document.getElementById("names").innerHTML = tableString2;

/*e) Add a button with a click-handler and use the filter method to find only names containing the letter ‘a’. Update the table to represent the filtered data.*/







document.getElementById('changeTable').onclick = function(){
    let namesContainingA2 = names.filter( x => x.name.toLowerCase().includes('a'));
    let tableStringContainingA = '<table class="table table-hover"><thead><tr><th scope="col">Name</th><th scope="col">Phone</th></tr></thead><tbody>'+ namesContainingA2.map(name => '<tr><td>'+name.name +'</td><td>' + name.phone+'</td></tr>').join("")+'</tbody></table>';

    document.getElementById('names').innerHTML = tableStringContainingA;
    
}


    /*a) Use join to create a single string from all, with names: comma-, space. and  # - separated.*/
    var all= ["Lars", "Peter", "Jan", "Bo"];
    console.log(all.join(", #"));

/*b) Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer callback that, with reduce(..),  will return the sum (105) of all values in numbers*/
var numbers = [2, 3, 67, 33]; 
var totalAmount = numbers.reduce((total, amount) => total + amount, 0);
console.log(numbers.reduce((total, amount) => total + amount, 0));
console.log(totalAmount);

/*c)       Given this array:
var members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22}]

Create a reducer callback that, using the Array’s  reduce() method,  will return the average age of all members (25 for the provided array).*/

var members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}];



    const average = members.reduce((total, member, index, array) => {
        total += member.age;
        if(index === array.length-1){
            return total/array.length;
        }else{
            return total;
        }
    },0);

    console.log(average);

/*d)         Imagine you were to create a system that could count votes for the presidential election in USA.
Given this array of votes: */

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var votingResult = votes.reduce((acc,member)=>{
    acc[member] ? acc[member]++ : acc[member] =1;
    return acc;
},{});

console.log(votingResult);




