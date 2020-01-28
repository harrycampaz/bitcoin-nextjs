import NewItem from "./NewItem";


const News = (props) => {
    console.log(props);
    
    return (
        <div className="row">
            {props.news.map((newItem) => (
                <NewItem newItem ={newItem}/>
            ))}
        </div>

    );
}

export default News;