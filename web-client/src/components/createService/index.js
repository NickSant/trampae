import React from "react";

function createService() {
  return (
    <container>
      <div className="form-wrapper">
        <form>
          <input placeholder="Título do Bico" />
          <select className="categories" placeholder="Categoria">
            <option>Selecione a Categoria</option>
            <option>2</option>
            <option>3</option>
          </select>
          <textarea className="alinha" placeholder="Descrição" />
          
          <button className="button">Cadastar</button>
        </form>
      </div>
    </container>
  );
}

export default createService;
