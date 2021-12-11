const objIteration = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    },
    getByPath(str) { //iteration
        let objTemp = this;
        let arr = str.split('.');
        for (let i = 0; i < arr.length; i++) {
            if (objTemp[arr[i]])
                objTemp = objTemp[arr[i]];
            else return undefined;
        }
        return objTemp;
    }
};
const objRecution = {
    person: {
        name: 'joe',
        history: {
            hometown: 'bratislava',
            bio: {
                funFact: 'I like fishing.'
            }
        }
    },
    getByPath(str, obj = this) { //recution
        const index = str.indexOf('.');
        if (index > -1) {
            if (obj[str.substring(0, index)]) {
                let objTemp = obj[str.substring(0, index)];
                // objTemp.getByPath = obj.getByPath;
                //inheritance???
                //Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);
                return objRecution.getByPath(str.substring(index + 1), objTemp);
            } else return undefined;
        } else {
            return obj[str];
        }
    }
};

function Recursion(obj) {
    this.obj = obj
}

Recursion.prototype.getByPath = function (str, obj = this) { //recution
    const index = str.indexOf('.');
    if (index > -1) {
        if (obj[str.substring(0, index)]) {
            const _obj = new Recursion(obj[str.substring(0, index)])
            // objTemp.getByPath = obj.getByPath;
            //inheritance???
            //Object.setPrototypeOf(DoggoFighter.prototype, Doggo.prototype);
            return _obj.getByPath(str.substring(index + 1), objTemp);
        } else return undefined;
    } else {
        return obj[str];
    }
}

class Example {
    constructor() {
        this.message = 'example';
    };

    show() {
        console.log(this.message);
    }
}

// class Thief = { message: "Stole it!" }

const example = new Example()
example.show()

// example.show.call(thief)

// function getByPathA(str, objTemp = this) {
//     const index = str.indexOf('.');
//     if (index > -1) {
//         if (objTemp[str.substring(0, index)]) {
//             let objA = objTemp[str.substring(0, index)];
//             objA.getByPath = getByPathA;
//             return objA.getByPath(str.substring(index + 1), objA);
//         } else return undefined;
//     } else {
//         return objTemp[str];
//     }
// }

//#region 
// gets value of `name` in value of `person` in `obj`
console.log(objIteration.getByPath('person.name')); // 'joe'

// gets value of `bio` in value of `history` in value of `person` in `obj`

console.log(objIteration.getByPath('person.history.bio')); // { funFact: 'I like fishing.' }
//  `homeStreet` doesn't exist, then return `undefined`
console.log(objIteration.getByPath('person.history.homeStreet'));
// undefined

// `animal` doesn't exist, then return `undefined`
console.log(objIteration.getByPath('person.animal.pet.needNoseAntEater'));
// undefined
//#endregion
// gets value of `name` in value of `person` in `obj`
console.log(objRecution.getByPath('person.name')); // 'joe'

// gets value of `bio` in value of `history` in value of `person` in `obj`

console.log(objRecution.getByPath('person.history.bio')); // { funFact: 'I like fishing.' }
//  `homeStreet` doesn't exist, then return `undefined`
console.log(objRecution.getByPath('person.history.homeStreet'));
// undefined

// `animal` doesn't exist, then return `undefined`
console.log(objRecution.getByPath('person.animal.pet.needNoseAntEater'));
// undefined