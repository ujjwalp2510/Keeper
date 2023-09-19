import React from "react";

function CreateArea(props) {
  function addItem(event) {
    props.handleSubmit(item);
    event.preventDefault();
  }
  const [item, setItem] = React.useState({});
  function handleChange(event) {
    const { name, value } = event.target;
    setItem((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  return (
    <div>
      <form onSubmit={addItem}>
        <input name="title" placeholder="Title" onChange={handleChange} />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
