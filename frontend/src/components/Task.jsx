/* eslint-disable react/prop-types */

function Task({ task, deleteTask, toggleCheckBox }) {
  return (
    <div
      className="box border-bottom pb-2 d-flex justify-content-between justify-content-between align-items-center"
    >
      <div className="d-flex justify-content-between align-items-center">
        <input
          type="checkbox"
          defaultChecked={task.isDone}
          onChange={() => toggleCheckBox(task.id)}
          name={task.id}
          id={task.id}
        />
        {}
        <h3
          className={`d-inline mx-2 ${
            task.isDone
              ? "text-decoration-line-through fw-light"
              : "fw-normal text-decoration-none"
          }`}
        >
          {task.name}
        </h3>
  
      </div>
      <div>
        <small className="text-secondary" style={{ marginRight: "20px" }}>
          {task.createDate}
        </small>

        <button
          onClick={() => deleteTask(task.id)}
          className="btn btn-sm btn-danger"
        >
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </div>
  );
}

export default Task;
