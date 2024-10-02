/* Open when someone clicks on the span element */
function openPopup(elem) {
    let id = elem.id;
    console.log(id);
    document.getElementById("overlay-" + id).style.height = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closePopup(elem) {
    let id = elem.id;
    id = id.substring(4);
    console.log("overlay-" + id);
    document.getElementById("overlay-" + id).style.height = "0%";
}