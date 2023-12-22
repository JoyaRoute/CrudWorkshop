// console.log(5+3)
// console.log(2+2);

// function => reuse
        //  hambozo(5 , 3)

//  declaration function 
// function sum(x , y){
//     // x = 5 
//     // y =8
//     var result = x+y
//     // console.log(result)
//     return result
//     // console.log("hello");
// }
// var sumResult = sum(2 , 3)
// console.log(sumResult);
// function avg(result){
//     console.log(result/2);
// }
// avg(sumResult)
// hambozo(2 )


//  call
// hambozo(5 )

// hoisting
// hambozo()
// var hambozo = function(){
//     console.log("hello")
// }


// (function(){
//     console.log("hello")
//     var x = 5
// })()

// console.log("Hello");


// scope => Global , local
// var x = 10


// function print(){
//     var y = 5
//     console.log(y);
//     console.log(x);
// }

// print()


// if(true){
//     var z = 5
// }
// console.log(z);


// function sum(x , y){

//     var result = x+ y
//     // console.log(result);
//     // return result
//     console.log(result)
// }
// var sumResult = sum(5 , 2)
// // console.log(sumResult);

// function avg(num){
//     console.log(num/2);
// }
// avg(sumResult)




// *------------------------------------------------
// function sum(){
//     console.log(5+2);
// }
// var x
// console.log(x);
// x = 10

// var x = 10
// x = 10


// var sum 
// // sum()
// sum()
// sum = function(){
//     console.log(5+2);
// }


// var x ;
// x =  10;



// var userName = "ahmed"
// var userAge = 25
// var userGender = "Male"

// console.log(userName);

// var user = {
//     name : "ahmed",
//     age : 25,
//     gender : "Male",
//     wife : {
//         name : "heba",
//         age : 23
//     },
//     sum : function(){
//         console.log(2 +3 );
//     } //method
// }
// user.sum()


// var friend = "ahmed";
// var friend = "mohamed";
// console.log(friend);
                // 0         1          2  3     4 
// var friends =["ahmed", "mohamed" , "amr", "aya" , "omar"]  // length => 5
// for(var i=0 ; i<friends.length ; i++){
//     // 0 1 2
//     console.log(friends[i])
// }

// Cruds

// create retreive delete update search

//  add 





    var websiteNameInput = document.getElementById('websiteNameInput')
var websiteUrlInput = document.getElementById('websiteUrlInput')
var tbody = document.getElementById('tbody')
var btnSubmit = document.getElementById('btnSubmit')
var btnUpdate = document.getElementById('btnUpdate')
var updatedIndex
var searchInput= document.getElementById('searchInput')
var websitesContainer = []
// console.log(websiteNameInput);
// console.log(websiteUrlInput);
if(localStorage.getItem("websites") != null){
    websitesContainer = JSON.parse(localStorage.getItem("websites"))
    display()
}

function addWebsite(){

    var website = {
        name: websiteNameInput.value,  //test
        url :  websiteUrlInput.value   //test
    }
    websitesContainer.push(website)
    // [{website}, {website2}]
    localStorage.setItem("websites", JSON.stringify(websitesContainer))
    display()
    clearForm()
    // website3
    // [{website1}, {website2},......]

    // var websiteName = websiteNameInput.value ;
    // var websiteUrl = websiteUrlInput.value;
    // console.log(websiteName);
    // console.log(websiteUrl);
    
    console.log(websitesContainer);
}

// [{website1} , {website2}]
function display(){
    var cartona = ""
    for(var i=0 ; i< websitesContainer.length ; i++){
          cartona+= `<tr>
        <td>${websitesContainer[i].name}</td>
        <td>${websitesContainer[i].url}</td>
        <td>
            <button class="btn btn-warning" onclick="setFormtoUpdate(${i})">
                <i class="fa-solid fa-pen"></i>
                Update
            </button>
        </td>
        <td>

            <button class="btn btn-danger" onclick="DeletWebsite(${i})">
                <i class="fa-solid fa-trash"></i>
                Delete
            </button>
        </td>

        <td>   
            <button class="btn btn-primary" onclick="Visit(${i})">
            <i class="fa-solid fa-eye"></i>
            Visit
        </button></td>
    </tr>`

    //  0 
    }
    tbody.innerHTML =cartona
}
// [{website1} , {website2}]
function setFormtoUpdate(index){
    updatedIndex = index   //0
    // console.log(websitesContainer[index].name)
    websiteNameInput.value = websitesContainer[index].name
    websiteUrlInput.value = websitesContainer[index].url

    btnSubmit.classList.add('d-none')
    btnUpdate.classList.remove('d-none')
    console.log(updatedIndex);

}
function update(){

    var website = {
        name: websiteNameInput.value,  //test
        url :  websiteUrlInput.value   //test
    }
    websitesContainer.splice(updatedIndex , 1 , website)
    localStorage.setItem("websites", JSON.stringify(websitesContainer))
    display()
    btnSubmit.classList.remove('d-none')
    btnUpdate.classList.add('d-none')
    clearForm()
    
    console.log(websitesContainer);
}
function Visit(index){
    // alert(index)
    // console.log(websitesContainer[index].url);
    window.open(websitesContainer[index].url)
}

