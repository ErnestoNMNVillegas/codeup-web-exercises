(function() {
    "use strict";

    $.get("data/blog.json").done(function(data) {
    console.log(data);
    // $("#insertProducts").append("<tr><td>" + data.title[i] + "</td><td>" + data.quantity[i] + "</td><td>" + data.price[i] + "</td></tr>");

    let blogPosts = '';
    $.each(data, function(key, value){
        blogPosts += "<tr><td>" + value.title + "</td><td>" + value.content + "</td><td>" + value.categories + "</td><td>" + value.date + "</td></tr>";
    })

    // "<p>Request to API complete.</p>"

    $("#insertBlog").append(blogPosts);
});

})();

