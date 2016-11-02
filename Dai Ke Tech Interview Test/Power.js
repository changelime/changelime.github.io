function pow(x, n) {
    let power = 1;
    for( let i = 0; i < n; i++ )
    {
        power *= x;
    }
    return power;
}
console.log(pow(2, 10));