// Se utiliza IIFE para mantener el codigo de manera aislada
(() => {
    let avengers = 10;

    console.log(avengers)

    const villians = 20;

    if (avengers < villians) {
        console.log(':((')
    } else {
        console.log(':))')
    }

    avengers = Number('123a'); // -> es NaN que en JS es considerado un número

    console.log({ avengers })
})();