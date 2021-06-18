import React from "react";
import { Button } from "@material-ui/core";

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className="f3">{"This is a Magic!"}</p>
      <p>give it a try ..</p>
      <div>
        <div className="pa4 br3 shadow-1 w-80 center">
          <input type="text" className=" w-80" onChange={onInputChange} />
          <Button onClick={onSubmit} variant="contained" color="primary">
            Detect
          </Button>
          {/* <button
            className="pointer grow link dib white bg-light-purple"
            onClick={onSubmit}
          >
            Detect
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
