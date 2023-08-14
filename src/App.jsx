import { useState } from "react";

import Form from "./Form";
import ColorList from "./ColorList";

// Get tints and shades of a CSS color
// Tints are light values that are made by mixing a color with white, which increases lightness
// Shades are dark values that are made by mixing a color with black, which reduces lightness
import Values from "values.js";

// displaying notifications (toasts)
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  // state
  const [arrColor, setArrColor] = useState(new Values("#1234ab").all(10));
  // console.log(arrColor);

  // 此 function 用來檢查 user 手動輸入的格式是否正確
  const addColor = (color) => {
    try {
      // return arr of colors
      // all(10) => 是指 tint & base 幾 % 就要顯示一個
      // 這邊總共會有 10 tints & base & 10 shades
      const newColor = new Values(color).all(10);
      setArrColor(newColor);
    } catch (err) {
      // 當 user 手動輸入的 hex 格式不正確時
      // console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList arrColor={arrColor} />
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
