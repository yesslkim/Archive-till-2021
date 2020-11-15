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


window.addEventListener('DOMContentLoaded', () => {
  openPostForm();
  closePost();
})
