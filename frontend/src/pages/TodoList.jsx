import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import AddTaskInput from "../components/AddTask.jsx";
import Header from "../components/Header.jsx";
import Counter from "../components/Counter.jsx";
import Task from "../components/Task.jsx";

const categories = ["Personal", "Work", "Urgent", "Others","All"];

const getLocalStorage = (name) => {
  const tasks = JSON.parse(localStorage.getItem(name));
  return tasks || [];
};

const setLocalStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};


// const clearLocalStorage = () => {
//   localStorage.clear();
// };

// clearLocalStorage();

// const removeLocalStorage = (name) => {
//   localStorage.removeItem(name);
// };

// removeLocalStorage("tasks");

const getCurrentTime = () => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

function TodoList() {

  const [tasks, setTasks] = useState(getLocalStorage("tasks"));
  const [task, setTask] = useState("");
  const [category, setCategory] = useState(categories[0]);

  // useEffect(() => {
  //   setTasks(getLocalStorage("tasks"));
  // }, []);

  useEffect(() => {
    setLocalStorage("tasks", tasks);
  }, [tasks]);



  const addTask = () => {
    if (task.trim().length > 0) {
      const newTask = {
        id: uuidv4(),
        name: task,
        isDone: false,
        category: category,
        createDate: getCurrentTime(),
      };
      setTasks([...tasks, newTask]);
      setTask("");
      // toast.success("Task added successfully!");
    } else {
      toast.error("Empty task label!");
    }
  };

  const toggleCheckBox = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };


  const deleteTask = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  
  // filter tasks by category and sort by isDone

  const tasksToDisplay = tasks.filter((task) => category === "All" || task.category === category)
  // .filter((task) => task.category === category)
  .sort((a, b) => a.isDone - b.isDone);


  return (
    <div>
      <Header
      tasks={tasks}
      setTasks={setTasks}
        categories={categories}
        category={category}
        setCategory={setCategory}
      />
      <div className="container mt-5">
        <AddTaskInput
          addTask={addTask}
          // tasks={tasks}
          task={task}
          setTask={setTask}
        />
        <ToastContainer position="top-right" draggable />
        <Counter tasks={tasks} />

        {tasksToDisplay.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCheckBox={toggleCheckBox}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
