(() => {
    /**
     * never se puede utilizar para funciones que retornen errores
     */
    const error = ( message: string):never => {
        throw new Error(message);
    }

    const error2 = ( message: string):(never | number) => {
        if (false)
            throw new Error(message);

        return 1;
    }

    error('Aiuuda!');
    // De aqui para abajo el codigo ya no se ejecutara
    console.log(':D')
})();