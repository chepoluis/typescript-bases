(() => {
    const fullName = ( firstName: string, ...restNames: string[]): string => {
        return `${ firstName } ${ restNames.join(' ') }`;
    }

    const superMan = fullName('Luis', ':D', 'JEJEJ');

    console.log({ superMan })
})();