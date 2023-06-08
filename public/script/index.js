
//Slide show Start-----------
var allslides=document.querySelectorAll(".slide-show-img");

var lastslide=0;
var currentslide=1;

for(var i=1;i<allslides.length;i++){
   allslides[i].classList.add("displaynone");

}

setInterval(function(){

    allslides[lastslide].classList.add("displaynone");
    allslides[currentslide].classList.remove("displaynone");

    lastslide=currentslide;
    currentslide++;

    if(currentslide>2){
        currentslide-=3;
    }
},2000);

//Slide Show End------------



//Category Set Start------------

function setCategory(category){
   localStorage.category=category;
}

//Category Set End------------
