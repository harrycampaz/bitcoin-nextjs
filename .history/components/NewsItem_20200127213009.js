const NewItem = (props) => {
    console.log(props);
    return (
    <h3>{props.newsItem.autor}</h3>
    );
}

export default NewItem;