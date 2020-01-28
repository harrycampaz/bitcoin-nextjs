
const Price = (props) => {

    const { price, percent_change_1h, percent_change_24h, percent_change_7d } = props.price;

    return (

        <div className="card text-white bg-success mb-3">
            <div className="card-header"> Precio del BitCoin</div>

            <div className="card-body">
                <h4 className="card-title">
                    precio actual ${price}
                </h4>

                <p className="card-text">
                    <span className="font-weight-bold">
                        Ultima Hora:
                    </span>
                    <span className="font-weight-bold">
                        Ultimas 24 Horas:
                    </span>
                    <span className="font-weight-bold">
                        Ultima 7 dias:
                    </span>
                </p>
            </div>

        </div>

    );
};

export default Price;