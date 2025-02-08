import Entry from "./Entry";
import data from "./data";

console.log(data);

const Main = () => {
  return (
    <div className="mr-10 ml-10 mt-10">
      {data.map((entry, id) => {
        return <Entry id={entry.id} {...entry} />;
      })}
    </div>
  );
};

export default Main;
