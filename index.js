class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let sum = 0
    this.items.forEach((eachElement)=>{
      sum += eachElement
    })
    return sum
  }

  avg() {
    let sum = 0
    if (this.items.length===0){
      throw new Error("EmptySortedList")
    }
      this.items.forEach((eachElement)=>{
        sum += eachElement
      })
      return sum / this.items.length
    
    


  }
}

module.exports = SortedList;
