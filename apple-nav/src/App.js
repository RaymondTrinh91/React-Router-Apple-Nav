import React, {useState} from 'react';
import { Route, Link } from 'react-router-dom';
import Navigation from './components/Navigation';
import navData from './appleNavData';
import {Nav} from 'reactstrap';
import './App.css';
import SubMenu from './components/SubMenu';

function App() {
const [data] = useState(navData);  
  return (
    <div className="App">
      <header className="App-header">
        <Nav>
          <Link to="/">Home</Link>
        {navData.map(menu =>(
          <Navigation
            key={menu.id}
            data={data}
            name={menu.name}
            link={menu.link}
            products={menu.products}
            />
        ))}
        <Route 
          path="/:productID" 
          render={props =>
            <SubMenu
              {...props}
              data={data}/>}
              />
        </Nav>
      </header>
    </div>
  );
}

export default App;

{/* <Route exact path="/" component={Home}/>
<Route path="/mac" component={Mac}/>
<Route path="/ipad" component={Ipad}/>
<Route path="/iphone" component={Iphone}/>
<Route path="/watch" component={Watch}/>
<Route path="/tv" component={Tv}/>
<Route path="/music" component={Music}/>
<Route path="/support" component={Support}/> */}
{/* <Nav>
<Link to="/">Home</Link>
{navData.map(menu =>(
<Navigation 
  key={menu.id}
  name={menu.name}
  link={menu.link}
  />
))}
</Nav>
</header>
{navData.map(path =>(
<Route path={`${path.link}:dataID`} />
))} */}