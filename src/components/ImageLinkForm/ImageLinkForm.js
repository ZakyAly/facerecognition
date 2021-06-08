import React from "react";

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">{"This is a Magic!"}</p>
      <p>give it a try ..</p>
      <div>
        <div className="pa4 br3 shadow-1 w-80 center">
          <input type="text" className=" w-80" />
          <button className="pointer grow link dib white bg-light-purple">
            Recognize
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
