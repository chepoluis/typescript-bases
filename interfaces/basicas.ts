(() => {

    /**
     * La diferencia con los types es que las interfaces son
     * exendibles, algo como tipo clases
     */
    interface Hero {
        name: string,
        age?: number,
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Corre rápido', 'Viaja en el tiempo'],
        getName() {
            return this.name
        }
    }
    
    let superman: Hero = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Corre rápido']
    }
    
})();