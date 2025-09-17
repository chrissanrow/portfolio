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
    const overlay = document.getElementById("overlay-" + id);
    overlay.style.height = "0%";
    const iframe = overlay.querySelector('iframe');
    if (iframe) {
        iframe.src = iframe.src;
    }
}