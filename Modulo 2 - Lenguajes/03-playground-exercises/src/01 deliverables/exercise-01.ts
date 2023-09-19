console.log("************** DELIVERABLE 01 *********************");

const names: Array<string> = ["Ana", "Paco", "Manuel"];

// Head: Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
const head = <T>([first]: T[]) => first;
console.log("Head: "head(names));

// Tail: Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
const tail = <T>([, ...items]: T[]) => items;
console.log("Tail: ", tail(names));

// Init: Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
const init = <T>(items: T[]) => items.slice(0, -1);
console.log("Init: ", init(names));

// Last: Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = <T>(items: T[]) => items.splice(-1);
console.log("Last: ", last(names));