import React, { useState } from "react";
import Particles from "react-particles-js";
import particlesOptions from "./components/ParticlesOptions/ParticlesOptions";
import Clarifai from "clarifai";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import SigninForm from "./components/SigninForm/SigninForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Rank from "./components/Rank/Rank.js";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import CalculateFaceLocation from "./components/CalculateFaceLocation/CalculateFaceLocation";
import { apiKey } from "./constants";
import "./App.css";

const app = new Clarifai.App(
  // {apiKey: "remove {apiKey} and your apiKey here " }
  { apiKey }
);

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
      <SigninForm />
      <SignUpForm />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition imageUrl={imageUrl} box={box} />
    </div>
  );
}

export default App;
