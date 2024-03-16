import "./App.css";

import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaArrowDown,
} from "react-icons/fa";

function App() {
  return (
    <>
      <main>
        <section className="address">
          <p>
            contact address: <b>A6rSPi9JmJgVkW6BatsA6MjFYLseizPM2Fnt92coFjf4</b>
          </p>
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "A6rSPi9JmJgVkW6BatsA6MjFYLseizPM2Fnt92coFjf4"
              )
            }
          >
            copy
          </button>
        </section>

        <section className="audio">
          <audio controls>
            <source src="conmagaibameestayendobien.mp3" type="audio/ogg" />
            Your browser does not support the audio element.
          </audio>
        </section>

        <section className="links">
          <a href="https://t.me/magaibasogentle" target="_blank">
            <FaTelegram color="yellow" fontSize={30} />
          </a>
          <a href="https://x.com/magaibasogentle" target="_blank">
            <FaTwitter color="yellow" fontSize={30} />
          </a>
          <a href="https://youtube.com/@magaibasogentle" target="_blank">
            <FaYoutube color="yellow" fontSize={30} />
          </a>
          <a href="https://discord.gg/2BCnEmmY" target="_blank">
            <FaDiscord color="yellow" fontSize={30} />
          </a>
          <a href="https://instagra.com/magaibasogentle" target="_blank">
            <FaInstagram color="yellow" fontSize={30} />
          </a>
        </section>
        <section className="whitepaper">
          <a href="whitepaper.pdf" target="_blank">
            <span>Read Whitepaper</span>
          </a>
        </section>
        <img
          className="super-magaiba"
          src="magaiba-transparent-upscale.png"
          alt="magaiba so gentle, magaiba so good"
        />
        <img
          className="birthday-magaiba"
          src="birthday.png"
          alt="magaiba birthday so gentle"
        />
        <div className="title">
          <h1>$MAGAIBA</h1>
          <h2>so gentle, so good!</h2>
        </div>
        <FaArrowDown
          style={{
            position: "absolute",
            bottom: 20,
            color: "white",
            fontSize: "2em",
          }}
        />
      </main>
      <section className="video">
        <p>con magaiba con magaiba me esta yendo bien</p>
        <video loop muted autoPlay>
          <source src="dance1.mp4" type="video/mp4" />
        </video>
      </section>
    </>
  );
}

export default App;
