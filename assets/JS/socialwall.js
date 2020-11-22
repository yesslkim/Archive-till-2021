//global variables
const socialWallArea = document.querySelector('.socialwall_table tbody');
const postForm = document.querySelector('.post_form');
const postModal = document.querySelector('.post_wrapper');

//게시판 목록 UI
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


//게시판 데이터 보내기 
const createNewPost = () => {
  const postForm = document.querySelector('.post_form');
  postForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    // const user = auth.currentUser;
    const date = new Date().toLocaleDateString();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp;
    const user = auth.currentUser;

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
    }) 
  })
}

// 게시글 글쓰기 열기
const openPostForm = () => {
  const socialWall = document.querySelector('.socialwall');
  socialWall.addEventListener('click', (e)=>{
    if(e.target.className !== 'write_btn')return;
    console.log(isOnline)
    if(isOnline){
        postForm.classList.add('active');
        createNewPost();
        closeUI(postForm);
    }else{
      alert('로그인 후 글쓰기가 가능합니다.')
    }
  })
}

//조회수 증가
const increaseView = (target) => {
  const currentView = target.data().views
  db.collection('posts').doc(target.id).update({
    views: currentView + 1
  })
}

// 게시글 상세보기
const openPostModal = () => {
  socialWallArea.addEventListener('click',(e)=>{
    const postTitle = e.target.parentElement;
    const targetPostIndex = postTitle.previousElementSibling.textContent;
    const targetPostUserID = postTitle.nextElementSibling.textContent;

    if(postTitle.className ==='title'){
      if(!isOnline){
        db.collection('posts').orderBy('createdAt').get().then(snapshot=>{
          const posts = snapshot.docs;
          posts.filter((post,index)=>{
            const postIndex = (index + 1).toString();
            return postIndex === targetPostIndex;
          }).map((post,index)=>{
            const targetPost = post.data()
            const postIndex = (index + 1).toString();
            postModal.classList.add('active')
            increaseView(post);
            return(
              postModal.innerHTML = `
              <button type="button" class="close_btn">닫기</button>
              <h3>${targetPost.title}</h3>
              <p>
              ${targetPost.content}
              </p>
              <span>-${postIndex}-</span>
              `
            )
          })
          closeUI(postModal);
        }).catch(error=> console.log(error.message))
      }else {
        db.collection('posts').orderBy('createdAt').get().then(snapshot=>{
        const posts = snapshot.docs;
        posts.forEach((post,index)=>{
          const postIndex = (index + 1).toString();
          const targetPost = post.data()
            if(targetPostIndex === postIndex && targetPostUserID === auth.currentUser.email){
              postModal.innerHTML = `
              <button type="button" class="close_btn">닫기</button>
              <button type="button" class="delete_btn">삭제하기</button>
              <h3>${targetPost.title}</h3>
              <p>
              ${targetPost.content}
              </p>
              <span>-${postIndex}-</span>
              `
              postModal.classList.add('active');
  
              increaseView(post);
            }else if (targetPostIndex === postIndex){
              postModal.innerHTML = `
              <button type="button" class="close_btn">닫기</button>
              <h3>${targetPost.title}</h3>
              <p>
              ${targetPost.content}
              </p>
              <span>-${postIndex}-</span>
              `
              postModal.classList.add('active')
              increaseView(post);
            }
        })
        closeUI(postModal);
      }).catch(error=> console.log(error.message))
      }
    }
  })
}

// 특정UI 닫기
const closeUI = (targetUI) => {
  targetUI.addEventListener('click',(e)=>{
    const target = e.target.parentElement;

    if(e.target.className === 'close_btn' || e.target.className ==='delete_btn'){
      target.classList.remove('active')
    }
  }) 
}

// const displayPostForm = (user) => {
//   openPostForm(user);
//   closeUI(postForm);
// }

// const displayPostModal = (user) => {
//   openPostModal(user);
//   closeUI(postModal);
// }

const deletePost = () => {
  postModal.addEventListener('click',(e)=>{

    if(e.target.className === 'delete_btn'){
      db.collection('posts').orderBy('createdAt').get().then(snapshot =>{
        const posts = snapshot.docs;
        const targetPostIndex = [...(postModal.querySelector('span').textContent)][1]
  
        posts.forEach((post,index)=>{
          const postIndex = (index + 1).toString();
          const targetPost = post.id

          if(targetPostIndex === postIndex){
            closeUI(postModal);
            db.collection('posts').doc(targetPost).delete().then(()=> {
              alert('게시글이 삭제되었습니다')
            }).catch(error=>{
              console.log(error.message)
            }) 
          }
        })
      })
    }

  })
}

window.addEventListener('DOMContentLoaded', () => {
  openPostModal();
  deletePost();
})
