function $(selector) {
return new Sample(selector);
}


class Sample {
    constructor(value) {
  this.value = value;      
    }
}

Sample.fn = Sample.prototype;