function solve(input) {

    const data = {};
    const instr = {
        create: (firstName, inherits, secondName) =>
            (data[firstName] = inherits ? Object.create(data[secondName]) : {}),
        set: (name, key, value) => (data[name][key] = value),
        print: name => {
            const entry = [];
            for (const key in data[name]) {
                entry.push(`${key}:${data[name][key]}`);
            }
            console.log(entry.join(','));
        },
    }
    input.forEach(x => {
        const [create,name,key,value] = x.split(' ');
        instr[create](name, key, value);
    });
}