import NewItem from "./NewsItem";


const News = (props) => {
    
    return (
        <div className="row">
            {props.news.map((newsItem) => (
                <NewItem key={newsItem.url} newsItem ={newsItem}/>
            ))}
        </div>

    );
}

export default News;