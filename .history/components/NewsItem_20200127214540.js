const NewItem = (props) => {

    console.log(props.newsItem);
    
   const { urlToImage, url, title, descripction, source } = props.newsItem;

    let image;

    if (urlToImage !== '') {
        image = <image src={urlToImage} alt={title} />
    }

    return (
       
        <div className="col-md-6 col-12 mb-4">

            <div className="card">
                <div className="card-image">
                    
                </div>
            </div>
        </div>

    );
}

export default NewItem;