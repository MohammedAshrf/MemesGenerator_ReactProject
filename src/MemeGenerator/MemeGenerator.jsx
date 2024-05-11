import Header from "../MemeGeneratorComponents/Header";
import Meme from "../MemeGeneratorComponents/Meme";
import "./MemeGenerator.css";

export default function MemeGenerator() {
  return (
    <div className="meme-generator">
      <Header />
      <Meme />
    </div>
  );
}
