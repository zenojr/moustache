import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
    <nav className="mdl-navigation">
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
      <a className="mdl-navigation__link" href="">Link</a>
    </nav>
  </div>
  <main className="mdl-layout__content">
    <div className="page-content">

    </div>
  </main>
</div>

    );
  }
}

export default App;
