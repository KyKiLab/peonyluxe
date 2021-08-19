document.getElementById("read_more-step").addEventListener( 'click' , changeClass);

function changeClass() {
    var content = document.getElementById("extra_content-step");
    var btn = document.getElementById("read_more-step");
    content.classList.toggle('show-step');
    
    if (content.classList.contains("show-step")) {
            btn.innerHTML = "Read Less";
        } else {
            btn.innerHTML = "Read More";
        }
}