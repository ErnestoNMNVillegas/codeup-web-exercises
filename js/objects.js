(function() {
    "use strict";

    console.log('test');

    /**
     * TODOne:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = new Object();
    person.firstName= 'Ernesto';
    person.lastName= 'Villegas';

    console.log(person.firstName);
    console.log(person.lastName);

    /**
     * TODOne:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function (){
        console.log("Hello from " + this.firstName + ' '+ this.lastName + "'!'");
    }
    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function(shopper) {
        let finalPrice
        var discountPercent = .12
        if (shopper.amount > 200){
            finalPrice = shopper.amount - (shopper.amount * discountPercent);
            console.log(shopper.name + '\'s ' + 'price before discount was: ' + shopper.amount.toFixed(2) + '. Their discount(if any) is: ' + (shopper.amount - finalPrice).toFixed(2) + ' , and the final price is ' + finalPrice.toFixed(2) + '.');
                } else console.log(shopper.amount.toFixed(2) + ' is ' + shopper.name + '\'s total.  He got no discount.');
    });

    //
    //     shoppers.name.forEach(function(shopper) {
    //         if (shopper.name.amount > 200){
    //             finalPrice = shopper.name.amount - (shopper.name.amount * discountPercent);
    //             console.log(shopper.name + '\'s ' + 'price before discount was: ' + shopper.name.amount + '. Their discount(if any) is: ' + (shopper.name.amount - finalPrice) + 'and the final price is ' + finalPrice + '.');
    //         }
    //         console.log(finalPrice = shopper.name.amount);
    //     });

    // shoppers.forEach(function(shopper) {
    //     shopper.name.forEach(function(objectName) {
    //         let discountPercent = .12
    //         let discountTotal
    //         let finalPrice
    //         if (name.amount > 200){
    //             finalPrice = name.amount - (name.amount * discountPercent);
    //         }   else finalPrice = name.amount;
    //         console.log(objectName + '\'s ' + 'price before discount was: ' + name.amount + '. Their discount(if any) is: ' + discountTotal + 'and the final price is ' + finalPrice + '.');
    //     });
    // });


    /** TODOne:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            titles: 'Goodnight Moon',
            authors: {
                firstName:  'Margaret',
                lastName: 'Brown'
            }
        },   {
            titles: 'The Snowy Day',
            authors: {
                firstName:  'Ezra',
                lastName: 'Keats'
            }
        },   {
            titles: 'Corduroy',
            authors: {
                firstName:  'Don',
                lastName: 'Freeman'
            }
        },   {
            titles: 'Heat 2: A Novel',
            authors: {
                firstName:  'Michael',
                lastName: 'Mann'
            }
        },   {
            titles: 'Quiet',
            authors: {
                firstName:  'Susan',
                lastName: 'Cain'
            }
        },  {
            titles: 'The Gift of Fear',
            authors: {
                firstName:  'Gavin',
                lastName: 'De Becker'
            }
        }
    ];

        // console.log(books[0].titles);
        // console.log(books[0].authors.firstName);
        // console.log(books[0].authors.lastName);
        // console.log(books[1].titles);
        // console.log(books[1].authors.firstName);
        // console.log(books[1].authors.lastName);
        // console.log(books[3].titles);
        // console.log(books[3].authors.firstName);
        // console.log(books[3].authors.lastName);


    /**
     * TODOne:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // books.forEach(function(book) {
    //     book.titles.forEach(function(title) {
    //         console.log(title);
    //     });
    // });

    books.forEach(function(book, index) {
        console.log('Book: ' + (index + 1));
        console.log('Title: ' + book.titles);
        console.log('Author: ' + book.authors.firstName + ' ' + book.authors.lastName);
        console.log('---');
        //`Book: ${index + 1}` also works for 'Book' #.
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    // var newBooks = [
    //     {
    //         titles: '',
    //         authors: {
    //             firstName: '',
    //             lastName: ''
    //         }
    //     }
    // ]
    // newBooks.createBook = new function (titles, firstName, lastName) {
        // var newBooks = [
        //     {
        //         titles: '',
        //         authors: {
        //             firstName: '',
        //             lastName: ''
        //         }
        //     }
        //         ]
    //     if (confirm('Would you like to enter a book?')){
    //         newBooks.push = (titles(prompt('Enter book title:'));
    //         newBooks.push(firstName(prompt("Enter author's first name:"));
    //         newBooks.push(lastName(prompt("Enter author's last name:"));
    //     }
    // };
    //
    // newBooks.createBook();

    // newBooks.createBook = new Function();
    //https://www.sitepoint.com/oriented-programming-2/


    // books.forEach(function(book, index) {
    //     console.log('Book: ' + (index + 1));
    //     console.log('Title: ' + book.titles);
    //     console.log('Author: ' + book.authors.firstName + ' ' + book.authors.lastName);
    //     console.log('---');
    //     //`Book: ${index + 1}` also works for 'Book' #.
    // });

    // car.honk = function () {
    //     alert("Honk! Honk!");
    // };

    //
    // console.log(newBooks[0].titles);
    // console.log(newBooks[0].authors.firstName);
    // console.log(newBooks[0].authors.lastName);
    // console.log(newBooks[1].titles);
    // console.log(newBooks[1].authors.firstName);
    // console.log(newBooks[1].authors.lastName);
    // console.log(books[2].titles);
    // console.log(books[2].authors.firstName);
    // console.log(books[2].authors.lastName);
    // console.log(books[3].titles);
    // console.log(books[3].authors.firstName);
    // console.log(books[3].authors.lastName);



})();
