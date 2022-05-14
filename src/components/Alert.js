import React from "react";

export default function Alert(props) {
  const alertstyle ={position:"absolute",
  width:"100%"}
  return (
    props.Alert &&<>
      <div className={`alert alert-${props.Alert.type}`} style={alertstyle} role="alert">
       <span>  <b>{props.Alert.type} </b> : {props.Alert.msg} </span>
      </div>
    </>
  );
}
