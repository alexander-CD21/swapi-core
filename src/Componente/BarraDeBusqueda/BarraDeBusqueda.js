
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Route ,Link} from "react-router-dom";
import { withRouter } from "react-router-dom";

  
  
  const BarraDeBusqueda = (props) => {
    const [inputs, setInputs] = useState({ category: "", id: "" });

    const handleChange = (event) => {
      setInputs({ ...inputs, [event.target.name]: event.target.value });
    };
  

    const handleSubmit = (event, inputs) => {
      event.preventDefault();
      if( inputs.category=="" && inputs.id==""){
        return props.history.push( "/");

      }else {
          props.history.push( `/${inputs.category}/${inputs.id}`);
          setInputs({ category: "", id: ""});
        }
      
    };
  
    return (
      <div>
        <form  onSubmit={(event) => handleSubmit(event, inputs)}>
            <label>
                Search for:
                <select value={inputs.category} onChange={handleChange} label="Search for.." name={"category"}>
                    <option value={"vacio"}> Elija una opcion </option>
                    <option value={"people"}>People</option>
                    <option value={"planets"}>planets</option>
                    <option value={"spaceships"}>spaceships</option>
                    <option value={"vehicles"}>vehicles</option>
                    <option value={"films"}>films</option>
                    <option value={"species"}>species</option>
                </select>
            </label>
            <label>
              Id
            </label>
            <input type="text" name="id" value={inputs.id} onChange={handleChange}/>
            <button variant="contained" type="submit">
                Search
            </button>
        </form>
        <div>
        
        </div>
      </div>
        
    );
  };
  export default withRouter(BarraDeBusqueda);
  