function deleteall(){
    var len = websitesContainer.length 
    websitesContainer = []
}

function DeletWebsite(index){
    // alert(index)
    websitesContainer.splice(index, 1)
    localStorage.setItem("websites", JSON.stringify(websitesContainer))
    display()
    // console.log(websitesContainer);
}

function clearForm(){
    websiteNameInput.value =""
    websiteUrlInput.value = ""
}
// [{website1}, {website2}]
function search(){

    var term = searchInput.value
    var cartona = ""
    for(var i=0 ; i< websitesContainer.length ; i++){
        if(websitesContainer[i].name.toLocaleLowerCase().includes(term.toLocaleLowerCase())){
            cartona+= `<tr>
            <td>${websitesContainer[i].name}</td>
            <td>${websitesContainer[i].url}</td>
            <td>
                <button class="btn btn-warning" onclick="setFormtoUpdate(${i})">
                    <i class="fa-solid fa-pen"></i>
                    Update
                </button>
            </td>
            <td>
    
                <button class="btn btn-danger" onclick="DeletWebsite(${i})">
                    <i class="fa-solid fa-trash"></i>
                    Delete
                </button>
            </td>
    
            <td>   
                <button class="btn btn-primary" onclick="Visit(${i})">
                <i class="fa-solid fa-eye"></i>
                Visit
            </button></td>
        </tr>`
        }
      

    //  0 
    }
    tbody.innerHTML =cartona
}
            // websitesContainer[i].name      term
// console.log("facebook".toLocaleLowerCase().includes('FaCe'.toLocaleLowerCase()));
            // facebook                           face





//  localStorage
                        // key           value
// localStorage.setItem("userName" , "Joya")
// localStorage.setItem("userName" , "Rehab")
// console.log(localStorage.getItem("userName"));
// localStorage.removeItem("userName")
// localStorage.clear("")
// sessionStorage.setItem("userName", "joya")


// var friends = ["amr" , "ahmed", "mohamed"]
// // friends.splice(1 , 1)  => remove
// friends.splice(1, 1, "mohamed")
// console.log(friends);



// // Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.
// //  Otherwise, return "there is no 7 in the array".

// // Examples
// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));; //➞ "Boom!"
// // 7 contains the number seven.

// console.log(sevenBoom([8, 6, 33, 100])); //➞ "there is no 7 in the array"
// //None of the items contain 7 within them.

// console.log(sevenBoom([2, 55, 60, 97, 86])); //➞ "Boom!"
// //97 contains the number seven.

// // function sevenBoom(numArr){
// //     for( var i=0 ; i < numArr.length ; i++){
// //     //  console.log(numArr[i].toString().includes('7'));
// //     if(numArr[i].toString().includes('7')){
// //         return "boom"
// //     }
      
// //     }
// //     return  "there is no 7 in the array"
// // }
// function sevenBoom(numArr){
//     // console.log(numArr.toString().includes("7"));
//     // if(numArr.toString().includes("7")){
//     //     return true
//     // }
//     // return false


//     // condition ? true : false
//     // return numArr.toString().includes("7")
    
// }


// Create a function that takes an array of strings and returns an array with only the strings
// that have numbers in them. If there are no strings containing numbers, return an empty array.

// Examples
// console.log(numInStr(["1a", "a", "2b", "b"]) ) //➞ ["1a", "2b"];

// console.log(numInStr(["abc", "abc10"]));// ➞ ["abc10"]

// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));// ➞ ["ab10c", "a10bc"]

// console.log(numInStr(["this is a test", "test"])); //➞ ["test1"]


// function numInStr(stringArr){
//     var result = []
//     for(var i=0 ; i< stringArr.length ; i++){
//         // console.log(stringArr[i]);
//         // console.log(/\d/.test(stringArr[i]));
//         if(/\d/.test(stringArr[i])){
//             result.push(stringArr[i])
//         }   
//     }
//     return result;
// }



// Write a sum method which will work properly when invoked using either syntax below.

// console.log(sum(2,3 ,));   // Outputs 5
// console.log(sum(2)(3)(10));  // Outputs 5

// function sum(x, y){
//     // return x+y;
//     if(arguments.length == 2){
//         return x+y;
//     }
//     else {

//         return function(y)
//         {
//             return x+y
//         }


//     }
//     // console.log(arguments.length);
// }

