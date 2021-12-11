// class Vector {
//     constructor(x, y, z) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }
//     //arg => vector
//     plus(arg) {
//         // vector1 (x1,y1,z1) + vector2 (x2,y2,z2) = vector3 (x1+x2,y1+y2,z1+z2)
//         const resultVector = new Vector(this.x + arg.x, this.y + arg.y, this.z + arg.z);
//         // return a new vector
//         return resultVector;
//     }
//     minus(arg) {
//         // return a new vector
//         // vector1 (x1,y1,z1) - argVector (x2,y2,z2) = resultVector (x1-x2,y1-y2,z1-z2)
//         const resultVector = new Vector(this.x - arg.x, this.y - arg.y, this.z - arg.z);
//         return resultVector;
//     }

//     magnitude() {
//         // Math
//         return Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)));
//     }
// }




function Vector(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
}

Vector.prototype.plus = function (vec) {
    const resultVector = new Vector(this.x + vec.x, this.y + vec.y, this.z + vec.z);
    return resultVector;
}

Vector.prototype.minus = function (vec) {
    const resultVector = new Vector(this.x - vec.x, this.y - vec.y, this.z - vec.z);
    return resultVector;
}

Vector.prototype.magnitude = function () {
    const result = Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2)));
    return result;
}