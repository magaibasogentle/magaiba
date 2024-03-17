import "./App.css";

import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaYoutube,
  FaArrowDown,
  FaTiktok,
} from "react-icons/fa";

import { TokenDistribution } from "./components/TokenDistribution";

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
          <a
            href="https://www.youtube.com/@magaibasogentle/streams"
            target="_blank"
          >
            <FaYoutube color="yellow" fontSize={30} />
          </a>
          <a href="https://discord.gg/K4NAjhQs" target="_blank">
            <FaDiscord color="yellow" fontSize={30} />
          </a>
          <a href="https://instagram.com/magaibasogentle" target="_blank">
            <FaInstagram color="yellow" fontSize={30} />
          </a>
          <a href="https://www.tiktok.com/@magaibasogentle" target="_blank">
            <FaTiktok color="yellow" fontSize={30} />
          </a>
        </section>

        <section className="whitepaper">
          <a href="whitepaper.pdf" target="_blank">
            <span>read whitepaper</span>
          </a>
          <TokenDistribution />
        </section>

        <img
          className="birthday-magaiba"
          src="birthday.png"
          alt="magaiba birthday so gentle"
        />

        <section className="community-links">
          <b>community so gentle:</b>
          <ul>
            <li>
              <a
                href="https://www.youtube.com/watch?v=EBW2yM0VLqo "
                target="_blank"
              >
                👉 radio magaiba
              </a>
            </li>
            <li>
              <a href="https://sogentle.net" target="_blank">
                👉 get your random magaiba meme
              </a>
            </li>
            <li>
              <a href="https://sogentle.net/maker" target="_blank">
                👉 magaiba meme maker
              </a>
            </li>
            <li>
              <a
                href="https://zcensored.github.io/magaiba-game/"
                target="_blank"
              >
                👉 magaiba jump game
              </a>
            </li>
            <li>
              <a href="https://magaibabird.fly.dev/" target="_blank">
                👉 magaiba fly game
              </a>
            </li>
          </ul>
        </section>

        <div className="title">
          <h1>$MAGAIBA</h1>
          <h2>so gentle, so good!</h2>
          <div className="ctas">
            <b>GET MAGAIBA:</b>
            <div>
              <a
                href="https://dexscreener.com/solana/5pxvyeqa7iwfuxcypuiqpdjztafnc8x5s3x3tddmptoa?maker=GufSRJrwUL6StF9Tux4MVEiTkDquUpPG8B8TKQm6DqKY"
                target="_blank"
              >
                <button>DEX</button>
              </a>
              <a
                href="https://jup.ag/swap/SOL-MAGAIBA_A6rSPi9JmJgVkW6BatsA6MjFYLseizPM2Fnt92coFjf4"
                target="_blank"
              >
                <button>JUP</button>
              </a>
              <a
                href="https://trade.ripio.com/market/market-out?pairCode=MAGAIBAUXD"
                target="_blank"
              >
                <button>RIPIO</button>
              </a>
            </div>
          </div>
        </div>

        <img
          className="super-magaiba"
          src="magaiba-transparent-upscale.png"
          alt="magaiba so gentle, magaiba so good"
        />

        <FaArrowDown
          className="arrow"
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
