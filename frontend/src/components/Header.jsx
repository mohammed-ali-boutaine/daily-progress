import PropTypes from "prop-types";

function Header({ categories, category, setCategory
  // , setTasks, tasks 
}) {
  const handleChange = (e) => {
    setCategory(e.target.value);

    // setTasks(tasks);
  };
  return (
    <>
      <header>
        {/* 
        <div className=" border-bottom shadow-sm d-flex justify-content-between align-items-center">
          <h1>ToDo List</h1>
        </div> */}

        <div className=" container d-flex justify-content-between align-items-center">
          <h1>Tasks</h1>
          <div>
            <select
              value={category}
              onChange={handleChange}
              className="btn btn-outline-secondary dropdown-toggle"
              style={{ maxWidth: "130px" }}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </header>
    </>
  );
}

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
  // setTasks: PropTypes.func.isRequired,
  // tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Header;
