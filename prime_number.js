onmessage = function (e) {
    // console.log('Worker: Message from worker');
    const cmd = e.data[0];
    const num = e.data[1]
    if (cmd != "stop") {
        var i = 0;
        while (i < num) {
            var prime_flag =  checkIfPrime(i);
            // console.log('Worker: Posting message back to main script');
            prime_flag == true ? postMessage(i) : "";
            i++;
        }
    }
}


function checkIfPrime(num) {
    // program to check if a number is prime or not

    // take input from the user
    const number = parseInt(num);
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        isPrime = false;
    }

    // check if number is greater than 1
    else if (number > 1) {
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }

        // if (isPrime) {
        //     console.log(`${number} is a prime number`);
            
        // } else {
        //     console.log(`${number} is a not prime number`);
        // }
    }
    // check if number is less than 1
    // else {
    //     console.log("The number is not a prime number.");
    // }
    return isPrime;
}
