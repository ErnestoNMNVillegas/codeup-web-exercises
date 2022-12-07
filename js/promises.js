console.log("test");

"use strict";

(() => {

// fetch(url, {headers: {'Authorization': 'token YOUR_TOKEN_HERE'}})

//TODO Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.

// Octokit.js
// https://github.com/octokit/core.js#readme
    const lastCommit = new Octokit({
        auth: GITHUB_KEY
    })

    await octokit.request('GET /users/{username}/events/public{?per_page,page}', {
        username: 'ErnestoNMNVillegas'
    })




})();
