import "./colaborador.css";
import { AiFillCloseCircle, AiFillStar, AiOutlineStar } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsFavorito = {
    size: 24,
    onClick: favoritar,
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={24}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.id} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillStar color="#FFE102" {...propsFavorito} />
          ) : (
            <AiOutlineStar {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
