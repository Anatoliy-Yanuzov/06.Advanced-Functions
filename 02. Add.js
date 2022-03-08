function solve(num) {
    let number = num;

    return function add(num) {
        return number + num;
    }
}