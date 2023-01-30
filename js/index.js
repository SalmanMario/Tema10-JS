const products = [
    {
        id: 67,
        name: 'Firestrata',
        price: 26,
        brewery: 'Hop Hooligans',
    },
    {
        id: 212,
        name: 'Punch the Clock',
        price: 21,
        brewery: 'Bereta',
    },
    {
        id: 111,
        name: 'The Guardian',
        price: 21,
        brewery: 'Noah',
    },
    {
        id: 345,
        name: 'Pudge',
        price: 30,
        brewery: 'Hop Hooligans',
    },
];

// exercitiul 1
const theGuardian = products.find(products => products.name === "The Guardian");
console.log(theGuardian);

// exercitiul 2

const result = products.filter(n => n.brewery === "Hop Hooligans");

console.log({ result });

// exercitiul 3
const arrayFilter = products.filter(n => n.id < 111);

console.log(arrayFilter);

// exercitiul 4
let sum = products.reduce(function (previousValue, product) {
    return previousValue + product.price;
}, 0);

console.log(sum);

// exercitiul 5

const newArray = products.map(x => {
    arrayCopiat = { ...x };
    arrayCopiat.isFavorite = "false";
    return arrayCopiat;
});

console.log(newArray);
console.log(products);


// Exercitii extra 1

const input = [1, -4, 12, 0, -3, 29, -150];
const inputFilter = input.filter(function (num) {
    return num > -1;
});

console.log(inputFilter);

const reduceFilter = inputFilter.reduce(function (previousValue, number) {
    return previousValue + number;
});

console.log(reduceFilter);


// Exercitii extra 2
const students = [
    { name: 'Ionut', scores: [90, 85, 92] },
    { name: 'Gigel', scores: [75, 80, 85] },
    { name: 'Marius', scores: [90, 95, 85] },
    { name: 'David', scores: [100, 100, 100] },
];

const studentsAverage = students.map((student) => {
    let medieStudent;
    let sumaScorStudent = student.scores.reduce((sumaTotala, nrCurent) => {
        return sumaTotala + nrCurent;
    });

    console.log("Suma studentului", student.name, "este:", sumaScorStudent);
    medieStudent = sumaScorStudent / student.scores.length;
    const obiectStudent = {
        name: student.name,
        average: medieStudent
    };

    return obiectStudent;
});

const notaMareFiltru = studentsAverage.filter(function (num) {
    return num.average > 90;
});

function myFilter(array, cb) {
    const rezultatMyFilter = [];
    for (let i = 0; i < array.length; i++) {
        const elementCurent = array[i];
        if (cb(elementCurent)) {
            rezultatMyFilter.push(elementCurent);
        }
    }
    return rezultatMyFilter;
}

function myMap(array, cb) {
    return array.reduce((rezultat, elementCurent) => {
        rezultat.push(cb(elementCurent));
        return rezultat;
    }, []);
}

function testareArray(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }

        return true;
    }
}

const elemente = [1, 2, 3, 4];
function numberToString(n) {
    return n.toString();
}

console.log("Aici avem rezultatul mediilor adunate si impartite", studentsAverage);
console.log("Aici avem rezultatul dupa filtrare:", notaMareFiltru);
console.log("Aici avem rezultat folosind Filter", myFilter(studentsAverage, n => n.average > 90));
console.log("Aici avem rezultat folosind Map", myMap(studentsAverage, n => n.average > 90));


