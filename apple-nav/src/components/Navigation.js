import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = props => {
    const {name, link } = props
    return (
        <div>
            <Link to={link}>{name}</Link>
            <div>
                {/* <Route
                    path="/:productID"
                    render={props =>
                    <SubMenu 
                        {...props}
                        products={products}/>}
                /> */}
            </div>
        </div>

    );
};

export default Navigation;

{/* <NavItem>
<Link to="/">Home</Link>
</NavItem>
<NavItem>
<Link to="/mac">Mac</Link>
</NavItem>
<NavItem>
<Link to="/ipad">iPad</Link>
</NavItem>
<NavItem>
<Link to="/iphone">iPhone</Link>
</NavItem>
<NavItem>
<Link to="/watch">Watch</Link>
</NavItem>
<NavItem>
<Link to="/tv">TV</Link>
</NavItem>
<NavItem>
<Link to="/music">Music</Link>
</NavItem>
<NavItem>
<Link to="/support">Support</Link>
</NavItem> */}