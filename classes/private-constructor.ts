(() => {
    
    class Apocalipsis {

        static instance: Apocalipsis;
        
        /**
         * El constructor solo puede ser llamado dentro de la misma clase
         */
        private constructor( public name: string ) {

        }

        /**
         * Cada instancia del metodo va a hacer la misma instancia
         */
        static callApocalipsis() : Apocalipsis {
            if ( !Apocalipsis.instance ) {
                Apocalipsis.instance = new Apocalipsis('Hoolaa soy único!');
            }

            return Apocalipsis.instance;
        }

        /**
         * Si se usa este metodo todos los objetos tendran el mismo nombre,
         * porque apunta hacia la misma instancia ya que es un PATRON SINGLETON
         */
        public changeName( newName: string ): void {
            this.name = newName;
        }
    } 

    /**
     * Como utilizar el metodo callApocalipsis
     */

    const apocalipsis1 = Apocalipsis.callApocalipsis(); // La instancia de la clase es privada por ende se crea dentro de la clase
    const apocalipsis2 = Apocalipsis.callApocalipsis();


    // const apocalipsis = new Apocalipsis('Holaaa- unico'); // Marca error porque tiene un constructor privado
})();