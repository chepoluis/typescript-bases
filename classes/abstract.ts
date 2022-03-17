(() => {

    abstract class Mutante { // Las clases abstractas no sirven para crear objetos
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        public salvarMundo(): string {
            return 'Mundo a salvo!'
        }
    }
    class Villian extends Mutante {
        public conquistarMundo(): string {
            return 'Mundo conquistado';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    /**
     * Tambien se pueden utilizar las classes abstractas para
     * tipar los metodos y onbligarlos que solo resivan parametros que extiendan
     * de la clase abstracta en este caso mutante
     */
    const printName = ( character: Mutante ) => {
        console.log( character.name );
    }

    printName( wolverine );
})();