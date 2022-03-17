(() => {
    const fullName = (firstName:string, lastName:string): string => {
        return `${firstName} ${lastName}`
    }

    const fullName2 = (firstName:string, lastName:(string | boolean)): string => { // No es recomendable colcoar parametros que acepten 2 tipos
        return `${firstName} ${lastName}`
    }

    const name = fullName('Tony', 'Stark');

    console.log({ name })
})