

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//TODOne Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);


// const threeLanguages = users.filter(function(user){
//     return user.languages.length >= 3;
// })
// console.log(threeLanguages);


//TODOne Use .map to create an array of strings where each element is a user's email address

const emailArr = users.map(user => user = user.email);
console.log(emailArr);

//TODOne  Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYrEx = users.reduce((experience, user) => {
    return experience + user.yearsOfExperience / users.length;
}, 0);
console.log(totalYrEx);

//TODO Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longEmail, user) => {
    if (user.email.length > longEmail){
        longEmail = user
    }
    // console.log(longEmail);
    return longEmail;
}, 0);
console.log(longestEmail);

// const tallestHamster = hamsters.reduce((tallHamster, hamster) => {
//     if (hamster.heightInMM > tallHamster.heightInMM) {
//         tallHamster = hamster;
//     }
//     console.log(tallHamster);
//     return tallHamster
// }, {heightInMM: 0})

//TODO Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const userNames = users.reduce((name, user) => {
    name += user.name
    return name;
}, '');
console.log(userNames);


