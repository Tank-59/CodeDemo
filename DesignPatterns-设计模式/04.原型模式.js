// 原型模式是 JavaScript 这门语言面向对象系统的根本
// ES6中引入的 JavaScript 类实质上是 JavaScript 现有的基于原型的继承的语法糖。类语法不会为 JavaScript 引入新的面向对象的继承模型

class Dog {
    constructor(name ,age) {
     this.name = name
     this.age = age
    }
    
    say() {
      console.log('wang')
    }
  }


  function Dog(name, age) {
    this.name = name
    this.age = age
  }
  
  Dog.prototype.say = function() {
    console.log('wang')
  }
