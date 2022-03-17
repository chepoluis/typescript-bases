(() => {
    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Hola ${ name }`;
    const saveTheWorld = () => 'El mundo esta salvado! :)';

    // let myFunction: Function;
    // let myFunction: () => number; // Funcion que regresa un numero
    // let myFunction: (y: number, z: number) => number; // Funcion que regresa un numero con dos parametros
    // let myFunction: (a: string) => string; // Funcion que regresa un string, que recibe un argumento
    let myFunction: () => string; // Regresa un string sin argumento

    //* myFunction = 10;
    //* console.log(myFunction);
    
    // myFunction = addNumbers;
    // console.log(myFunction(1, 3));

    // myFunction = greet;
    // console.log(myFunction('Luis'));

})();