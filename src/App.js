import './App.css';
import React, {useState} from 'react'

function App() {
  let [postTitle, postTitleChange] = useState( ['부산 여행 추천', '우리집에 왜 왔니', '가장 쉬고싶은 타이밍', '나의 벨로그'] );
  let [dumbsUp, dumbsUpChange] = useState(0)
  let [dumbsUp1, dumbsUpChange1] = useState(0)
  let [dumbsUp2, dumbsUpChange2] = useState(0)
  let [dumbsUp3, dumbsUpChange3] = useState(0)


  function changeTitle(){
    let newArr = [...postTitle]
    newArr = newArr.sort() 
    postTitleChange(newArr)
  }

  function resetPage(){
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h3>{ postTitle[0] } 
        <span className = 'dumbs-up' onClick ={ () => {dumbsUpChange(dumbsUp + 1)}}>
          👍</span>{dumbsUp}
        </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ postTitle[1] } <span className = 'dumbs-up' onClick ={ () => {dumbsUpChange1(dumbsUp1 + 1)}}>👍</span>{dumbsUp1}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <div className="list">
        <h3>{ postTitle[2] }<span className = 'dumbs-up' onClick ={ () => {dumbsUpChange2(dumbsUp2 + 1)}}>👍</span>{dumbsUp2} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div> 

      <div className="list">
        <h3>{ postTitle[3] } <span className = 'dumbs-up' onClick ={ () => {dumbsUpChange3(dumbsUp3 + 1)}}>👍</span>{dumbsUp3}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>

      <p>
        <button onClick = { changeTitle }>블로그 글제목 바꾸기</button>
      </p>
      <p>
        <button onClick = { resetPage }>새로고침</button>
      </p>
    </div>
  );
}

export default App;
