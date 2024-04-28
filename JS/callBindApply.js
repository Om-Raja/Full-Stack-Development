// call apply bind
var obj = {
    name: "Om",
    crn: 2215197
}
function abcd(p, q, r) {
    console.log(this, p, q, r);
}

abcd.call(obj, 1, 2, 3);
abcd.apply(obj,[1,2,3]);
var save = abcd.bind(obj, 1,2,3);
save();