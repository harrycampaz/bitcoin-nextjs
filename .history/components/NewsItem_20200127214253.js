const NewItem = (props) => {
   
    const {urlToImage, url, title, descripction, source} = props.newItem;

    let image;

    if(urlToImage !== ''){
        image = <image src={urlToImage} alt ={title} />
    }

    return (
    <h3>{props.newsItem.author}</h3>

    <div className="col-md-6 col-12 mb-4">

    </div>

    );
}

export default NewItem;