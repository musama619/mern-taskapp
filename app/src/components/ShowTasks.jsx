import { useEffect, useState } from "react";
import { GetAllTasks } from "../api/Task_API";
import Task from "./Task";

const ShowTasks = ({ refreshTasks }) => {
    const [tasks, settasks] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const tasks = await GetAllTasks();
            settasks(tasks);
        }

        fetchData();
    }, [refreshTasks]);

    return (
        <>
            {tasks?.map((task, idx) => (
                <Task key={idx} task={task} index={idx} />
            ))}
        </>
    );
};

export default ShowTasks;
