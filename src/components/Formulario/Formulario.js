import "./Formulario.css"

const Formulario = () => {
    return (  
        <div className="cont-formulario">
            <p></p>
            <form className="formulario">
                <div>
                    <input type="text" placeholder="Jugador 1"/>
                    <input type="text" placeholder="Jugador 2"/>
                </div>
                <button>Iniciar</button>
            </form>
        </div>
    );
}
 


export default Formulario;