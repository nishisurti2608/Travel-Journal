import Entry from "./Entry";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import data from "./data";

console.log(data);

const Main = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setEntries(data); // Simulate API call delay
    }, 5000);
  }, []);

  return (
    <div className="mr-10 ml-10 mt-10">
      {entries.length === 0
        ? [...Array(3)].map((_, index) => <Shimmer key={index} />)
        : entries.map((entry) => <Entry key={entry.id} {...entry} />)}
    </div>
  );
};

export default Main;
