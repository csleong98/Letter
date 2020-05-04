var modal = document.getElementById("illustration-modal");

var changeIllustration = document.getElementById("change-illustration");

var close = document.getElementsByClassName("close")[0];

var defaultIllustration = document.getElementById("postcard-image").src;

var selectedIllustration = document.getElementsByClassName("illustration-image")[0].src;

var confirmButton = document.getElementById("confirm-illustration")

changeIllustration.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

// problem here, targetting is wrong
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function getImageSource(src) {
    selectedIllustration = src;
    
    if (defaultIllustration !== selectedIllustration) {
        confirmButton.disabled = false;
    } else {
        confirmButton.disabled = true;
    }

}

function changeImage() {
    // update defaultIllustration src to selectedIllustration src
    defaultIllustration = selectedIllustration;

    // get original image element
    var originalIllustration = document.getElementById("postcard-image");
    originalIllustration.src = document.getElementById("postcard-image").src;

    // create a new img element
    var img = document.createElement("img");

    // set the created img element with attributes
    img.setAttribute("id", "postcard-image");

    // set the created img element with new src
    img.src = defaultIllustration;

    //replace original img element with new img element
    document.getElementById("postcard-image-area").replaceChild(img, originalIllustration);
    
}
