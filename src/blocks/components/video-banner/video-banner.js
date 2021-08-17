document.getElementById("read_more-video").addEventListener( 'click' , changeClass);

function changeClass() {
    var content = document.getElementById("extra_content-video");
    var btn = document.getElementById("read_more-video");
    content.classList.toggle('show-video');
    
    if (content.classList.contains("show-video")) {
            btn.innerHTML = "Read Less";
        } else {
            btn.innerHTML = "Read More";
        }
}