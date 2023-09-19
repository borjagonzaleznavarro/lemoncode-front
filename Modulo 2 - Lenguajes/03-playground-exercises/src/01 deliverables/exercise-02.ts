console.log("************** DELIVERABLE 02 *********************");

const names2: Array<string> = ["Ana", "Paco", "Manuel"];
const names3: Array<string> = ["Guille", "María", "Carmen"];
const names4: Array<string> = ["Fernando", "Juan", "Pepe"];

// Concat: Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = <T, H>(a: T[], b: H[]) => [...a, ...b];
console.log("Concat: ", concat(names2, names3));

// Opcional: Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
const concatMulti = (...args: any[][]) => args.reduce(concat);
console.log("ConcatMulti: ", concatMulti(names2, names3, names4));