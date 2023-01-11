import "./GameOver.css";

export const GameOver = ({ retry, score }) => {
  return (
    <div className="gameover">
      <h1>Fim do Jogo!</h1>
      <h2>
        A sua Pontuação foi: <span>{score}</span>!
      </h2>
      <button onClick={retry}>Reiniciar</button>
    </div>
  );
};
