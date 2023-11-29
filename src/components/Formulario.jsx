export default function Formulario({adicionarAnimal}) {
    return (
        <>
            <section className="formulario">
                <button type="button" className="btn btn-primary abrirModal" data-bs-toggle="modal" data-bs-target="#exampleModal">Cadastrar animal</button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastre seu animal</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <form className="form" onSubmit={(event) => {
                                    event.preventDefault()
                                    const URL = event.target.URL.value
                                    const Raça = event.target.Raça.value
                                    const Local = event.target.Local.value
                                    const Status = event.target.Status.value
                                    adicionarAnimal({URL, Raça, Local, Status})
                                    event.target.reset()
                                    event.target.URL.focus()
                                }}>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="URL" >URL</label>
                                        <input type="text" id="URL" className="form-control" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="Raça">Raça</label>
                                        <input type="text" id="Raça" className="form-control" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="Local">Local</label>
                                        <input type="text" id="Local" className="form-control" required/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="col-form-label" htmlFor="Status">Status</label>
                                        <select id="Status" className="form-select" required>
                                            <option value="Perdido">Perdido</option>
                                            <option value="Encontrado">Encontrado</option>
                                        </select>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                                        <button type="submit" className="btn btn-primary">Enviar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}