(() => {

    let flash: {
        name: string,
        age?: number,
        powers: string[],
        getNombre?: () => string
    } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Corre rápido', 'Viaja en el tiempo'],
        getNombre() {
            return this.name
        }
    }
    
    let superman: {
        name: string,
        age?: number,
        powers: string[],
        getNombre?: () => string
    } = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Corre rápido']
    }

    // flash = {
    //     name: 'luis',
    //     age: 24,
    //     powers: ['Vivir'],
    //     getNombre() {
    //         return this.name;
    //     }
    // }

    console.log(flash)
})();