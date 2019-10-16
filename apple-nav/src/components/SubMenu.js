import React from 'react';
import { Link } from 'react-router-dom';


const SubMenu = props => {
    console.log(props);
    console.log(props.data);
    const appleProduct = props.data.find(
        product => product.link === props.match.params.productID);
        console.log(appleProduct);
    return (
        <div>
            {appleProduct.products.map(product =>(
                <Link to={product.link}>{product.name}</Link>
            ))}
        </div>
    );
};

export default SubMenu;