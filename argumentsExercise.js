function sum(...arr) {
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    result += arr[i];
  }
  return result;
}

Function.prototype.myBind = function(context, ...bindArgs) {
  that = this;
  return function(...callArgs) {
    that.apply(context, bindArgs.concat(callArgs));
  };
};

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// 
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
// 
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");

function curriedSum(numArgs) {
  let numbers = [];
  const _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach(function(el) {
          sum += el;
      });
      numbers = [];
      return sum;
    } 
    return _curriedSum;
  };
  return _curriedSum;
}


Function.prototype.curry = function(numArgs) {
  let args = [];
  const curriedFunc = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      const result = this.apply(this, args);
      args = [];
      return result;
    } 
    return curriedFunc;
  };
  return curriedFunc;
};




