import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var musics = {
    Hindi: [
      {
        name: "Maan Meri Jaan",
        artist: "By King",
        rating: "9.8/10",
        link:
          "https://music.youtube.com/watch?v=_9FyH8PmRSU&list=RDAMVM_9FyH8PmRSU"
      },
      {
        name: "Mera Safar",
        artist: "By Iqlipse Nova",
        rating: "9.75/10",
        link:
          "https://music.youtube.com/watch?v=9I66ynpkdrw&list=RDAMVM_9FyH8PmRSU"
      },
      {
        name: "Tu Aake Dekhle",
        artist: "By King",
        rating: "9.68/10",
        link:
          "https://music.youtube.com/watch?v=3jsGQczuplw&list=RDAMVM_9FyH8PmRSU"
      },
      {
        name: "Laree Choote",
        artist: "By The Bassicks and Kartik Chandna",
        rating: "9.56/10",
        link:
          "https://music.youtube.com/watch?v=MD2hZARSDq4&list=RDAMVM_9FyH8PmRSU"
      },
      {
        name: "Sakhiyan 2.0",
        artist: "By Maninder Buttar and Zara Khan",
        rating: "9.45/10",
        link: "https://music.youtube.com/watch?v=Q_FKqShcFS8"
      },
      {
        name: "Chidiya",
        artist: "By Vilen",
        rating: "9.2/10",
        link:
          "https://music.youtube.com/watch?v=FvrYLmyTuto&list=RDAMVM_9FyH8PmRSU"
      },
      {
        name: "Tutta Pull Wahan",
        artist: "By Deepak Rathore",
        rating: "9.05/10",
        link:
          "https://music.youtube.com/watch?v=PJXi5zRX7OQ&list=RDAMVM_9FyH8PmRSU"
      },
      {
        name: "Bandeya Rey Bandeya",
        artist: "By Asees kaur and Arjit Singh",
        rating: "9.35/10",
        link:
          "https://music.youtube.com/watch?v=8Qjl9zIaxrE&list=RDAMVM_9FyH8PmRSU"
      },
      {
        name: "Befikar",
        artist: "By Tanzeel Khan",
        rating: "9.2/10",
        link:
          "https://music.youtube.com/watch?v=01otGN_Qo1M&list=RDAMVM_9FyH8PmRSU"
      }
    ],
    English: [
      {
        name: "Something Just Like This ",
        artist: "By The Chainsomkers and Coldplay",
        rating: "9.3/10",
        link:
          "https://music.youtube.com/watch?v=owTWCbq_nSk&list=RDAMVMTh4_KQAR3vg"
      },
      {
        name: "Pretty Girl",
        artist: "By Maggie Lindemann",
        rating: "9.4/10",
        link: "https://music.youtube.com/watch?v=Th4_KQAR3vg"
      },
      {
        name: "Cheap Thrills",
        artist: "By Sia ",
        rating: "9.15/10",
        link:
          "https://music.youtube.com/watch?v=AUfALRGInd4&list=RDAMVMTh4_KQAR3vg"
      },
      {
        name: "Dreamers",
        artist: "By Jung Kook",
        rating: "9.5/10",
        link:
          "https://music.youtube.com/playlist?list=OLAK5uy_lWXkvUNAVEY0Fj22_wcrDSzU_8HtW9j04"
      },
      {
        name: "Memories",
        artist: "By Maroon 5",
        rating: "9.15/10",
        link:
          "https://music.youtube.com/watch?v=lNilb-EaTOU&list=RDAMVMTh4_KQAR3vg"
      }
    ],

    Mashups: [
      {
        name: "Mashup 1",
        artist: "",
        rating: "9.4/10",
        link: "https://music.youtube.com/watch?v=CRzCAz6ZrTo"
      },
      {
        name: "Mashup 2",
        artist: "",
        rating: "9.17/10",
        link: "https://music.youtube.com/watch?v=FPJtc2MVOx8"
      },
      {
        name: "Mashup 3",
        artist: "",
        rating: "9.6/10",
        link:
          "https://music.youtube.com/watch?v=qbwUpT-gFC0&list=RDAMVMFPJtc2MVOx8"
      },
      {
        name: "Mashup 4",
        artist: "",
        rating: "9.2/10",
        link: "https://music.youtube.com/watch?v=HMrnEcMaf2w"
      }
    ]
  };

  var [selectedButton, setSelectedButton] = useState("Hindi");
  var [list, setList] = useState(musics.Hindi);

  function clickListner(music) {
    setSelectedButton(music);
    var selectedList = musics[music];
    setList(selectedList);
  }

  var genresArray = Object.keys(musics);

  return (
    <div className="App">
      <h1 class="header">Music Recommendations</h1>
      <h3 class="intro">
        Checkout my favourite music. Select a genre to get started
      </h3>
      <div>
        {genresArray.map(function buttonMaker(music) {
          return (
            <button
              className={
                selectedButton === music ? "buttons selected" : "buttons"
              }
              onClick={() => clickListner(music)}
            >
              {music}
            </button>
          );
        })}
      </div>
      <div>
        {list.map(function listPrinter(music) {
          return (
            <li className="list-container">
              <div className="music-title">{music.name}</div>
              <div className="one-music-block">{music.rating}</div>
              <div className="one-music-block">{music.artist}</div>
              <div className="one-music-block">
                <a class="link link-primary" href={music.link} link="">
                  Listen Here
                </a>
              </div>
            </li>
          );
        })}
      </div>
      <h3 className="closing-line">
        Note: The link given to listen the music will redirect you to YouTube
        Music.
      </h3>
      <footer class="footer container">
        <div class="footer-header">Social Media Presence</div>
        <ul class="social-links list-non-bullet">
          <li class="list-item-inline">
            <a href="https://github.com/akshaykamath45" class="link">
              GitHub
            </a>
          </li>
          <li class="list-item-inline">
            <a href="https://twitter.com/akshaykamath_45" class="link">
              Twitter
            </a>
          </li>
          <li class="list-item-inline">
            <a href="https://www.linkedin.com/in/akshaykamath45/" class="link">
              LinkedIn
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
