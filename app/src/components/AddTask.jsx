import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Container from "@mui/material/Container";
import { Paper } from "@mui/material";
import { PostTask } from "../api/Task_API";

const AddTask = ({setRefreshTasks}) => {
    const [showTextbox, setShowText] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    const addTask = async () => {
        const task = {
            title: title,
            description: description,
            dueDate: dueDate,
        };
        try {
            await PostTask(task);
            setRefreshTasks(true)
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Container>
            <Button
                variant="contained"
                startIcon={<Add />}
                style={{ display: showTextbox ? "none" : "inline-flex" }}
                onClick={() => setShowText(!showTextbox)}
            >
                Add Task
            </Button>
            <Paper
                elevation={2}
                style={{
                    padding: 20,
                    marginTop: "1rem",
                    borderRadius: "16px",
                    display: showTextbox ? "block" : "none",
                }}
            >
                <TextField
                    fullWidth
                    id="title"
                    placeholder="e.g., Deploy to production, fix issue"
                    variant="standard"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    fullWidth
                    id="description"
                    placeholder="Description"
                    variant="standard"
                    style={{
                        marginTop: "1rem",
                    }}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    id="datetime-local"
                    label="Due Date"
                    type="datetime-local"
                    // defaultValue="2017-05-24T10:30"
                    onChange={(e) => setDueDate(e.target.value)}
                    style={{
                        marginTop: "1rem",
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button
                    size="small"
                    variant="contained"
                    style={{
                        float: "right",
                        marginTop: "2rem",
                        marginLeft: "0.5rem",
                    }}
                    onClick={addTask}
                >
                    Add Task
                </Button>
                <Button
                    style={{ float: "right", marginTop: "2rem" }}
                    variant="outlined"
                    size="small"
                    onClick={() => setShowText(!showTextbox)}
                >
                    Cancel
                </Button>
            </Paper>
        </Container>
    );
};

export default AddTask;
