import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchLoading } from '../actions/actions';
import PropTypes from 'prop-types';
import Pagination from './Pagination';

class ProductList extends Component {
    componentDidMount() {
        this.props.fetchLoading();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentPage !== this.props.currentPage) {
            this.props.fetchLoading();
        }
    }

    render() {
        const { loading, data, error, currentPage, totalPages, setPage } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
            <Fragment>
                <div>
                    <ul>
                        {data.map((product, index) => (
                            <li key={index}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </li>
                        ))}
                    </ul>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setPage={setPage}
                    />
                </div>
            </Fragment>
        );
    }
}

ProductList.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    error: PropTypes.string,
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    fetchLoading: PropTypes.func.isRequired,
    setPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    loading: state.products.loading,
    data: state.products.data,
    error: state.products.error,
    currentPage: state.pagination.currentPage,
    totalPages: state.pagination.totalPages,
});

export default connect(mapStateToProps, { fetchLoading })(ProductList);
