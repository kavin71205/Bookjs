var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")
var cancelpopup=document.getElementById("Cancel-popup")

addpopupbutton.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

cancelpopup.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"   
})

//container,add-book,Book-Title-input,Book-Author-input,Book-description-input

var newcontainer=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("Book-Title-input")
var bookAuthorinput=document.getElementById("Book-Author-input")
var bookdescriptioninput = document.getElementById("Book-description-input")

addbook.addEventListener("click", function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h4>${bookAuthorinput.value}</h4>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    newcontainer.append(div)

    popupoverlay.style.display="none"
    popupbox.style.display="none"

    })
    function deletebook(event){
        event.target.parentElement.remove()
    }

