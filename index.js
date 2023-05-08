import WPAPI from 'wpapi';

const wp = new WPAPI({
  endpoint: 'https://test-wordpress.santraez.com/wp-json',
  username: 'username',
  password: 'password'
});

async function addPost(title, content) {
  try {
    const post = await wp.posts().create({
      title,
      content,
      status: 'publish'
    });
    console.log(post);
  } catch (err) {
    console.log(err);
  }
}

function autoAddPost() {
  for (let i = 0; i < 100; i++) {
    addPost(`texto de prueba para post ${i + 12342323}`, 'numeros de ejemplo');
  }
}

autoAddPost();
