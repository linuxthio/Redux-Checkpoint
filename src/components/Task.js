// import { useState } from "react";
import { useState } from "react";
import { connect } from "react-redux";

const Task = ({ task,changeTask}) => {

  const [desc,setDesc]=useState(task.description)
  const [visible,setVis]=useState(true)
  const [taskDone, setDone] = useState(task.isDone);

  const onch=(e)=>{
    console.log(task.description)
    setDesc(e.target.value)
  }
  const setvisible=()=>{
    setVis(!visible)
    if (!visible){
      changeTask(task.id,desc,task.isDone)
    }
  }
  const chOnDone = (e) => {
    // console.log(e)
    setDone(e.target.checked);
    changeTask(task.id,desc,e.target.checked)
  };
  return (
    <div className="task"  >
  
        <input
          type="checkbox"
          name=""
          id=""
          style={{flex:"1"}}
          checked={taskDone}
          onChange={chOnDone}
        />
      <button onClick={setvisible} >{visible? <span>Modifier</span>:<span>Valider</span>}</button>
      {visible? <p style={{flex:"4"}} >{task.description}</p>: <input style={{flex:"4"}} type="text" value={desc}  onChange={onch}/> }
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const task = state.todos.find((item) => item.id === props.idtask);
  // console.log(task)
  // console.log(props)
  return {
    task: task,
  };
};

// Fonction de mappage des actions Redux aux props
const mapDispatchToProps = (dispatch) => ({
  delTask: (data) => dispatch({ type: "DELETE", payload: data }),
  changeTask: (id, data,isdone) => dispatch({ type: "CHANGE", payload: { id, data,isdone } }),
});

export default connect(mapStateToProps,mapDispatchToProps)(Task);
