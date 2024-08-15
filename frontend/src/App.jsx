import { 
  BrowserRouter, 
  Routes,
  Route
} from "react-router-dom";
import axios from "axios";
import TodoList from "./pages/TodoList";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./pages/RegisterPage";


function Test() {


   axios.get("http://localhost:5000/").then((response) => {
    console.log("response ",response.data);
  })
  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}




function App() {
  return (
    <>
    <BrowserRouter>

    <Routes>
      <Route path="/todo-list" element={<TodoList />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
