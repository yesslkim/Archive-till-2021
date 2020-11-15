const postForm = document.querySelector('.post_form');
const postModal = document.querySelector('.post_wrapper');

const openPostForm = () => {
  const writeBtn = document.querySelector('.write_btn');
  
  writeBtn.addEventListener('click', ()=>{
    postForm.classList.add('active');
  })
}

const closePost = () => {
  const closeBtns = document.querySelectorAll('.close_btn');

  closeBtns.forEach(closeBtn=>{
    closeBtn.addEventListener('click', ()=>{
      postForm.classList.remove('active');
      postModal.classList.remove('active');
    })
  }) 
}

const socialWallUI = (dataLists) =>{
  const socialWallArea = document.querySelector('.socialwall_table tbody');

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
   
    e.preventDefault();
    
    db.collection('posts').add({
      title: postForm['post_title'].value,
      content: postForm['post_desc'].value,
      userID: user.email,
      date: date,
      views: 0
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

window.addEventListener('DOMContentLoaded', () => {
  openPostForm();
  closePost();
  createNewPost();
})
