class Shape{
    constructor(length, width){
        this.length = length;
        this.width = width;
    }
}

class Square extends Shape{

    area(){
        return this.length*this.width
    }
}

let s = new Square(10, 20)

let a = s.area()
console.log(a)