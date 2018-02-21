class Sorter {
  constructor(array = []) {
    this.array = array;

    this.countElements = 0;

    this.compareFunction = function compareNumbers(a, b) {
      return a - b;
    };

  }

  add(element) {
    this.array.push(element);
    this.countElements++;
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.countElements;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    indices = indices.sort();
    let startSlice = indices[0];
    let endSlice = indices[indices.length-1] + 1;
    let tmp = this.array.slice(startSlice, endSlice);

    tmp = tmp.sort( this.compareFunction );

    for (let index = 0; index < tmp.length; index++) {
      this.array[startSlice] = tmp[index];
      startSlice++;
    }
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;