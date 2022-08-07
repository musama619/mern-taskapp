import { Card, CardActions, CardContent } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { PutTask } from "../api/Task_API";

const Task = ({ task, index }) => {
    const [checked, setChecked] = useState(task.isComplete ? true : false);

    const markComplete = async (e) => {
        setChecked(e.target.checked);

        const updateTask = {
            "isComplete": checked,
        };

        console.log("updateTask", updateTask)
        try {
            const x = await PutTask(task._id, updateTask);
            console.log("x", x)
        } catch (error) {

            console.log("error", error);
            console.log(error.message);
        }
    };
    return (
        <Paper style={{ marginTop: "1rem" }} elevation={3}>
            <CardContent>
                <Typography variant="h5">
                    <Checkbox checked={checked} onChange={markComplete} />
                    {task.title}
                    <br />
                </Typography>
                <ul>
                    <li key={`${task._id}` + Math.random()}>
                        {task.description}
                    </li>
                    <li key={`${task._id}` + Math.random()}>{task.dueDate}</li>
                </ul>
            </CardContent>
        </Paper>
    );
};

export default Task;
