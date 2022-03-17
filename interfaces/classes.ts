(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower( id: number ): string;
    }

    interface Human {
        age: number;
    }

    /**
     * Es mejor trabajar con interfaces si se sabe que la clase no va a extender
     */
    class Mutant implements Xmen, Human {

        constructor(
            public age: number,
            public name: string,
            public realName: string
        ) {}
        
        mutantPower(id: number): string {
            return this.name + this.realName;
        }
    }

})();