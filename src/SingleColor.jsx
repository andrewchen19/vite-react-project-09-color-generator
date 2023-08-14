import React from "react";
import { toast } from "react-toastify";

const SingleColor = ({ item, index }) => {
  const { weight, hex } = item;

  const isShade = index > 10;

  // event Handling
  const clickHandler = async () => {
    // check clipboard is access or not
    if (navigator.clipboard) {
      try {
        // return a Promise
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copied to clipboard");
      } catch (err) {
        toast.error("Failed to copy color to clipboard");
      }
    } else {
      toast.error("Clipboard access not available");
    }
  };

  return (
    <div
      className="color"
      style={{ backgroundColor: `#${hex}` }}
      onClick={clickHandler}
    >
      <p className={isShade ? "shade" : ""}>{weight}%</p>
      <p className={isShade ? "shade" : ""}>#{hex}</p>
    </div>
  );
};

export default SingleColor;
