'use strict';
// es6
class Set {
  constructor(){
    this.elements = [];
  };

  add(element) {
    if (this.elements.indexOf(element) === -1) {
        this.elements.push(element);
    }
  };

  remove(element){

  };

  isEmpty() {
    return this.elements.length > 0 ? false : true;
  };

  size(){
    return this.elements.length;
  };

  contains(element) {

  };

  intersect(s) {
    var resultSet = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        if (s.contains(this.elements[i])) {
            resultSet.add(this.elements[i]);
        }
    }
    return resultSet;
  };

  difference(s) {
    var resultSet = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        if (!s.contains(this.elements[i])) {
            resultSet.add(this.elements[i]);
        }
    }
    return resultSet;
  };

  clone() {
    var s = new Set();
    for (var i = 0; i < this.elements.length; i++) {
        s.add(this.elements[i]);
    }
    return s;
  };

}

module.exports = Set;
