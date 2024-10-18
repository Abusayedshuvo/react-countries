import { useState } from "react";
import "./Country.css";
const Country = ({ country }) => {
  const { name, flags } = country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h4 className="mb-5">Name: {name.common}</h4>
      <img src={flags.png} alt="" />
      <br />
      <button className="border px-5 py-2" onClick={handleVisited}>
        {" "}
        {visited ? "Visited" : "Going"}{" "}
      </button>
      {visited ? (
        <p> I have visited this country</p>
      ) : (
        <p> I want visit this country</p>
      )}
    </div>
  );
};

export default Country;
