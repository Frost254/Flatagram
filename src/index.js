function commentHandler(comment) {
    const comments = document.querySelector("ul")
    comments.innerHTML = `<li>${comment.content}</li>`
}


function handleSubmit(e) {
    e.preventDefault();
    let commentObj = {
        value: e.target.comment.value
    }
    commentHandler(commentObj)
    postComment(commentObj)
}

function postComment(commentObj) {
    fetch("http://localhost:3000/comments", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentObj)
        })
        .then(res => res.json())
        .then(commentValue => console.log(commentValue))
}

function postHandler(content) {
    const title = document.getElementById("card-title");
    title.innerText = `${content.title}`;
    const image = document.getElementById("card-image");
    image.src = `${content.image}`
    const likes = document.getElementById("like-count");
    likes.innerHTML = `${content.likes}` + ` likes`
    let btn = document.getElementById("like-button")
    btn.addEventListener("click", () => {
        //console.log("click");
        content.likes += 1;
        likes.innerHTML = `${content.likes}` + ` likes`

    })
    addLikes(content);
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

function addLikes(content) {
    fetch("http://localhost:3000/images", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(content)
        })
        .then(res => res.json)
        .then(like => console.log(like))
}

function initialize() {
    getComment();
    getPostData();
    let form = document.querySelector("#comment-form");
    form.addEventListener("submit", handleSubmit)
}

initialize();
