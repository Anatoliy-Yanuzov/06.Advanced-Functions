function solve(input) {

    let arr = [];
    const obj = {
        add: str => arr.push(str),
        remove: str => (arr = arr.filter(x => x !== str)),
        print: () => console.log(arr.join(','))
    }

    input.forEach(x => {
        const [command, value] = x.split(' ');
        obj[command](value);
    });
}