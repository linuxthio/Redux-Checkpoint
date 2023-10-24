import { useState } from "react";
import { connect } from "react-redux";

const Addtask = ({ addTask ,update }) => {
  const [inputvalue, setInput] = useState("");

  const onCh = (e) => {
    console.log(inputvalue);
    setInput(e.target.value);
  };

  const addtodo = (e) => {
    // e.preventDefault();
    console.log(inputvalue)
    addTask(inputvalue);
    update()
  };

  return <div className="addtask">
      
        <input className="add-input" placeholder="Nouvelle tache" type="text" value={inputvalue} onChange={onCh} />
        <input className="btn-primary" type="submit" value="Ad Task" onClick={addtodo} />
   
    </div>

};

// const mapStateToProps = (state) => ({
//     todos: [...state.todos]
//   });

// Fonction de mappage des actions Redux aux props
const mapDispatchToProps = (dispatch) => ({
  update:() => dispatch({type:"UPDATE"}),
  addTask: (data) => {
    console.log(data)
    return dispatch({ type: "ADD-TASK", payload: data })},
});

export default connect(null, mapDispatchToProps)(Addtask);
