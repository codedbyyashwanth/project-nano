import { CheckBox } from "@mui/icons-material";
import { Checkbox, colors, Grid, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
import { useState } from "react";

const TodoList = ({work, setWork}) => {
        const [checkBox, setCheckBox] = useState(false)

        const checkBoxClick = (e) => {
                // setCheckBox((value) => !value)
                console.log(e)
                setWork((values) => !(values[e.target].checked))
        }

        const closeClick = (e) => {
                let newData = work.filter((data, index) => {
                        return index !== e.target.dataset.id 
                })
                setWork(newData)
        }

        return (
                <>
                     
                        {
                                work.map((value, index) => (
                                        <Grid
                                                key={value.id}
                                                container
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                sx={{
                                                        width : "40rem",
                                                        margin : "1rem 0",
                                                        padding :"1rem 0.7rem",
                                                        border : `1px solid rgba(159, 159, 159, 0.5)`,
                                                        borderRadius : "4px"
                                                }}
                                        >
                                                <Box
                                                        sx={{
                                                                display : "flex",
                                                                alignItems : "center"
                                                        }}
                                                >

                                                <Checkbox data-ids={index} checked={checkBox} onClick={checkBoxClick} />

                                                <Typography sx={ checkBox ? { textDecoration : "line-through" } : {} }>{ value.work }</Typography>
                                                </Box>

                                        </Grid>
                                ))
                        }
                </>
        )
}

export default TodoList;