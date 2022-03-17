(() => {
    /**
     * Se puede insertar string o numeros o un valor booleano
     */
    // const numbers: (string | number | boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers: number[] = [1,2,3,4,5,6,7,8,9,10];

    const villian = ['Naruto', 'Goku', 'Luis'];

    villian.forEach( v => console.log(v.toUpperCase()))
})();