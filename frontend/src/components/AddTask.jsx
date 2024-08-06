/* eslint-disable react/prop-types */
// import React from "react";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
function AddTaskInput({
  addTask,
  task,
  setTask,
  // categories,
  // category,
  // setCategory,
}) {

  const handleInputChange = (e) => {
    setTask(e.target.value.trimStart());
  };


  // component code here
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add Task"
          value={task}
          onChange={handleInputChange}
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
       

        <div className="input-group-append">
          <button
            className="btn btn-outline-primary"
            onClick={addTask}
            style={{ maxWidth: "100px" }}
            type="button"
          >
            Add
          </button>
        </div>

      </div>

    </>
  );
}

// AddTaskInput.propTypes = {
//   task: PropTypes.string.isRequired,
//   addTask: PropTypes.func.isRequired,
//   setTask: PropTypes.func.isRequired
// };

export default AddTaskInput;
