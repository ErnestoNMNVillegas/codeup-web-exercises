console.log("test");

"use strict";

(() => {

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

//TODO Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

    const lastPushCommit = (userName) => {
        const myPromise =fetch('https://api.github.com/users/' + userName + '/events/public', {headers: {'Authorization': GITHUB_KEY}})
        myPromise.then(response => response.json())
            .then(users => {
                console.log(users);
                users.forEach( userObj => {
                    // do something with each username
                    console.log(userObj.login);
                })
            })
        myPromise.catch(error => console.error(error));

        // const githubPromise = fetch('https://api.github.com/repositories');
        // const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
    }

    console.log(lastPushCommit("ernestoNMNVillegas"));

    // [1].payload.commits


    // Promise.all([githubPromise, bitbucketPromise])
    //     .then(function(data) {
    //         // here data is an array of the resolved values from each promise
    //         // we can now do something with both pieces of data
    //     })
    //     .catch(function(error) {
    //         // handle errors
    //     });


})();
