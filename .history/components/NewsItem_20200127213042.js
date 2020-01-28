const NewItem = (props) => {
    console.log(props);
    return (
    <h3>{props.newsItem.author}</h3>
    );
}

export default NewItem;