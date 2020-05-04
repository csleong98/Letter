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
    });
})