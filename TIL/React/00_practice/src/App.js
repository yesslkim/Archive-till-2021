import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let posts = '블로그 제목'; 
  // useState()사용해보기.
  let [blogTitles, blogEdit] = useState(['가을 노래 추천','인절미 호떡 맛나게 굽는 법', '공부를 열심히 해야하는 3가지 이유']);
  let [likes, likeCount] = useState(0);
  let [modal, setModal] = useState(false);
  let [titleIndex, setTitleIndex] = useState(0);

  function sortBlogTitles(){
    const cloneblogTitles = [...blogTitles];
    cloneblogTitles.sort();
    blogEdit(cloneblogTitles);
  }

  function stateModal(){
    setModal(!modal);
  }

  function likeEach(){
    return likeCount(likes++);
  }

  return (
    <div className="App">
      <div className="main-nav">
        <div>예슬의 블로그</div>
      </div>
      <button type="button" onClick= { sortBlogTitles }>블로그 정렬</button>
      {
        blogTitles.map((blogtitle,index)=>{
          return (
            <div className="blog-list">
            <div>
              <h2 onClick={()=>{setTitleIndex(index)}}> { blogtitle }</h2>
              <span onClick = { likeEach }>좋아요 {likes} </span>
            </div>
            <span>2020년 11월 5일</span>
          </div>
          )
        })
      }
      
      <button type="button" onClick= { stateModal }> 글 읽기 </button>
      
      {
        modal === true ?  <Modal blogTitles = { blogTitles } titleIndex = { titleIndex }></Modal> : null
      }

    </div>
  );
}


// 모달은 App()의 자식 컴포넌트가 된다.
function Modal(props){
  return (
    <div className="modal">
      <h2>{props.blogTitles[props.titleIndex]}</h2>
      <span>날짜</span>
      <p>싱세내용</p>
    </div>
  )
}



export default App;
