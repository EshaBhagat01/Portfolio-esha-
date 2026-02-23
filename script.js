// DARK MODE

document.getElementById("toggle").onclick = function(){

document.body.classList.toggle("dark");

}



// SCROLL FUNCTION

function scrollToProjects(){

document.getElementById("projects").scrollIntoView({
behavior:"smooth"
});

}