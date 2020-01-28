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
          <h2>Mas informacion sobre bitcoin</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa dicta omnis. 
                Adipisci consectetur esse minima molestiae earum officiis similique sit dolor, 
                sequi tenetur soluta eveniet vel quod? Assumenda, fugit?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa dicta omnis. 
                Adipisci consectetur esse minima molestiae earum officiis similique sit dolor, 
                sequi tenetur soluta eveniet vel quod? Assumenda, fugit?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam ipsa dicta omnis. 
                Adipisci consectetur esse minima molestiae earum officiis similique sit dolor, 
                sequi tenetur soluta eveniet vel quod? Assumenda, fugit?</p>
         
              </div>
        </div>
    </Master>

);

Index.getInitialProps = async () => {
    const price = await fetch('https://api.coinmarketcap.com/v2/ticker/1/')

    const news = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&from=2019-12-28&sortBy=publishedAt&apiKey=${GLOBAL.apiKeyNews}&language=es`);

   
    
    const resultPrice = await price.json();
    const resultNews = await news.json();
   
    

    return {
        priceBitcoin: resultPrice.data.quotes.USD,
        news: resultNews.articles,
    }
}

export default Index;