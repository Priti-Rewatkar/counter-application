import { useSelector, useDispatch } from "react-redux";
import {DecCounter,IncCounter  } from "../action";
import './index.css'


const DisplayCounter =()=> {

  const Counter = useSelector((store) => store.ChangeTheCounter);
  const dispatch = useDispatch();
  return (

    <div className="App">
      <h1>Counter Application</h1>
      <br></br>

      <h1>{Counter}</h1>
      <br></br>
      <div className="button">
        <button onClick={() => { dispatch(DecCounter()) }} className='btn btn-danger' >Dec</button>

        <button onClick={() => { dispatch(IncCounter()) }} className='btn btn-success '>Inc</button>
      </div>
    </div>
  );
};
export default DisplayCounter;