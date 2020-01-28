const NewItem = (props) => {


    const { urlToImage, url, title, description, source } = props.newsItem;

    let image;

    if (urlToImage !== '') {
        image = <img src={urlToImage} alt={title} className="card-img-top" />
    } else {
        image = <img src="https://carolinadojo.com/wp-content/uploads/2017/04/default-image.jpg" alt={title} className="card-img-top" />
    }

    return (

        <div className="col-md-6 col-12 mb-4">

            <div className="card">
                <div className="card-image">
                    {image}
                </div>
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <p className="card-text">{description}</p>
    <p className="card-text">{source.name}</p>

    <a href={url} target="_blank" className="btn btn-primary d-block">Leer mas...</a>

                </div>
            </div>
        </div>

    );
}

export default NewItem;