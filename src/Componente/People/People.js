import axios from "axios";
import { useEffect, useState } from "react";


const People = (props) => {
  const [world, setworld] = useState("");

  useEffect(() => {
    props.handleSearch("people", props.match.params.id);
    axios.get(`https://swapi.dev/api/planets/${props.match.params.id}/`).then((response) => {
      setworld(response.data.name);
    });
  }, [props.match.params.id]);

  return (
    <div >
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
          <li>Height: {props.data.height}</li>
          <li>Mass: {props.data.mass}</li>
          <li>Homeworld: {world}</li>
        </ul>
      )}
    </div>
    
  );
};

export default People;