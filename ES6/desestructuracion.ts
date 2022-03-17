(() => {

    interface Avengers {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    const { poder } = avengers;

    const printAvengers = ( avengers: Avengers ) => {
        console.log(avengers.nick)
    }

    // Con desestructuracion en los parametros
    const printAvengers2 = ( { nick, ...restoDeLasPropiedades }: Avengers ) => {
        console.log(nick)
        console.log(restoDeLasPropiedades.ironman);
    }

    const avengersArr = ['Cap. América', 'Ironman', 'Hulk'];

    const [ , ironMan ] = avengersArr;

    console.log({ ironMan })
})();