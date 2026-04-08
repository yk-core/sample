function $(selector) {
return new Sample(selector);
}


class Sample {
    constructor(value) {
  this.value = value;      
    }
}

Sample.fn = Sample.prototype;Sample.fn.set = function (name) {
this.value = name;
return this;   
}

Sample.fn.get = function () {
return this.value;   
}