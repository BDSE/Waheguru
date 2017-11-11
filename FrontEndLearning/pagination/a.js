(function () {
    var data = [];
    for (var i = 1; i <= 58; i++) {

        data.push({
            item: "item" + i
        });

    }
    window.data = data;
    sliceData(1);


})();

function sliceData(index, size) {

    var size = size || 10;
    var start = (index - 1) * size;
    var end = start + size;
    var slicedData = data.slice(start, end);

    generateLinks(size);

    renderHTML(slicedData);

}


function generateLinks(size) {

    var NumOfLinks = Math.ceil(data.length / size);
    var html = "";
    var a = "<a href='javascript:sliceData({{number}})'>{{number}}</a>";
    for (var i = 1; i <= NumOfLinks; i++) {

        html += a.replace(/{{number}}/g, i);

    }

    document.getElementById("links").innerHTML = html;
}

function renderHTML(data) {
    console.log(data);
    var ele = document.getElementById("amar");
    var html = "";
    for (var x in data) {

        html += "<li>" + data[x].item + "</li>"

    }

    ele.innerHTML = html;


}
