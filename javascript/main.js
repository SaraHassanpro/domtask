//  write text from input section  
document.querySelector(".mouse").addEventListener("change",getData)
function getData(event){
    document.querySelector("#deme").innerHTML=event.target.value;
}



// 3 button -3 colors 

// document.querySelector("#red").onclick=function (){
//     document.querySelector("#demo").style.color="red";
// }

// document.querySelector("#blue").onclick=function (){
//     document.querySelector("#demo").style.color="blue";
// }
// document.querySelector("#green").onclick=function (){
//     document.querySelector("#demo").style.color="green";
// }


// method-2 

document.querySelectorAll(".hello").forEach(function (item) {
    item.onclick = function (event) {
        document.querySelector("#demo").style.color = event.target.id;
    };
});

// method 3

document.querySelectorAll(".hello2").forEach(function (item) {
    item.onclick = function () {

        document.querySelector("#demo2").style.color = item.dataset.color;
    };
});





// To do list section 
document.querySelector("form").onsubmit = function () {
    var newElement = document.querySelector("#newTask").value;
    if (newElement == "") {
        return false;
    }
    else {
        var newList = document.querySelector("#result");
        var newLi = document.createElement("li");
        newLi.innerHTML = newElement;
        newList.append(newLi);
        document.querySelector("#newTask").value = "";
        return false;
    }
}