function divisible(number) {
    let a = [];
    for (i = 1; i <= number; i++) {
        if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            a.push("yu-gi-oh")
        } else if (i % 3 == 0 && i % 5 == 0) {
            a.push("gi-oh");
        } else if (i % 2 == 0 && i % 5 == 0) {
            a.push("yu-oh");
        } else if (i % 2 == 0 && i % 3 == 0) {
            a.push("yu-gi");
        } else if (i % 5 == 0) {
            a.push("oh");
        } else if (i % 3 == 0) {
            a.push("gi");
        } else if (i % 2 == 0) {
            a.push("yu");
        } else {
            a.push(i);
        }    }
    return a
}
console.log(divisible(100));
