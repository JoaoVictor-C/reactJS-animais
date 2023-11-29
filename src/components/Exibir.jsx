import PropTypes from 'prop-types';

export default function Exibir({animal, deletarAnimal, mudarStatus, index}) {
    return (
        <>
            <article className="animais">
                <img src={animal.URL} alt={animal.Raça} width={250}/>
                <div className='labels'><span>Raça</span>
                <p>{animal.Raça}</p></div>
                <div className='labels'><span>Local</span>
                <p>{animal.Local}</p></div>
                <div className='labels'><span>Status</span>
                <p>{animal.Status}</p></div>
                <div className="Actions">
                    <button className="btnDelete" onClick={
                        () => {
                            deletarAnimal(index)
                        }
                    }>Deletar</button>
                    <button className='btnStatus' style={{backgroundColor: animal.Status === 'Perdido' ? '#333' : '#00FF00', color: animal.Status === 'Perdido' ? '#fff' : '#000'}}
                    onClick={
                        () => {
                            mudarStatus(index)
                        }
                    }>{animal.Status}</button>
                </div>
            </article>   
        </>
    )
}

Exibir.propTypes = {
    animal: PropTypes.shape({
        URL: PropTypes.string.isRequired,
        Raça: PropTypes.string.isRequired,
        Local: PropTypes.string.isRequired,
        Status: PropTypes.string.isRequired
    }),
    deletarAnimal: PropTypes.func.isRequired,
    mudarStatus: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}