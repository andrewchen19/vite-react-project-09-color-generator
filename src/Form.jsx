import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addColor }) => {
  // state
  const [color, setColor] = useState("");

  // event handler
  const submitHandler = (e) => {
    // prevent default action
    e.preventDefault();

    // console.log(color)

    // check for empty value
    if (!color) {
      toast.error("Please provide some values");
      return;
    }

    // add color to addColor function
    addColor(color);
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={submitHandler}>
        {/* 允許使用者選擇顏色 */}
        <input
          type="color"
          name="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="text"
          placeholder="#1234ab"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
