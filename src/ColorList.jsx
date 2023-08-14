import SingleColor from "./SingleColor";
// provide unique id
import { nanoid } from "nanoid";

const ColorList = ({ arrColor }) => {
  return (
    <section className="colors">
      {arrColor.map((item, index) => {
        const id = nanoid();

        return <SingleColor key={id} item={item} index={index} />;
      })}
    </section>
  );
};

export default ColorList;
