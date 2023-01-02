"use strict";

(() => {

/*
 * Complete the TODO items below
 */

console.log('test');

const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO DONE: fill in your name and email and add some programming languages you know
// to the languages array
// TODO DONE: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`
// var name = 'Ernesto';
// var email = 'ernesto.nmn.villegas@gmail.com';
// var languages = ["JavaScript", "HTML", "CSS"];

const name = 'Ernesto';
const email = 'ernesto.nmn.villegas@gmail.com';
const languages = ["JavaScript", "HTML", "CSS"];

// name = 'Bert'
//'Attempt to assign to const or readonly variable' = Intellij Mad


// TODO DONE: rewrite the object literal using object property shorthand
users.push({name, email, languages});
  // name: name,
  // email: email,
  // languages: languages

console.log(users);

// TODO DONE: replace `var` with `let` in the following variable declarations
let emails = [];
let names = [];

// TODO ??: rewrite the following using arrow functions
  const pushEmail = (user, users) => {
    for (let user of arr) {
      return emails.push(user.email);
    }
    console.log(emails);
  }

users.forEach(function(user) {
  return emails.push(user.email);
});

  const pushNames = (user, users) => {
    for (let user of arr) {
      return names.push(user.name);
    }
    console.log(names);
  }

users.forEach(function(user) {
  return names.push(user.name);
});

// TODO DONE: replace `var` with `let` in the following declaration
let developers = [];
users.forEach(function(user) {
  // TODO DONE: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;

  const { name, email, languages } = user;

  // // object destructuring
  // const {name, languages} = instructor;
  // console.log(name);
  // console.log(languages);

  // // old way
  // var person = { name: 'codeup', age: 4 };
  // var name = person.name;
  // var age = person.age;
  // console.log(name); // 'codeup'
  // console.log(age); // 4

  // // new way
  // const person = { name: 'codeup', age: 4 };
  // const { name, age } = person;
  // console.log(name); // 'codeup'
  // console.log(age); // 4

  // TODO DONE: rewrite the assignment below to use template strings
//   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
// });

developers.push(`${name}'s email is ${email}.  ${name} knows ${languages.join(', ')}`);
});
  console.log(developers);

// TODO DONE: Use `let` for the following variable
let list = '<ul>';

// TODO Kinda - Works in Console: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

  // TODO DONE: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';

  let textHtml = document.querySelector("#insert-here")
  for (let developer of developers) {
      list += `<li> ${developer} </li>`;
    // textHtml.innerHTML = list;
  }
    list += `</ul>`;
  
  console.log(list);
// for(let num of arrOfNums) {
//   if (num % 2 === 0) {
//     continue;
//   }
//   document.querySelector("#insert-here").innerHTML += `<li>$${num.toFixed(2)} is an odd number.</li>`;


})();

