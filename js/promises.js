console.log("test");

"use strict";

(() => {

//TODO Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this.
    let tbody = document.getElementById("push");
    var lastPush

    const lastPushCommit = (userName) => {
        const myPromise = fetch('https://api.github.com/users/' + userName + '/events/public', {headers: {'Authorization': GITHUB_KEY}})
        myPromise.then(response => response.json())
            .then(users => {
                console.log(users);
                users.forEach(( userObj, index) => {
                    for (let user of users){
                        if (userObj.type === "PushEvent"){
                        // console.log(userObj);
                            if(index===0){
                                console.log(userObj.created_at);
                                tbody.innerHTML = userName + "'s last push was on: " + userObj.created_at
                                return lastPush = userObj.created_at
                            }
                        }
                    }
                })
            })
        myPromise.catch(error => console.error(error));
        console.log(lastPush);
    }
    console.log(lastPush);
    console.log(lastPushCommit("ernestoNMNVillegas"));


})();
