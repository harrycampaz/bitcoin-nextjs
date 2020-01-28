import Master from "../components/ui/Master";
import fetch from "isomorphic-unfetch";
import Price from "../components/Price";


//import React from 'react';

const Index = (props) => (

    <Master>
        <div className="row">
          
          <div className="col-12">
             
             <Price price={props.priceBitcoin}/>
              
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

    const news = await fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-28&sortBy=publishedAt&apiKey=e2e31acf44744967adbfc05c32672e50&language=es');

    const resultPrice = await price.json();

    return {
        priceBitcoin: resultPrice.data.quotes.USD
    }
}

export default Index;