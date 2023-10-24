import { connect } from "react-redux";
import "./App.css";
import TaskList from "./components/TaskList";

function App({task_do,task_no}) {
  return (
    <div className="App">
      <h1>Todo - List </h1>
      <div className="info"> {task_do} / {task_do+task_no} </div>
      <TaskList />
      <h2 style={{color:"greenyellow"}}>Thiongane 2023</h2>
    </div>
  );
}


const mapStateToProps=(state)=>{
  let n=state.todos.filter((t) => t.isDone===true).length
  return {
    task_do:n ,
    task_no: state.todos.length-n
  }
}
export default connect(mapStateToProps,null)(App);
