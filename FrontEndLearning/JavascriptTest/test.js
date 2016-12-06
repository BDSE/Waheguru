//document.getElementById('testDiv').addEventListener('click', function () {
//	console.log('test div clicked');
//});
//console.log(testDiv);

var a = "Amar";

function b() {
	console.log("hello" + a);

	return function c() {
		console.log("local function c");
	}
}

var d = b();

var obj = {

	a: "fateh",
	b: 20,
	c: function () {
		console.log("inside object obj")
	}

};