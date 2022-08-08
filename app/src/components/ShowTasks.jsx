import { useEffect, useState, useContext } from "react";
import { GetAllTasks } from "../api/Task_API";
import Task from "./Task";
import TaskContext from "../context/TaskContext";

const ShowTasks = () => {
    const [tasks, settasks] = useState([]);
    const taskCont = useContext(TaskContext);

    useEffect(() => {
        async function fetchData() {
            const tasks = await GetAllTasks();
            taskCont.setState(false)
            settasks(tasks);
        }

        fetchData();
    }, [taskCont.state]);

    return (
        <>
            {tasks?.map((task, idx) => (
                <Task key={idx} task={task} index={idx} />
            ))}
        </>
    );
};

export default ShowTasks;
