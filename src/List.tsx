import { AiFillEye, AiOutlineEyeInvisible } from "react-icons/ai";

interface Word {
  id: number;
  spanish: string;
  japanese: string;
  hiragana: string;
  stress: number;
}
interface Props {
  selected: "jts" | "stj" | "list";
  showedWord: number;
  data: any[];
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}
const List = ({ selected, showedWord, data, show, setShow }: Props) => {
  if (selected === "jts") {
    return (
      <section>
        <ul>
          {data.map((word) => {
            let position: "actualWord" | "previousWord" | "nextWord" | "";
            if (showedWord === word.id) {
              position = "actualWord";
            } else if (showedWord + 1 <= word.id) {
              position = "nextWord";
            } else {
              position = "previousWord";
            }
            return (
              <li className={`word ${position}`} key={word.id}>
                <div className="leftDiv japanese">
                  <p>{word.japanese}</p>
                </div>
                <div className="rightDiv">
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="visibility"
                  >
                    {show ? <AiOutlineEyeInvisible /> : <AiFillEye />}
                  </button>
                  <div className={`info ${show ? "show" : ""}`}>
                    <p>{word.hiragana}</p>
                    <p>{word.spanish}</p>
                    <p>{word.stress}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else if (selected === "stj") {
    return (
      <section>
        <ul>
          {data.map((word) => {
            let position: "actualWord" | "previousWord" | "nextWord" | "";
            if (showedWord === word.id) {
              position = "actualWord";
            } else if (showedWord + 1 <= word.id) {
              position = "nextWord";
            } else {
              position = "previousWord";
            }
            return (
              <li className={`word ${position}`} key={word.id}>
                <div className="leftDiv">
                  <p>{word.spanish}</p>
                </div>
                <div className="rightDiv">
                  <button
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="visibility"
                  >
                    {show ? <AiOutlineEyeInvisible /> : <AiFillEye />}
                  </button>
                  <div className={`info ${show ? "show" : ""}`}>
                    <p>{word.japanese}</p>
                    <p>{word.hiragana}</p>
                    <p>{word.stress}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else {
    return (
      <section>
        <ul className="table">
          <li className="row">
            <p>N°</p>
            <p>Spanish</p>
            <p>Japanese</p>
            <p>Hiragana</p>
            <p>Stress</p>
          </li>
          {data.map((word) => (
            <li className="row" key={word.id}>
              <p>{word.id}</p>
              <p>{word.spanish}</p>
              <p>{word.japanese}</p>
              <p>{word.hiragana}</p>
              <p>{word.stress}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
};

export default List;
