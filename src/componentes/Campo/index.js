import './campo.css'

const Campo = ({ label, placeholder, valor, aoAlterado, obrigatorio = false, type='text' }) => {
    return (<div className={`campo campo-${type}`}>
        <label>{label}</label>
        <input 
            value={valor} 
            onChange={evento => aoAlterado(evento.target.value)} 
            required={obrigatorio} 
            placeholder={placeholder}
            type={type}
        /> 
    </div>)
}

export default Campo