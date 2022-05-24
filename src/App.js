
import { useState,useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter , Route,Switch,withRouter } from "react-router-dom";
import BarraDeBusqueda from './Componente/BarraDeBusqueda/BarraDeBusqueda';
import People from './Componente/People/People';
import Planets from './Componente/Planets/Planets';
import Spaceships from'./Componente/Spaceships/Spaceships';
import Vehicles from './Componente/Vehicles/Vehicles';
import Films from './Componente/Films/Films';
import Species from './Componente/Species/Species';


function App(props) {

  const [data, setData] = useState("");
  
  //el useCallBack es un hook que duelve una funcion cada vez que cambia una variable o cuando se renderiza por primera vez 
  
  const handleSearch = (category,id) => {

      axios.get(`https://swapi.dev/api/${category}/${id}/`)
        .then((response) => {
          setData(response.data);
          console.log(data);
        })
        .catch((err) => setData("Not found"));
    }
  
  
  

  return (
    <div>
      <BarraDeBusqueda />
      <Switch>
        <Route path="/people/:id" render={(reactProps) => <People handleSearch={handleSearch} data={data} {...reactProps}/>}/>
        <Route path="/planets/:id" render={(reactProps) => <Planets handleSearch={handleSearch} data={data} {...reactProps}/>}/>
        <Route path="/spaceships/:id" render={(reactProps) => <Spaceships handleSearch={handleSearch} data={data} {...reactProps}/>}/>
        <Route path="/vehicles/:id" render={(reactProps) => <Vehicles handleSearch={handleSearch}  data={data} {...reactProps}/>}/>
        <Route path="/films/:id" render={(reactProps) => <Films handleSearch={handleSearch} data={data} {...reactProps}/>}/>
        <Route path="/species/:id" render={(reactProps) => <Species handleSearch={handleSearch} data={data} {...reactProps}/>}/>
      </Switch>

    </div>
  );
}

export default withRouter(App);
