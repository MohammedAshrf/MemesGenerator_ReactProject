import { useEffect, useState } from "react";
// import memesData from "../MemeGenerator/memesData";

export default function Meme() {
  const [memes, setmemes] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllImages(data.data.memes));
  }, []);

  function getMemeImage(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allImages.length);
    const url = allImages[randomNumber].url;
    setmemes((prevMemes) => ({
      ...prevMemes,
      randomImage: url,
    }));
  }

  function handlingChange(e) {
    const { name, value } = e.target;
    setmemes((prevMemes) => ({
      ...prevMemes,
      [name]: value,
    }));
  }

  return (
    <div className="mainMeme">
      <form className="form">
        <label>
          Top Text{" "}
          <input
            type="text"
            placeholder="Top text"
            className="form-input"
            onChange={handlingChange}
            value={memes.topText}
            name="topText"
          />
        </label>
        <label>
          Buttom Text{" "}
          <input
            type="text"
            placeholder="Bottom text"
            className="form-input"
            onChange={handlingChange}
            value={memes.bottomText}
            name="bottomText"
          />
        </label>
        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={memes.randomImage} className="meme-image" />
        <h2 className="meme-text top">{memes.topText}</h2>
        <h2 className="meme-text bottom">{memes.bottomText}</h2>
      </div>
    </div>
  );
}
