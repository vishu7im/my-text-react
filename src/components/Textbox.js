 my-2
import React, { useState } from "react";

export default function Textbox(props) {
  // uppercase js
  const upperclick = () => {
    // console.log("button clicked ");
    let newtext = input.toUpperCase();
    update(newtext);
    props.Alert("Text is in UpperCase ","success")
  };

  //   lower case js
  const lowerclick = () => {
    // console.log("button clicked ");
    let newtext = input.toLowerCase();
    update(newtext);
    props.Alert("Text is in LowerCase ","success")
  };

  //   capitalclick js
  const capitalclick = () => {
    // console.log("button clicked ");

    let titleCase = input.toLowerCase();
    let lowertitlecase = titleCase.split(" ");

    let captaltitlecase = lowertitlecase.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    let final = captaltitlecase.join(" ");

    update(final);
    props.Alert("Text is Captalised ","success")
  };

  //   clear text  js
  const cleartext = () => {
    // console.log("button clicked ");
    update("");
    props.Alert("Text is Clear ","success")
  };

  //   invers text  js
  const inverseText = () => {
    // console.log("button clicked ");
    var splitString = input.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");

    props.Alert("Text is inverse ","success")

    update(joinArray);
  };
  //   copy  text  js
  const copyText = () => {
    // console.log("button clicked ");
navigator.clipboard.writeText(input)
props.Alert("Text is copy ","success")

  };

  const changevalue = (event) => {
    update(event.target.value);
  };
  const [input, update] = useState("");
  return (
    <>
    <div style={{margin:'60px 0px',height:'1px'}}>
      <div className={`container`}>
        <h1 className="my-4" style={{color:props.Darkmod==="light"?"black":"white",}}>{props.heading}</h1>
        <textarea
        style={{color:props.Darkmod==="light"?"black":"white",
                backgroundColor:props.Darkmod==="light"?"white":"#767272"}}
          className="form-control my-4"
          placeholder="Enter text here"
          value={input}
          onChange={changevalue}
          id="mybox"
          cols="30"
          rows="10"
        ></textarea>
        <button className={`"btn btn-${props.Darkmod==="light"?"secondary":"info"} mx-2 my-2`} onClick={upperclick} style={{color:props.Darkmod==="light"?"black":"white"}}>
          Upercase
        </button>
        <button className={`"btn btn-${props.Darkmod==="light"?"secondary":"info"} mx-2 my-2`} onClick={lowerclick} style={{color:props.Darkmod==="light"?"black":"white"}}>
          Lowercase
        </button>
        <button className={`"btn btn-${props.Darkmod==="light"?"secondary":"info"} mx-2 my-2`} onClick={capitalclick} style={{color:props.Darkmod==="light"?"black":"white"}}>
          Capitalcase
        </button>
        <button className={`"btn btn-${props.Darkmod==="light"?"secondary":"info"} mx-2 my-2`} onClick={cleartext} style={{color:props.Darkmod==="light"?"black":"white"}}>
          Clear
        </button>
        <button className={`"btn btn-${props.Darkmod==="light"?"secondary":"info"} mx-2 my-2`} onClick={inverseText} style={{color:props.Darkmod==="light"?"black":"white"}}>
          invers
        </button>
        <button className={`"btn btn-${props.Darkmod==="light"?"secondary":"info"} mx-2`} onClick={copyText} style={{color:props.Darkmod==="light"?"black":"white"}}>
          copy
        </button>
      </div>
    <div className={`container my-4 text-${props.Darkmod==="light"?"dark":"light"} `}>
        <div className="container">
          <h2 className="my-2">Text Summary</h2>
          <span>
            {input.split(" ").length} Words , {input.length} Chracter
          </span>
          <h2 className="my-2">Preview</h2>
          <p>{input.length===0?"Enter somthing for preview":input}</p>
        </div>
      </div>
      </div>
    </>
  );
}
