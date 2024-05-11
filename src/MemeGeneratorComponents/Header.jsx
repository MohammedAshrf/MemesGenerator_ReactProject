import troll_face from "../../public/MemesImages/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={troll_face} />
      <h2>Meme Generator</h2>
      <h4>React Course - Project 3</h4>
    </header>
  );
}
