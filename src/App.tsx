import { useCallback, useEffect, useState } from "react";
import "./App.css";
import List from "./List";
import data from "./utility";

// const data = [
//   {
//     id: 1,
//     spanish: "escuela intermedia pública",
//     japanese: "公立中学",
//     hiragana: "こうりつちゅうがく",
//     stress: 25,
//   },
//   {
//     id: 2,
//     spanish: "lluvia",
//     japanese: "雨",
//     hiragana: "あめ",
//     stress: 1,
//   },
//   {
//     id: 3,
//     spanish: "abrir al público",
//     japanese: "公開する",
//     hiragana: "こうかいする",
//     stress: 24,
//   },
// ];
const App = () => {
  const [selected, setSelected] = useState<"jts" | "stj" | "list">("jts");
  const [showedWord, setShowedWord] = useState<number>(2);
  const [show, setShow] = useState<boolean>(false);
  const increase = useCallback((): void => {
    if (showedWord === data.length) {
      setShowedWord(data.length);
    } else {
      setShowedWord(showedWord + 1);
      setShow(false);
    }
  }, [showedWord]);
  const decrease = useCallback((): void => {
    if (showedWord === 1) {
      setShowedWord(1);
    } else {
      setShowedWord(showedWord - 1);
      setShow(false);
    }
  }, [showedWord]);
  useEffect(() => {
    const keydown = (e: any): void => {
      if (e.key === "ArrowRight") {
        increase();
      } else if (e.key === "ArrowLeft") {
        decrease();
      } else if (e.key === " ") {
        setShow((prev) => !prev);
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
    };
  }, [decrease, increase]);

  return (
    <main>
      <header>
        <h1>JAPANESE WORD {showedWord}</h1>
      </header>
      <nav>
        <ul>
          <li
            onClick={() => setSelected("jts")}
            className={`${selected === "jts" ? "selected" : ""}`}
          >
            Japanese to Spanish
          </li>
          <li
            onClick={() => setSelected("stj")}
            className={`${selected === "stj" ? "selected" : ""}`}
          >
            Spanish to Japanese
          </li>
          <li
            onClick={() => setSelected("list")}
            className={`${selected === "list" ? "selected" : ""}`}
          >
            List
          </li>
        </ul>
      </nav>
      <List
        selected={selected}
        showedWord={showedWord}
        data={data}
        show={show}
        setShow={setShow}
      />
      <footer className={`${selected !== "list" ? "show" : ""}`}>
        <button
          onClick={() => {
            decrease();
          }}
        >
          Previous word
        </button>
        <button
          onClick={() => {
            increase();
          }}
        >
          Next word
        </button>
      </footer>
    </main>
  );
};

export default App;
