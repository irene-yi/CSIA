import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firebaseConnect, isLoaded, isEmpty } from "react-redux-firebase";
 
class TodoItems extends Component {

  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }

  deleteItem(key) {
    this.props.delete(key);
  }
 
  
  createTasks(item) {
   return <li className="numberedList" onClick={(i) => this.deleteItem(item.key)}
              key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ol className="theList">
          {listItems}
      </ol>
    );
  }
};
 
export default TodoItems;