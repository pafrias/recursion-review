// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var results = [];
  let docBod = document.body;
  
  var digIntoNodes = function(element) {
    var classes = Array.from(element.classList);
    if (classes.includes(className)) {
      results.push(element);
    }
    var children = Array.from(element.children);
    if (children) {
      (children).map((child) => digIntoNodes(child));
    }
  };
  digIntoNodes(docBod);
  return results;
};

/*
var getElementsByClassName = (className) => {
  var result = [];
  if (this.document.body) {
    var element = this.document.body;
    element.getElementsByClassName(className);
  } else if ((this.classList).includes(className)) {
    result.push(this);
  }
  //if to check for childnodes
  return result;
}
  
  */