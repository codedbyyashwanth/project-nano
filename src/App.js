import { colors, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import TaskEditor from "./components/TaskEditor";
import TodoList from "./components/TodoList";
import { Container, BaseContainer } from "./styles/App"

function App() {
      const theme = createTheme({
            palette : {
                  primary : {
                        main : colors.teal[500]
                  }
            },
            typography : {
                  fontFamily : ["Rubik", "Montserrat"]
            }
      })

      const [work, setWork] = useState([])
      const showWork = () => {
            console.table(work)
      }

      return (
            <>
                  <ThemeProvider theme={theme}>
                        <Container>
                              <BaseContainer>
                                    <TaskEditor work={work} setWork={setWork} />
                                    <TodoList work={work} setWork={setWork} />
                              </BaseContainer>
                        </Container>
                  </ThemeProvider>
            </>
      );
}

export default App;
