document.addEventListener("DOMContentLoaded", function() {
    let text = "Mithun Ravi";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);
        }
    }
    typeEffect();
});