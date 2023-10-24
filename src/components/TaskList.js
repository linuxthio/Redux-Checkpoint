import Task from "./Task";
import Addtask from "./Addtask";
import { connect } from "react-redux";
import { useState } from "react";
// import { useEffect, useState } from "react";

const TaskList = ({ todos}) => {
  const [tree, setTree] = useState(0);

  const filtreAll = () => {
    setTree(0);
  };
  const filtreAct = () => {
    // console.log(todos.filter((t) => !t.isDone));
    setTree(1);
  };
  const filtreComp = () => {
    setTree(2);
  };

  // useEffect(()=>{
  //   update()
  // },[cptodos])

  const display = (t) => {
    switch (tree) {
      case 1:
        // active

        return (
          <div key={t.id}>
            {!t.isDone ? <Task task={t} idtask={t.id} /> : null}
          </div>
        );
      case 2:
        return (
          <div key={t.id}>
            {t.isDone ? <Task task={t} idtask={t.id} /> : null}
          </div>
        );
      default:
        return (
          <div key={t.id}>
            <Task task={t} idtask={t.id} /> 
          </div>
        )
    }

    // <div key={t.id}><Task task={t} idtask={t.id} /></div>
  };
  return (
    <div className="tasklist">
      <div className="filtre">
        <button className="btn-primary" onClick={filtreAll}>
          All
        </button>
        <button className="btn-primary" onClick={filtreAct}>
          Active
        </button>
        <button className="btn-primary" onClick={filtreComp}>
          Complete
        </button>
      </div>
      <Addtask />
      <div>
        {todos.map((t) => (
          
            display(t)
        
        ))}
      </div>
    </div>
  );
};
/*delTask={() => delTask(t.id)} */
const mapStateToProps = (state) => ({
  todos: state.todos,
});

// Fonction de mappage des actions Redux aux props
const mapDispatchToProps = (dispatch) => ({
  update: () => dispatch({ type: "UPDATE" }),
  delTask: (idtask) => dispatch({ type: "DELETE", payload: idtask }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
