(function(){

    "use strict";

    console.log('test')

    /**
     * TODOne:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['ernie', 'bert', 'joe', 'john']

    /**
     * TODOne:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODOne:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /**
     * TODOne:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log('The names in the "names" array are: ' + names[i])
    }

    /**
     * TODOne:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function (name){
        console.log('forEach list of names from "names" array: ' + name)
    });

    /**
     * TODOne:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function firstElement (numZero){
        return numZero[0];
    }

    function secondElement (numTwo){
        return numTwo[1];
    }

    function lastElement (numLast){
        return numLast[numLast.length -1];
    }

    console.log(firstElement(names));
    console.log(secondElement(names));
    console.log(lastElement(names));

})();
