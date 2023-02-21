import './App.css';
// import Question1 from './question_1';
import Question2 from './question_1';
// import TitleComponent from './Titles';

function App() {
  return (
    <div>
    <Question2 url="https://i.aaj.tv/primary/2022/12/081555292c80a75.jpg"/>
    {/* <Youtube_Thumbnail title = "Tom Jerry" duration= "12:20" url = "something.com"/> */}
    </div>
  );
}

const Youtube_Thumbnail = (props)=> {
  return (
    <>
      <h1>Title : {props.title}</h1>
      <h1>Vedio Length : {props.duration}</h1>
      <h1>Image URL : {props.url}</h1>
      {/* <Question1 message= "passed data!"/> */}
      </>
      );
}
export default App;