export function ContactForm() {
    return (
    <div className="container-fluid">
        <div className="row justify-content-around"> 
            <div className="col-4 form-group">
                <form action="" name="contact" method="post">

                        <fieldset className="row mt-3">
                            <div className="col">
                                <label for="nome">Nome</label>
                                <input className="form-control" type="text" id="nome" name="nome" required/>
                            </div>
                            <div className="col">
                                <label for="snome">Sobrenome</label>
                                <input className="form-control" type="text" id="snome" name="snome" required/>
                            </div>
                        </fieldset>	

                            <div className="field mt-3">
                            <label>Sexo</label>
                            <div className="form-check form-check-inline">
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label checkbox">
                                        <input type="radio" name="sexo" value="masculino" checked /> Masculino
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input type="radio" name="sexo" value="feminino" /> Feminino
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label className="form-check-label">
                                        <input type="radio" name="sexo" value="outro" /> Outro
                                    </label>
                                </div>
                            </div>
                            </div>

                        <div className="row mt-3">
                            <div className="col">
                                <label for="email">E-mail</label>
                                <input className="form-control" type="text" id="email" name="email" required/>
                                <small id="emailHelp" className="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
                            </div>
                            <div className="col">
                                <label for="telefone">Telefone</label>
                                <input className="form-control" type="text" id="telefone" name="telefone" required/>
                            </div>
                        </div>

                            <fieldset className="form-row mt-3">
                            <div className="form-group col">
                                <label for="cidade">Cidade</label>
                                <input className="form-control" type="text" id="cidade" name="cidade" required/>
                            </div>
                            <div className="form-group col">
                                <label for="estado">Estado</label>
                                <select className="form-control" name="estado">
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP" selected>São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>
                        </fieldset>
        
                        <div className="form-group">
                            <label for="mensagem">Mensagem</label>
                            <textarea className="form-control" name="mensagem" required></textarea>
                        </div>
        
                        <button className="btn btn-danger col-2 mt-3" type="submit" name="submit" value="Enviar">Enviar</button>
                     
                </form>
            </div>
           
            <div className="img-fluid col-4  d-sm-none d-md-block d-none d-sm-block d-md-none d-lg-block">
                <img classNameName="object-fit: cover" src={require(`./images/image-contact.jpeg`).default} width="100%" alt="Imagem de Contato" />
            </div>
    
        </div>
    </div>
    );
}