//Assignment: Write a program that prints out the numbers 1 to 100 (inclusive). If the number is divisible by 3, print Crackle instead of the number. If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. You can use any language.

    function cracklePop(number) {
        for(let n = 1; n <= number; n++) {

            if (n % 3 === 0 && n % 5 === 0) {
                console.log(`${n} CracklePop`)
            }

            else if (n % 3 === 0) {
                console.log (`${n} Crackle`)
            }

            else if (n % 5 === 0) {
                console.log (`${n} Pop`)
            }

            else {
                console.log(n)
            }
            
        }                      
    }

    cracklePop(100)

//Below are the steps I used to solve the problem.

//Step 1: Make a function that console logs numbers from 1 to 100 to start using a for loop. Then call the function with an unput of 100. The function will count from n set to 1 through 100 inclusive.

    // function cracklePop(number) {
    //     for(let n = 1; n <= number; n++) {
    //         console.log(n)
    //     }
    // }

    // cracklePop(100)

//Step 2: Print CracklePop first if the number is divisible by 3 and by 5. Do this instead of having the program check for 3 or 5 individually. If we have 3 AND 5 present, then doing a check for 3 OR 5 becomes redundant. Any number that doesn't meet the test returns just the number.

//Make use of modulus operator % instead of division operator /. This will check to see if there is a remainder. If the remainder is equal to 0, then the number is divisible by the number checked against in the function. Also, use === to check that we are dividing with number inputs and not strings that might look like 1,2,3 etc.

    // function cracklePop(number) {
    //     for(let n = 1; n <= number; n++) {

    //         if (n % 3 === 0 && n % 5 === 0) {
    //             console.log(`${n} CracklePop`)
    //         }

    //         else {
    //             console.log(n)
    //         }
            
    //     }
    // }

    // cracklePop(100)

//Step 3: Print Crackle when the number presented to the function is divisble by 3. If divisible by 5, print Pop. 

