import Master from "../components/ui/Master";
import fetch from "isomorphic-unfetch";


//import React from 'react';

const Index = (props) => (

    <Master>
        <div className="row">
          
          <div className="col-12">
              <h2>Precio del bitcoin</h2>
              {console.log(props)}
              
          </div>

          <div className="col-md-8">
          <h2>NOticias del bitcoin</h2>
          </div>
          <div className="col-md-4">
          <h2>Proximos eventos del bitcoin</h2>
              </div>
        </div>
    </Master>

);

Index.getInitialProps = async () => {
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')

    const resultPrice = await price.json();

    return {
        priceBitcoin: resultPrice.data.quotes.USD
    }
}

export default Index;