document.getElementById("read_more-info").addEventListener( 'click' , changeClass);

function changeClass() {
    var content = document.getElementById("extra_content-info");
    var btn = document.getElementById("read_more-info");
    content.classList.toggle('show-info');
    
    if (content.classList.contains("show-info")) {
            btn.innerHTML = "Read Less";
        } else {
            btn.innerHTML = "Read More";
        }
}