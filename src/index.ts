// FizzBuzz

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

//fizzBuzz();

// Looping a Triangle

function triangleLoop() {
    let myStr = '#';
    for (let i = 1; i <= 7; i++) {
        console.log(myStr);
        myStr = myStr + '#';
    }
}

//triangleLoop();

// Chessboard

function chessBoard(size: number) {
    const white = ' ';
    const black = '#';
    let board = '';

    for (let i = 1; i <= size; i++) {

        for (let j = 1; j <= size; j++) {
            if ((i + j) % 2 == 0) {
                board += white;
            } else {
                board += black;
            }
        }
        board += '\n';
    }
    console.log(board);


}

chessBoard(24);