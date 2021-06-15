import React, { useState } from "react";
import "./App.css";

import Particles from "react-particles-js";
import Clarifai from "clarifai";

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";

import particlesOptions from "./components/ParticlesOptions/ParticlesOptions";

const app = new Clarifai.App({
  apiKey: "dc2a8c7fd1ad4e088124cef04dd2a028",
});

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
    setImageUrl(event.target.value);
  };

  const onButtonSubmit = (event) => {
    app.models.predict(Clarifai.FACE_DETECT_MODEL, input).then(
      function (response) {
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },

      function (err) {
        //
      }
    );
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onButtonSubmit} />
      <FaceRecognition imageUrl={imageUrl} />
    </div>
  );
}

export default App;
