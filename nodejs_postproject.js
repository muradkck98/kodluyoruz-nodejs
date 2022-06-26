
const post =[
    {post:"post1"},
    {post:"post2"},
    {post:"post3"},
    {post:"post4"},
    {post:"post5"},
];

const listePost = () => {
    post.map(post => {
        console.log(post);
    })
    console.log("postlar sıralandı");
}

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
      try {
        post.push(newPost);
        resolve(post);
      } catch (error) {
        reject(error);
      }
    });
  };



async function project() {
    await listePost();
    addPost({post:"post6"})
    await listePost();
}


project();