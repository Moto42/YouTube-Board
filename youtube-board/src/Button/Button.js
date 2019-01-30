import React from 'react';

//A function that does nothing, used as the default for when no action is provided,
//or if the action provided is not a function.
function nullFunc() {return};

function Button(props){
  const action     =  typeof props.action === "function" ? props.action : nullFunc ;
  const className  =  typeof props.class  === "string"   ? `button ${props.class}`  : "" ;

  return (
    <div className={className} onClick={action}>
      {props.children}
    </div>
  );
}

export default Button;
