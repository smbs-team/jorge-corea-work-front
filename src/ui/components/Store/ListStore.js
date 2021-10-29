import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import StoreItem from './StoreItem';
import { Link } from 'react-router-dom';
import httpClient from '../../../helpers/httpClient';

/**
 * List store
 * @extends {PureComponent<Props>}
 */
class ListStore extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            items: []
        }
    }

    fetchData = () => {
        const url = '/products/';
        httpClient({
            url,
            method: 'GET'
        }).then((resp) => {
            if(resp && resp.data)
                this.setState({ items: resp.data });
        }).catch(error => {
            console.log(error);
        });
    }

    componentDidMount = () => {
        this.fetchData();
    }

    render() {
        const { items } = this.state;
        return (
            <div className="container space-separator Store">
                <div className="row">
                    {items.map((item, idx) => {
                        return <div key={idx} className="col-md-3">
                            <StoreItem id={item.pk} fileName={item.name_es} title={item.name_es} price={item.price} />
                        </div>
                    })}
                </div>
                {
                    this.props.usePagination
                    &&  <div className="paginationCustom-wrapper">
                            <nav aria-label="Page navigation">
                                <ul className="paginationCustom">
                                    <li className="pageCustom-item"><Link to={''} className="pageCustom-link selected" href="#">1</Link></li>
                                    <li className="pageCustom-item"><Link to={''} className="pageCustom-link" href="#">2</Link></li>
                                    <li className="pageCustom-item"><Link to={''} className="pageCustom-link" href="#">3</Link></li>
                                    <li className="pageCustom-item"><Link to={''} className="pageCustom-link next" href="#">Siguiente</Link></li>
                                </ul>
                            </nav>
                        </div>
                }
            </div>
        );
    }
}

ListStore.propTypes = {
    usePagination: PropTypes.bool
}

export default ListStore;