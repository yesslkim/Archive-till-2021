const socialWallArea = document.querySelector('.socialwall_table tbody');
const postForm = document.querySelector('.post_form');
const postModal = document.querySelector('.post_wrapper');

const openPostForm = () => {
  const socialWall = document.querySelector('.socialwall');

  socialWall.addEventListener('click', (e)=>{
    if(e.target.className === 'write_btn'){
      postForm.classList.add('active');
    }
  })
}

const closePost = (targetUI) => {

  targetUI.addEventListener('click',(e)=>{
    const target = e.target.parentElement;

    if(e.target.className === 'close_btn'){
      target.classList.remove('active')
    }

  }) 
}

const displayPostForm = () =>{
  openPostForm();
  closePost(postForm);
}

const socialWallUI = (dataLists) =>{
  socialWallArea.innerHTML = null;

  dataLists.forEach((dataList,index)=>{
    const post = dataList.data();
    const postNum = index+1;

    socialWallArea.innerHTML += `
    <tr>
      <td>${postNum}</td>
      <td class="title"><a href="#">${post.title}</a></td>
      <td>${post.userID}</td>
      <td>${post.date}</td>
      <td>${post.views}</td>
    </tr>
    `
  })
}

const createNewPost = () => {
  const postForm = document.querySelector('.post_form');

  postForm.addEventListener('submit',(e)=>{
    const user = auth.currentUser;
    const date = new Date().toLocaleDateString();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;

    e.preventDefault();
    
    db.collection('posts').add({
      title: postForm['post_title'].value,
      content: postForm['post_desc'].value,
      userID: user.email,
      date: date,
      views: 0,
      createdAt: timestamp(),
    }).then(()=>{
      postForm.classList.remove('active');
      postForm.reset();
    }).catch(error=>{
      console.log(error.message)
      if(error.message ==='Missing or insufficient permissions.'){
        alert('로그인 후 글쓰기가 가능합니다.')
      }
    }) 
  })
}

const openPostModal = () => {

  socialWallArea.addEventListener('click',(e)=>{
    const postTitle = e.target.parentElement;
    const targetPostIndex = postTitle.previousElementSibling.textContent;

    if(postTitle.className ==='title'){

      db.collection('posts').get().then(snapshot =>{
        const posts = snapshot.docs;
  
        posts.forEach((post,index)=>{
          const postIndex = (index + 1).toString();

          if(targetPostIndex === postIndex){
            const targetPost = post.data()
            postModal.innerHTML = `
            <section class="post">
            <button type="button" class="close_btn">닫기</button>
            <h3>${targetPost.title}</h3>
            <p>
            ${targetPost.content}
            </p>
            </section>
            `
            postModal.classList.add('active')
          }

        })
      }).catch(error=>{
        console.log(error.message)
      })
    }
  })
}


window.addEventListener('DOMContentLoaded', () => {
  // openPostForm();
  // closePost();
  displayPostForm();
  createNewPost();
  openPostModal();
})
