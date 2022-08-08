import { useState } from "react";
import TaskContext from "./TaskContext";

const TaskState = (props) => {
    const [state, setState] = useState(false);

    return (
        <TaskContext.Provider value={{state, setState}}>
            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskState;
