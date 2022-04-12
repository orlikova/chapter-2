function fizzBuzz() {
    for (let n = 1; n <= 100; n++) {
        const isFizz = n % 3 === 0 && n % 5 !== 0;
        const isBuzz = n % 5 === 0 && n % 3 !== 0;
        const isFizzBuzz = n % 3 === 0 && n % 5 === 0;

        if (isFizz) {
            console.log('Fizz');
        } else if (isBuzz) {
            console.log('Buzz');
        } else if (isFizzBuzz) {
            console.log('FizzBuzz')
        } else {
            console.log(n);
        }

    }
}

fizzBuzz();


