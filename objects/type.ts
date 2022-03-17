(() => {
    type Hero = {
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