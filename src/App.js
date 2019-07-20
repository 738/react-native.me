import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Curated List</h1>
      <ul>
        <li>
          <a href="https://www.native.directory/">native.directory</a>
        </li>
        <li>
          <a href="https://www.awesome-react-native.com/">Awesome React Native</a>
        </li>
        <li>
          <a href="https://js.coach/?collection=React+Native">js.coach</a>
        </li>
      </ul>
      <h1>좋은 참고자료</h1>
      <a href="https://drive.google.com/file/d/1LKtyaDE9qnrqOeJvQRhIhWqdZ229ofR7/view?fbclid=IwAR3CXaz0HevOfkHG4DsAoWeh-a67EAAfQaVBZrxl7RNla3uG-sI3J0ggTkQ">React Native로 성공적인 MVP 개발하기</a>
    </div>
  );
}

export default App;
