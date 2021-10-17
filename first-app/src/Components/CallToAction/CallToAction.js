import styles from "./CallToAction.module.css";
import searchIcon from "../../Images/search-solid.svg";
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import React, { Component } from "react";

export default class CallToAction extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  searchHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  render() {
    const { text } = this.state;
    return (
      <div id="callToAction" className={styles.callToAction}>
        <h3 className={styles.callToActionTitle}>Search What You Want</h3>
        <div className={styles.inputWrapper}>
        <img className={styles.sreachIcon} src= {searchIcon} alt="icon"/>
          <input
            type="text"
            className={styles.callToActionInput}
            placeholder="Type here"
            onChange={this.searchHandler}
          />
          <span>{text}  {text ? <i className="fa fa-spinner fa-spin"></i> : ""} </span>
        </div>
      </div>
    );
  }
}
