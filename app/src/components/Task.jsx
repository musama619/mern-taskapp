import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import { useState, useContext } from "react";
import { PatchTask } from "../api/Task_API";
import TaskMenu from "./TaskMenu";
import TaskContext from "../context/TaskContext";

const Task = ({ task, index }) => {
    const [checked, setChecked] = useState(task.isComplete ? true : false);
    const [anchorEl, setAnchorEl] = useState(null);
    const taskCont = useContext(TaskContext);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const markComplete = async (e) => {
        setChecked(e.target.checked);

        const updateTask = {
            isComplete: e.target.checked,
        };

        try {
            const x = await PatchTask(task._id, updateTask);
            taskCont.setState(true)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <Paper style={{ marginTop: "1rem" }} elevation={3}>
                <CardContent>
                    <CardHeader
                        avatar={
                            <Checkbox
                                checked={checked}
                                onChange={markComplete}
                            />
                        }
                        action={
                            <IconButton
                                aria-label="settings"
                                onClick={handleClick}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={task.title}
                        
                        subheader={task.description}
                    />
                </CardContent>
            </Paper>

            <TaskMenu
                id={task._id}
                handleClose={handleClose}
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
                open={open}
            />
        </>
    );
};

export default Task;
