const NewItem = (props) => {

    
   const { urlToImage, url, title, descripction, source } = props.newsItem;

    let image;

    if (urlToImage !== '') {
        image = <img src={urlToImage} alt={title} className="card-img-top" />
    }else {
        image = <img src="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg" alt={title} className="card-img-top" />  
    }

    return (
       
        <div className="col-md-6 col-12 mb-4">

            <div className="card">
                <div className="card-image">
                    {image}
                </div>
            </div>
        </div>

    );
}

export default NewItem;