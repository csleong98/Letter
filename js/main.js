// Illustration changing function <start>

var modal = document.getElementById("illustration-modal");
var changeIllustration = document.getElementById("change-illustration");
var close = document.getElementsByClassName("back")[0];
var close1 = document.getElementsByClassName("back")[1];
var defaultIllustration = document.getElementById("postcard-image").src;
var selectedIllustration = document.getElementsByClassName("illustration-image")[0].src;
var confirmButton = document.getElementById("confirm-illustration");

changeIllustration.onclick = function() {
    modal.classList.toggle("is-active");
    confirmButton.disabled = true;
}

close.onclick = function() {
    modal.classList.toggle("is-active");
}

close1.onclick = function() {
    modal.classList.toggle("is-active");
}


function getImageSource(src) {
    selectedIllustration = src;

    if (defaultIllustration !== selectedIllustration) {
        confirmButton.classList.add("is-primary");
        confirmButton.disabled = false;
    } else {
        confirmButton.classList.remove("is-primary");
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
    document.getElementById("img-figure").replaceChild(img, originalIllustration);
    modal.classList.toggle("is-active");
}

// Illustration changing function <end>

// Postcard Download function <start>

var download = document.querySelector("#download");
var imgConverted = document.getElementById("imgConverted");

download.addEventListener("click", function () {
    html2canvas(document.getElementById("postcard")).then(canvas => {
        const a = document.createElement('a');

        document.body.appendChild(a);
        a.href = canvas.toDataURL("image/png");
        a.download = "postcard";
        a.click();
        document.body.removeChild(a);

        // const img = document.createElement('img');
        // document.body.appendChild(img);
        // img.src = canvas.toDataURL("image/png");
        // img.setAttribute('method', 'post')
        // img.setAttribute('name', 'image');
        // img.setAttribute('style', 'display: block');
    });
})

// Postcard Download function <end>