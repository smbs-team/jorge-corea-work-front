import React, { PureComponent } from 'react';
import ImageProduct from './ImageProduct';
import InfoProduct from './InfoProduct';
import StoreItem from '../Store/StoreItem';

import thumb_1 from '../../../assets/images/Products/product_1_2.png';
import thumb_2 from '../../../assets/images/Products/product_1_3.png';

import relatedItem from '../../../assets/images/items/item.png';
import items from '../../../data/dummy-items';

import ItemImage2 from '../../../assets/images/items/item2.png';
import ItemImage3 from '../../../assets/images/items/item3.png';
import ItemImage4 from '../../../assets/images/items/item4.png';


class DetailProduct extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            thumbnails: [
                { source: thumb_1, isVideo: false },
                { source: thumb_2, isVideo: false },
                { source: null, isVideo: true },
            ],

            id: props.id,
            item: {}
        }
    }

    componentDidMount() {
        const item = items.find((i) => i.id === parseInt(this.props.id));
        this.setState({ item });
    }

    render() {
        if(!this.state.item) {
            return <span>Loading...</span>
        }

        return (
            <div className="container space-separator">
                <div className="row">                    
                    <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                        <ImageProduct thumbnails={this.state.thumbnails} fileName={this.state.item.image} />
                    </div>
                    <div className="col-12 col-lg-6 col-xl-5">
                        <InfoProduct />
                    </div>
                </div>
                <div className="RelatedProducts">
                    <h3 className="RelatedProducts-title">Productos de la misma colección</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={ItemImage2} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={ItemImage3} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={ItemImage4} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                    </div>
                </div>
                <div className="RelatedProducts">
                    <h3 className="RelatedProducts-title">Productos relacionados</h3>
                    <div className="row">
                        <div className="col-md-3">
                            <StoreItem fileName={relatedItem} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={ItemImage2} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={ItemImage3} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                        <div className="col-md-3">
                            <StoreItem fileName={ItemImage4} title='Lorem Ipsum' price={'25.00 €'} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProduct;