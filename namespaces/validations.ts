/**
 * namespace es como un agrupadro global
 * 
 * The namespace is used for logical grouping of functionalities. A namespace can include interfaces, classes, 
 * functions and variables to support a single or a group of related functionalities. 
 * A namespace can be created using the namespace keyword followed by the namespace name.
 */
namespace Validations { 

    export const validateText = ( text: string ) => {
        return (text.length > 3) ? true : false;
    }

    export const validateDate = ( myDate: Date ): boolean => {
        return ( isNaN( myDate.valueOf() ))
            ? false
            : true;
    }
}

