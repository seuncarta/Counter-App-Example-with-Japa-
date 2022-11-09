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
    let countStr = `${count.innerText} - `
    save.innerHTML += countStr

    count.innerText = 0;
    integer = 0;
}) 


