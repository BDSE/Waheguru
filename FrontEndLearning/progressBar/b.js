function progressBar(time, interval) {

    var mainWidth = 100,
        widthOffSet = 0,
        width = 0;

    interval = (interval < 5 || interval > time) ? 20 : interval;
    time = (time < interval) ? interval + 1000 : time;
    widthOffSet = mainWidth / (time / interval);

    var id = setInterval(function () {

        width += widthOffSet;

        console.log(width);
        
        if (width > mainWidth) {
            clearInterval(id);
            fillBar(100);
        } else {
            fillBar(width);
        }


    }, interval);


}

function fillBar(width) {

    document.getElementById("fillBar").style.width = width + "%";

}
