(() => {
    /**
     * Con el any no aparecen las ayudas, es otra razon para usar lo menos posible any
     */
    let avenger: any = 123;

    let exists;
    let power;

    avenger = 'Dr Strange';
    // console.log( avenger.charAt(0) )

    /**
     * Es una forma de casteo, no se esta cambiando el tipo, solo se le dice
     * que se maneje como si fuese un string
     */
    console.log( (avenger as string).charAt(0) )

    avenger = 123.4342;
    // console.log( avenger.toFixed(2) );

    /**
     * Es una manera para castear las variables
     */
    console.log( (<number>avenger).toFixed(2) );


})();