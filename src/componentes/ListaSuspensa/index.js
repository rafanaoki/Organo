import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={aoDigitado} required={props.obrigatorio} value={props.valor}>
                <option value=''>Escolha seu Time</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa