document.getElementById("read_more").addEventListener( 'click' , changeClass);

function changeClass() {
    var content = document.getElementById("extra_content");
    var btn = document.getElementById("read_more");
    content.classList.toggle('show');
    
    if (content.classList.contains("show")) {
            btn.innerHTML = "Read Less";
        } else {
            btn.innerHTML = "Read More";
        }
}