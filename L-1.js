var a;
undefined
ty
VM66:1 Uncaught ReferenceError: ty is not defined
    at <anonymous>:1:1
(anonymous) @ VM66:1
typeof a;
'undefined'
a=10;
10
typeof a;
'number'
a="baby";
'baby'
typeof a;
'string'
a=10.1;
10.1
typeof a;
'number'
a="b";
'b'
typeof a;
'string'
a=true
true
typeof a;
'boolean'
var q=900998830389303838n;
undefined
typeof q;
'bigint'
a+10;
11
true+true
2
true-true
0
var arr=[10,20,30,40,50];
undefined
typeof arr;
'object'
arr
(5) [10, 20, 30, 40, 50]0: 101: 202: 303: 404: 50length: 5[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
arr[0]=50;
50
arr
(5) [50, 20, 30, 40, 50]
g==arr;
var g=[]
undefined
g==arr;
false
g=[...arr];
(5) [50, 20, 30, 40, 50]
g==arr;
false
a=[10,"nunu",[39,90,0],77n];

(4) [10, 'nunu', Array(3), 77n]0: 101: "nunu"2: Array(3)0: 391: 902: 0length: 3[[Prototype]]: Array(0)3: 77nlength: 4[[Prototype]]: Array(0)
var f=10;
undefined
typeof f
'number'
f=null
null
typeof f
'object'
f=0;
0
typeof f
'number'
undefined==null
true
undefined+60
NaN
"10"
'10'
10
10
10=="10"
true
10==="10"
false
var emp={id:1001,name:"Ram",salary:420};
undefined
emp.id;
1001
emp['id'];
1001
console.lo
undefined
console.log("I love you");
VM1154:1 I love you
undefined
al
alert("I love u");
undefined
alert("I love u");
undefined
function show() {
    console.lo
}
undefined
function show() {
    console.log("Show me");
}
undefined
sh
VM1396:1 Uncaught ReferenceError: sh is not defined
    at <anonymous>:1:1
(anonymous) @ VM1396:1
show();
VM1388:2 Show me
undefined
function add(a,b) {
    retun a+b;
}
VM1494:2 Uncaught SyntaxError: Unexpected identifier 'a'
add(12,55);
VM1537:1 Uncaught ReferenceError: add is not defined
    at <anonymous>:1:1
(anonymous) @ VM1537:1
function add(p,b) {
    retun p+b;
}
VM1563:2 Uncaught SyntaxError: Unexpected identifier 'p'
function add(var p,var b) {
    retun p+b;
}
VM1628:1 Uncaught SyntaxError: Unexpected token 'var'
function square(number) {
  return number * number;
}

undefined
sq

square(3)
9
function addnum(o,l){
    return a+b;}
undefined
function addnum(o,l){
    return o+l;}
undefined
addnum(50,4)
54
