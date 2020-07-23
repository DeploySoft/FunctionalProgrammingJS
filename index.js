/**
 * Programacion declarativa (Programacion logica , Programacion funcional)
 * Programacion imperativa (Programacion estructurada, Programacion Procedimental, Programacion Modular)
 *
 * Codigo mas formal
 * Mantenibilidad
 * Escalibildad
 * Aprender nuevas maneras para solucionar errores
 *
 *
 * Diseño orientado a objetos en una construccion funcional.
 *
 * <b> Functional Programming <b>
 * * FirstClass functions --> use the functions like a variable
 * * Pure functions
 * * Recursive functions --> use resources from somewhere
 * * Anonymous functions --> Just for a scope and normally is created as lambda
 * * Higher-order functions --> this to receive a function and it will return other function
 * * * Immutable variable
 * * * NonStrict evaluation -  Lazy Evaluations
 * * * Strict evaluations
 * * * Statements
 * * * Patter matching (Secuencias - Estructuras de arbol)
 * * * * Composicion matematica
 *          f(x) g(x)
 *          (g°f)(x)
 *           g[f(x)]
 *
 *
 */
const FunctionalProgramming = {
    FistClassFunction: () => {
        return `This is a FistClassFunction`;
    },
    PureFunction: (name) => {
        return `Hello ${name}`
    },
    RecursiveFunction: () => {
        return FunctionalProgramming.FistClassFunction() + " from RecursiveFunction";
    },
    AnonymousFunction: (array) => {
        //car => car.startsWith('F') this is the anonymous function, nonstrict evaluation
        if (cars.length === 3) {
            console.warn('this is a non-strict evaluation');
        }
        let filter = array.filter(car => car.startsWith('F'));
        console.log(array);
        return filter;
    },
    HigherOrderFunctions: (functionVar) => functionVar(['Ferrari', "Ford", "Chevrolet"])
};

let fistClassFunction = FunctionalProgramming.FistClassFunction;
console.log(fistClassFunction());

//Here the purefunction could be a fistclass function
let pureFunction = FunctionalProgramming.PureFunction;
console.log(pureFunction(`Andres`));

let recursiveFunction = FunctionalProgramming.RecursiveFunction;
console.log(recursiveFunction())

const cars = ['Ferrari', "Ford", "Chevrolet"];
let anonymousFunction = FunctionalProgramming.AnonymousFunction;
console.log(anonymousFunction(cars));


let higherOrderFunctions = FunctionalProgramming.HigherOrderFunctions;
console.log(higherOrderFunctions(anonymousFunction))










