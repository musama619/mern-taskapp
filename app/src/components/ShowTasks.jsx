import { useEffect, useState, useContext } from "react";
import { GetActiveTasks, GetAllCompletedTasks } from "../api/Task_API";
import Task from "./Task";
import TaskContext from "../context/TaskContext";

const ShowTasks = (props) => {
    const [tasks, settasks] = useState([]);
    const taskCont = useContext(TaskContext);

    useEffect(() => {
        async function fetchActiveTasks() {
            const tasks = await GetActiveTasks();
            taskCont.setState(false);
            settasks(tasks);
        }
        async function fetchCompletedTasks() {
            const tasks = await GetAllCompletedTasks();
            taskCont.setState(false);
            settasks(tasks);
        }

        if (props.isComplete) {
            fetchCompletedTasks();
        } else {
            fetchActiveTasks();
        }
    }, [taskCont.state]);

    return (
        <>
            {tasks?.map((task, idx) => (
                <Task key={task._id} task={task} index={idx} />
            ))}
        </>
    );
};

export default ShowTasks;
