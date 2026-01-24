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

    // Stop any playing videos
    const videos = overlay.getElementsByTagName('video');
    for (let i = 0; i < videos.length; i++) {
        videos[i].pause();
        videos[i].currentTime = 0;
    }
}

// User input listener

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const overlays = document.getElementsByClassName("overlay");
        for (let i = 0; i < overlays.length; i++) {
            if (overlays[i].style.height === "100%") {
                closePopup({id: "btn-" + overlays[i].id.substring(8)});
            }
        }
    }
});