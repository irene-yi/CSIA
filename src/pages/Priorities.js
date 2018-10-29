import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}) => <li class="calcfourList">{value}</li>);

const SortableList = SortableContainer(({items}) => {

  return (

    <ol>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ol>
  );
});

export default class SortableComponent extends Component {
  state = {
    items: ['TV', 'Food', 'Friends', 'Privacy', 'High Quality Living'],
  };

  onSortEnd = ({oldIndex, newIndex}) => {

    let newArray = arrayMove(this.state.items, oldIndex, newIndex);
 
    this.setState({
      items: newArray,
    });
    this.props.callBack(newArray)
  };

  render() {

    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;

  }
}