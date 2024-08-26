// ItemsList.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsRequest, selectItem } from '../actions/actions';

class ItemsList extends Component {
    componentDidMount() {
        this.props.fetchItemsRequest();
    }

    handleSelect = (item) => {
        this.props.selectItem(item);
    };

    render() {
        const { items, selectedItem } = this.props;

        return (
            <div>
                <ul>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => this.handleSelect(item)}
                            style={{ cursor: 'pointer', fontWeight: item === selectedItem ? 'bold' : 'normal' }}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.item.items,
    selectedItem: state.item.selectedItem,
});

const mapDispatchToProps = {
    fetchItemsRequest,
    selectItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
