import {useState} from "react";

export const checkInputs = (list,setList) =>{
    list.map((input,i) => {
        if(input.value !== "" && input.changed ===false){
            setList([...list.slice(0,i+1),{id:i+1,value:"",changed: false}].map((thisInput,index) => {
                if(i === index){
                    return {
                        ...thisInput,
                        changed:true
                    }
                }
                else {
                    return thisInput
                }
            }))
        } else if(input.value === "" && input.changed === true){
            setList(list.filter((input) => {
                return (input.changed === false) || (input.value !== "")
            }))
        }
    })
}
export const changeValue = (list,setList,i,event) => {
    setList(list.map((input,index) => {
        if(i === index){
            return {
                ...input,
                value:event.target.value,
            }
        } else {
            return input
        }
    }))
}
