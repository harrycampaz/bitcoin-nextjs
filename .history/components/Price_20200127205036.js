
const Price = (props) => {

    const {price, percent_change_1h, percent_change_24h, percent_change_7d} = props.price;
    
    return (

        <div className="card text-white bg-success mb-3">
            <div className="card-header"> Precio del BitCoin</div>
               
                <div className="card-body">
                    <h4 className="card-title">
precio actual
                    </h4>
                </div>
            
        </div>

    );
};

export default Price;