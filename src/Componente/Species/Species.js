import { useEffect } from "react";

const Species = (props) => {
  useEffect(() => {
    props.handleSearch("species", props.match.params.id);
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
          <h1>{props.data.name}</h1>
          <li>Average Height: {props.data.average_height}</li>
          <li>Language: {props.data.language}</li>
          <li>Average Lifespan: {props.data.average_lifespan}</li>
        </ul>
      )}
    </div>
  );
};

export default Species;