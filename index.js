const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const postsContainer = document.getElementById("posts-container")

function like(post){
    posts[post].likes += 1
    renderPosts()
}


function renderPosts() {
    postsContainer.innerHTML = ""
    for(let i = 0; i < posts.length; i++){
        let postHTMl = ""
        postHTMl += `
                <div class="container">
                <div class="post-header">
                   <img src="${posts[i].avatar}">
                   <div class="post-header-info">
                       <p class="post-author">${posts[i].name}</p>
                       <p class="post-loc">${posts[i].location}</p>
                   </div>
                </div>
                <div class="post">
                    <img src="${posts[i].post}" alt="" class="post-image" data-index="${i}">
                </div>
                <div class="post-icons">
                    <img src="images/icon-heart.png" alt="" class="icons like-btn" data-index="${i}">
                    <img src="images/icon-comment.png" alt="" class="icons">
                    <img src="images/icon-dm.png" alt="" class="icons">
                </div>
                <div class="post-interactions">
                    <p>${posts[i].likes} likes</p>
                    <p><span class="post-nick">${posts[i].username}</span> ${posts[i].comment}</p>
                </div>
            </div>
            `
        postsContainer.innerHTML += postHTMl

    }
    
    addEventListeners()
}

function addEventListeners() {
    const likeButtons = document.querySelectorAll('.like-btn')
    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const postIndex = parseInt(this.getAttribute('data-index'))
            like(postIndex)
        })
    })
    
    const postImages = document.querySelectorAll('.post-image')
    postImages.forEach(img => {
        img.addEventListener('dblclick', function() {
            const postIndex = parseInt(this.getAttribute('data-index'))
            like(postIndex)
        })
    })
}

renderPosts()
