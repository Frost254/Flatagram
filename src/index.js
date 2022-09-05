function titleHandler(post) {
    const title = document.getElementById("card-title");
    title.innerText = `${post.title}`;
}

function commentHandler(comment) {
    const comments = document.querySelector("ul")
    comments.innerHTML = `<li>${comment.body}</li>`
}

function profileHandler(profile) {
    const profileV = document.getElementById("card-image")
    profileV.innerHTML = ``
}

function getComment() {
    fetch("http://localhost:3000/comments")
        .then(res => res.json())
        .then(commentData => commentData.forEach(comment => commentHandler(comment)))
}

function getTitle() {
    fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then(postData => postData.forEach(post => titleHandler(post)))
}

function getProfile() {
    fetch("http://localhost:3000/profile")
        .then(res => res.json())
        .then(profile => console.log(profile))
}

function initialize() {
    getComment();
    getTitle();
    getProfile();
}

initialize();