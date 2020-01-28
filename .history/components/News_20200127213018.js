import NewItem from "./NewsItem";


const News = (props) => {
    
    return (
        <div className="row">
            {props.news.map((newsItem) => (
                <NewItem newsItem ={newsItem}/>
            ))}
        </div>

    );
}

export default News;