var img = "arabianlady.jpg" // we should somehow fetch this from style.css
var page = document.querySelector(".page");

// makes the background image 'more transparent'
// based on where the mouse is pointing on the page
page.addEventListener("mousemove", function(event) {
    mouseXpercentage = Math.round(event.pageX / window.innerWidth * 100);
    mouseYpercentage = Math.round(event.pageY / window.innerHeight * 100);

    console.log ("mouseXpercentage: ", mouseXpercentage);
    console.log ("mouseYpercentage: ", mouseYpercentage);
    page.style.backgroundImage = 
        "radial-gradient(at " + mouseXpercentage + "% " +
                                mouseYpercentage + "% " +
                            ", transparent, rgb(185, 174, 164)), url(" + img + ")";
});
