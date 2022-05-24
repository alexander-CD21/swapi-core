import { useEffect } from "react";

const Planets = (props) => {
  useEffect(() => {
    props.handleSearch("planets", props.match.params.id);
  }, [props.match.params.id]);

  return (
    <div className="my-5 border-1 border-black rounded-lg w-full">
      {props.data === "Not found" && (
        <p className="text-red-500 font-bold">
          These aren't the Droids you're looking for...
          <img
            src="https://www.meme-arsenal.com/memes/52577612a290566287f2273992fa918e.jpg"
            alt="Obi Wan"
          />
        </p>
      )}
      {props.data && (
        <ul>
          <h1> {props.data.name}</h1>
          <li>Climate: {props.data.climate}</li>
          <li>Diameter: {props.data.dimater}</li>
          <li>Gravity: {props.data.gravity}</li>
        </ul>
      )}
    </div>
  );
};

export default Planets;