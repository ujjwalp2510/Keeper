import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = React.useState([]);

  function handleSubmit(item) {
    setItems((prevValue) => {
      return [...prevValue, item];
    });
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((_, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea handleSubmit={handleSubmit} />
      {items.map((it, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={it.title}
            content={it.content}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
