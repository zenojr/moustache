import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {lista : [{nome:'zeno', sobrenome:'franca'}]};

  }


  render() {
    return (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <div className="mdl-layout-spacer"></div>
      <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
        <label className="mdl-button mdl-js-button mdl-button--icon"
               for="fixed-header-drawer-exp">
          <i className="material-icons">search</i>
        </label>

      </div>
    </div>
  </header>
  <div className="mdl-layout__drawer">

    <span className="mdl-layout-title">Moustache GED</span>
    <tbody>
    {
      this.state.lista.map(function(autor){
        return (
          <tr>
            <td>{autor.nome}</td>
            <td>{autor.sobrenome}</td>

          </tr>
          );
        })
    }
  </tbody>
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="page-content">
        <div id="folders">

        </div>
    </div>
  </main>
</div>

    );
  }
}

export default App;
