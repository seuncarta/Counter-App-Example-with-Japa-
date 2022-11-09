
var count = document.getElementById("count-el")
var save = document.getElementById("entry-el")
var totalNumberOfPeople = document.getElementById("total-el")
var integer = 0;

var increase = document.getElementById("increment-btn")
increase.addEventListener("click", function () {
    integer++
    count.innerText = integer;
})

var decrease = document.getElementById("decrement-btn")
decrease.addEventListener("click", function(){
    if (integer>0) {
        integer--
        count.innerText = integer;
    }
})

var saveButton = document.getElementById("save-btn")
// saveButton.addEventListener("click", function(){
//     totalNumberOfPeople.innerHTML = `Total number of people inside the subway: ${count.innerText}` 
// }) 


saveButton.addEventListener("click", function(){
    // console.log(count.innerHTML);
    // console.log(Number(save.innerHTML));
    // console.log((save.innerHTML/1)+(count.innerHTML/1))

    var numberOfPeople = Number(count.innerHTML)
    var allPeople = Number(save.innerHTML);
    if (numberOfPeople > 0){

        document.getElementById("entry-el").innerHTML = allPeople += numberOfPeople

        count.innerText = 0;
        integer = 0;

    }
}) 


