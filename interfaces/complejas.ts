(() => {

    /**
     * Esto no es recomnedable porque puede a llegar a ser confuso tener
     * objetos anidados
    */
    // interface Client {
    //     name: string;
    //     age?: number;
    //     address: {
    //         id: number;
    //         zip: string;
    //         city: string;
    //     }
    // }

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ): string
        // getFullAddress?( id: string ): Client // Podria incluso regresar algo del tipo Client
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Luis',
        age: 27,
        address: {
            id: 1,
            zip: '123',
            city: '1|23'
        },
        getFullAddress( id: string ) {
            return this.address.city;
        }
    }

    // console.log( client.getFullAddress('1') );

})();