(() => {
    const hero: string = 'Flash';

    function returnName(): string {
        return hero;
    }

    const activateBatiSignal = (): string => {
        return 'Batiseñal activada';
    }

    console.log(typeof activateBatiSignal)

    const heroName = returnName(); // TS infiere que el tipo de la constante heroName es string, por el resultado que retorna returnName()
})();