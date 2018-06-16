function oddOrEven(n: number): string {
    // tslint:disable-next-line:no-bitwise
    if (n & 1) {
        return 'ODD';
    }

    return 'EVEN';
}

console.log(oddOrEven(5));
console.log(oddOrEven(6));
