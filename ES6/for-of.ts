(() => {
    type Avenger = {
        name: string,
        weapon: string
    }

    const ironMan: Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    }

    const capitanAmerica: Avenger = {
        name: 'Capitán America',
        weapon: 'Escudo'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ ironMan, capitanAmerica, thor ];

    for (const avenger of avengers) {
        console.log(avenger)
    }

})();