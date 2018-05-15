function Popup(text, upTime, downTime, waitTime) {
    let div = document.createElement("div");
    div.className = "popup";
    this.show = function () {
        document.body.appendChild(div);
        setTimeout(function() {
            div.style.animationPlayState = "paused";
            setTimeout(function() {
                div.style.animationDirection = "reverse";
                div.style.animationPlayState = "running";
                
            }, 500);
        }, 500);

    }

    this.removeAfterTime = function(time) {
        setTimeout(function() {
            document.body.removeChild(div);
        }, time);
    }
}

function pop() {
    var popup = new Popup();
    popup.show();
    //popup.removeAfterTime(2500);
}