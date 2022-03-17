(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor avenger llamado')
        }

        // private getFullName() { // En JS esta permitido esto, aunque si llame y marque error se va a ejecutar
        //     return `${ this.name } ${ this.realName }`;
        // }

        protected getFullName(): string {
            return `${ this.name } ${ this.realName }`;
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string, // Cuando se utiliza el super() method no se le deberia colocar el nivel de protección
            realName: string, // Cuando se utiliza el super() method no se le deberia colocar el nivel de protección
            public isMutant: boolean
        ) {
            super( name, realName );
        }

        getFullNameDesdeXmen() {
            super.getFullName();
        }

        get fullName() {
            /**
             * Se puede hacer lo que necesitemos aqui, o retornar valores por defecto si no cumple
             * con ciertas caracterisitcas
             */
            return `${ this.name } ${ this.realName }`;
        }

        set fullName( name: string) {

            if ( name.length < 3 )
                throw new Error('El nombre debe de tener mas de 3 letras');
            
            this.name = name;
        }
    }

    const wolwerine = new Xmen('Wolwerine', 'Logan', true);

    wolwerine.fullName = 'Luis';

})();