(() => {
    /**
     * enumeraciones nos ayudan a tener un sentido semantico al establecer valores
     */

    // enum AuidioLevel {
    //     min, // 0 -> Valor
    //     medium, // 1
    //     max // 2
    // }

    enum AuidioLevel {
        min = 1, // 1 -> Valor
        medium, // 2
        max = 10 // 10
    }

    let currentAudio = AuidioLevel.medium; // Igual a 1
})();