import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let posts = '블로그 제목'; 
  // useState()사용해보기.
  let [blogTitles, blogEdit] = useState(['가을 노래 추천','인절미 호떡 맛나게 굽는 법', '공부를 열심히 해야하는 3가지 이유']);
  let [like, likeCount] = useState(0);

  function sortBlogTitles(){
    const cloneblogTitles = [...blogTitles];
    cloneblogTitles.sort();
    blogEdit(cloneblogTitles);
  }

  return (
    <div className="App">
      <div className="main-nav">
        <div>예슬의 블로그</div>
      </div>
      <button type="button" onClick= { sortBlogTitles }>블로그 정렬</button>
      <div className="blog-list">
        <div>
          <h2> { blogTitles[0] }</h2>
          <span onClick = {()=>{likeCount(like+1)}}>좋아요 {like} </span>
        </div>
         <span>2020년 11월 5일</span>
      </div>
      <div className="blog-list">
         <h2> { blogTitles[1] } </h2>
         <span>2020년 11월 5일</span>
      </div>
      <div className="blog-list">
         <h2> { blogTitles[2] } </h2>
         <span>2020년 11월 5일</span>
      </div>
    </div>
  );
}

export default App;
