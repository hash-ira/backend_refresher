// types of exports

// multiple exports
const sq = (x) => {
    return x * x;
}

function sub(a, b) {
    return a - b;
}

module.exports = { sq, sub };
// this can be useed only once in a particular file as it overrides
// the previous module.exports

// --------------------------------------------

// singular exports
// exports.add = (a, b) => a + b;
// here the function is anonymous