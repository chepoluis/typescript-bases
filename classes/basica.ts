(() => {

    // class Avenger {

    //     private name: string = '';
    //     public team: string = '';
    //     public realName?: string = '';
    //     static avgAge: number = 35;

    //     constructor( name: string, team: string, realName?: string) {
    //         this.name = name;
    //         this.team = team;
    //         this.realName = realName;
    //     }

    // }

    // const antman: Avenger = new Avenger('Antman', 'Capitan');
    // console.log(antman.team)
    // console.log( Avenger.avgAge ); // Se accede a la propiedad estatica avgAge, sin inicializar un objeto de la clase

    // Forma corta de decalrar propiedades
    class Avenger {

        // private name: string = '';
        // public team: string = '';
        // public realName?: string = '';
        static avgAge: number = 35;
        static getClassName() {
            return this.name; // Retorna el nombre de la clase, por que el this apunta a ese objeto
        }

        constructor( 
            private name: string, 
            public team: string,
            public realName?: string,
        ) { }

        public bio() {
            return `${ this.name } (${ this.team })`
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Capitan');
})();