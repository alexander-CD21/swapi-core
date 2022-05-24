import { useEffect } from "react";

const Films = (props) => {
  useEffect(() => {
    props.handleSearch("films",props.match.params.id);
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
          <h1> {props.data.title}</h1>
          <li>Episode#: {props.data.episode_id}</li>
          <li>Director: {props.data.director}</li>
          <li>Release Date: {props.data.release_date}</li>
        </ul>
      )}
    </div>
  );
};

export default Films;