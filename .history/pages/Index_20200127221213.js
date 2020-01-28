import Master from "../components/ui/Master";
import fetch from "isomorphic-unfetch";
import Price from "../components/Price";
import News from "../components/News";
import { GLOBAL } from "../config/constants";


//import React from 'react';

const Index = (props) => (

    <Master>
        <div className="row">
          
          <div className="col-12">
             
             <Price price={props.priceBitcoin}/>
              
          </div>

          <div className="col-md-8">
          <h2>Noticias del bitcoin</h2>
         <News news={props.news}/>
          </div>
          <div className="col-md-4">
          <h2>Proximos eventos del bitcoin</h2>
              </div>
        </div>
    </Master>

);

Index.getInitialProps = async () => {
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')

    const news = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-28&sortBy=publishedAt&apiKey=${this.token}&language=es`);

    const events = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${GLOBAL.apiKey}&locale=es_ES`);

    const resultPrice = await price.json();
    const resultNews = await news.json();

    return {
        priceBitcoin: resultPrice.data.quotes.USD,
        news: resultNews.articles
    }
}

export default Index;