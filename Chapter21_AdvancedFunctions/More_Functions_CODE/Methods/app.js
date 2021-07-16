const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}


const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}


const meow2 = cat.meow;




const mathPractice = {
    add : function(x, y) {
        return x + y;
    },
    substract : function(x,y) {
        return x - y;
    },
    multiply: function(x, y) {
        return  x * y;
    },
    divide: function (x,y) {
        return x / y;
    },
    square: function(x) {
        return x * x;
    }
};