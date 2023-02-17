import React from 'react';
import {changeValue} from "../Functions/functions";

function Input(props) {
    return (
        <div className="input-block">
            <input type="text" value={props.value} onChange={(e) => {
                changeValue(props.list,props.setList,props.index,e)
            }}/><span>{props.index+1}</span>
        </div>
    );
}

export default Input;