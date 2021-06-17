import React, { useState } from "react";
import "./App.css";

import Particles from "react-particles-js";
import Clarifai from "clarifai";

import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Rank from "./components/Rank/Rank.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import CalculateFaceLocation from "./components/CalculateFaceLocation/CalculateFaceLocation";

import particlesOptions from "./components/ParticlesOptions/ParticlesOptions";

const app = new Clarifai.App({
  apiKey: "dc2a8c7fd1ad4e088124cef04dd2a028",
});

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});

  const displayFaceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);

    //Todo make setImageUrl working onButtonSubmit
    setImageUrl(event.target.value);
  };

  const onSubmit = () => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => displayFaceBox(CalculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition imageUrl={imageUrl} box={box} />
    </div>
  );
}

export default App;
