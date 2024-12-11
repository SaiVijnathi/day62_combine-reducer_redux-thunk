import { useRef } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let inputRef = useRef();
  let dispatch = useDispatch();

  let actors = useSelector((state) => state.actorsReducer.actors);
  let cricketers = useSelector((state) => state.cricketersReducer.cricketers);
  let politicians = useSelector((state) => state.politiciansReducer.politicians);

  let addPolitician =()=>{
    return ()=>{
      dispatch({type:"addPolitician",data:inputRef.current.value});
    }
  }


  return (
    <div className="App">
    <input ref={inputRef}></input>      
    <button onClick={()=>{
      dispatch({type:"addActor", data:inputRef.current.value});
    }}>Add actor</button>

    <button  onClick={()=>{
      dispatch({type:"addCricketer", data:inputRef.current.value});
    }}>Add cricketer</button>

    <button  onClick={()=>{
      dispatch({type:"addPolitician", data:inputRef.current.value});
    }}>Add politician</button>

    <button  onClick={()=>{
      dispatch(addPolitician());
    }}>Add politician through thunk</button>


    <hr/>

    <h2>Actors: {actors.join()}</h2>
    <h2>Cricketers: {cricketers.join()}</h2>
    <h2>Politicians: {politicians.join()}</h2>


    </div>
  );
}

export default App;
