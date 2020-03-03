import React, { useState } from 'react';
import './style.css';
// import Input from './Input';

const Col_Block = color => <div className={color}_square />;

const Core = () => {
    //put state here
    let x = [];
    const [state, setState] = useState({
        colList : [],
        boxVal : "",

    })
    const submitHandler = (e) => {
        e.preventDefault();
        state.colList.push(state.boxVal+"_square");
        setState({...state});
        console.log(state.colList);
    }
    const changeHandler = (e) => {
        setState ({
            ...state,
            boxVal: e.target.value
        });
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={changeHandler}/>
                <button>Submit</button>
            </form>
            {
                state.colList.map((color, i) => 
                    <div key={i} className={color}></div>
                )
            
        }
            
        </div>
    );
}
export default Core;
// example style={{marginRight: spacing + 'em'}}