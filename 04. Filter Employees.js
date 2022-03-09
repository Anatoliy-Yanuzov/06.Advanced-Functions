function solve(data, criteria) {

    let parsedData = JSON.parse(data);
    let [crit, value] = criteria.split('-');

    function dataExtract(input) {

        return input.filter(x => x[crit] === value)
            .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
            .join("\n");
    }
    return dataExtract(parsedData);
}