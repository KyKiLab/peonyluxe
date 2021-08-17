document.getElementById("read_more-about").addEventListener( 'click' , changeClass);

function changeClass() {
    var content = document.getElementById("extra_content-about");
    var btn = document.getElementById("read_more-about");
    content.classList.toggle('show-about');
    
    if (content.classList.contains("show-about")) {
            btn.innerHTML = "Read Less";
        } else {
            btn.innerHTML = "Read More";
        }
}