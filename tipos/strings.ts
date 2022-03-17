(() => {
    const batman: string = 'Batman';
    const linternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Hérore Volcan Negro`;

    console.log( batman[10]?.toUpperCase() || 'No esta :(');
})();