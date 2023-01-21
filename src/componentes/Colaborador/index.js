import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)}
        />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={colaborador.img} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito 
                        ? <AiFillHeart {...propsFavorito} color='#FF0000'/> 
                        : <AiOutlineHeart {...propsFavorito}/>}
                </div>
            </div>
        </div>
    )
}

export default Colaborador;