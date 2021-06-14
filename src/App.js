import React from "react";
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

const initialState = {
  input: "",
  imageUrl: "",
};

function App() {
  const onInputChange = (e) => {
    console.log(e.target.value);
  };

  const onSubmit = () => {
    console.log("clicked");
    app.models.predict("").then(
      function (response) {
        console.log(response);
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
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition />
    </div>
  );
}

export default App;
