
var context = require.context('./test', true, /-test\.js$/);
context.keys().forEach(context);

//or this way:-
// import './test/modules/adder-test';
// import './test/modules/counter-test';