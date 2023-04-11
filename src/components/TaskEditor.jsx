import { Button, colors, Grid, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './TodoList.css'
import { useState } from 'react';

const TaskEditor = ({ work, setWork }) => {
        const [todo, setTodo] = useState()
        

        const TodoChangeListener = (e) => {
                setTodo(e.target.value)
        }
        const addWork = () => {
                let values = {
                        id : Date.now(),
                        work : todo,
                        checked : false
                }
                setTodo("")
                setWork((value) => [...value, values])
                console.table(work)
        }

        return (
                <>
                        <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                        >
                                <TextField
                                        type="text"
                                        id='outlined-search'
                                        label='Todo work...'
                                        sx={{
                                                width : "40rem"
                                        }}
                                        value={todo}
                                        onChange={TodoChangeListener}
                                />
                                <AddIcon sx={{
                                        margin : "0 1rem",
                                        height : "100%",
                                        backgroundColor : colors.teal[500],
                                        color : "#fafafa",
                                        padding : "0.8rem",
                                        cursor : "pointer",
                                        borderRadius : "4px",
                                        transition : "ease 0.3s",
                                        "&:hover" : {
                                                backgroundColor : colors.teal[700]
                                        }
                                }}
                                        onClick={addWork}
                                />
                        </Grid>
                </>
        )
}

export default TaskEditor;