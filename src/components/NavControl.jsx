import React, { Component } from "react";
import '../styles/NavControl.css';

class NavControl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <nav
          className="navbar has-shadow"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
          </div>
          <div className="navbar-start">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-success" onClick="addColumn()">
                  Add Column
                </div>
                <div className="button is-danger" onClick="removeColumn()">
                  Remove Column
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-link" onclick="fillAll()">
                  Fill All
                </div>
                <div className="button is-primary" onclick="fillAllUncolored()">
                  Fill All Uncolored
                </div>
                <div className="button is-warning" onClick="clearAll()">
                  Clear All
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <button className="button" >
                    Colors
                  </button>
                  <div className="navbar-dropdown">
                    <button
                      onClick="pickBlue()"
                      className="button ButtonLink"
                      id="blue"
                    >
                      Blue
                    </button>
                    <button
                      onClick="pickRed()"
                      className="button ButtonLink"
                      id="red"
                    >
                      Red
                    </button>
                    <button
                      onClick="pickWhite()"
                      className="button ButtonLink"
                      id="white"
                    >
                        White
                    </button>
                  </div>
                </div>
                <div className="navbar-item" id="colorPicker">
                  Color Selected: White
                </div>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div className="button is-success" onClick="addRow()">
                  Add Row
                </div>
                <div className="button is-danger" onClick="removeRow()">
                  Remove Row
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default NavControl;
