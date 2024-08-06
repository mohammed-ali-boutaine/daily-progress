
import PropTypes from "prop-types";


function Counter({ tasks = [] }) {
  const tasksToDo = tasks.filter((task) => !task.isDone).length;
  const tasksCompleted = tasks.filter((task) => task.isDone).length;

  return (
    <p className="d-flex justify-content-between align-items-center">
      <small>{tasksToDo} tasks to do</small>
      <small>{tasksCompleted} completed</small>
    </p>
  );
}
Counter.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Counter;
