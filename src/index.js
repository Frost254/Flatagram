function commentHandler(comment) {
    const comments = document.querySelector("ul")
    comments.innerHTML = `<li>${comment.content}</li>`
}

function like() {
    let count = document.getElementById("like-count");
    count++;
}

function addCount() {
    let btn = document.getElementById("like-button")
    btn.addEventListener("click", like())
}

function postHandler(content) {
    const title = document.getElementById("card-title");
    title.innerText = `${content.title}`;
    const image = document.getElementById("card-image");
    image.src = `${content.image}`
    const likes = document.getElementById("like-count");
    likes.innerHTML = `${content.likes}` + ` likes`;
    addCount();
}

function getPostData() {
    fetch("http://localhost:3000/images")
        .then(res => res.json())
        .then(postData => postData.forEach(content => postHandler(content)))
}

function getComment() {
    fetch("http://localhost:3000/comments")
        .then(res => res.json())
        .then(commentData => commentData.forEach(comment => commentHandler(comment)))
}

function initialize() {
    getComment();
    getPostData();
}

initialize();