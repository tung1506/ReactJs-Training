import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setPage } from '../actions/actions';

class Pagination extends Component {
    handleNext = () => {
        const { currentPage, totalPages, setPage } = this.props;
        if (currentPage < totalPages) {
            this.setPage(currentPage + 1);
        }
    };

    handleBack = () => {
        const { currentPage, setPage } = this.props;
        if (currentPage > 1) {
            setPage(currentPage - 1);
        }
    };

    render() {
        const { currentPage, totalPages } = this.props;

        return (
            <div>
                <button onClick={this.handleBack} disabled={currentPage === 1}>Back</button>
                <button onClick={this.handleNext} disabled={currentPage === totalPages}>Next</button>
            </div>
        );
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    currentPage: state.pagination.currentPage,
    totalPages: state.pagination.totalPages,
});

const mapDispatchToProps = {
    setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
