
const Price = (props) => {

    const { price, percent_change_1h, percent_change_24h, percent_change_7d } = props.price;

    return (

        <div className="card text-white bg-success mb-3">
            <div className="card-header"> Precio del BitCoin</div>

            <div className="card-body">
                <h4 className="card-title">
                    precio actual ${price}
                </h4>

               <div className="d-md-flex justify-content-between">
               <p className="card-text">
                    <span className="font-weight-bold">
                        Ultima Hora: {percent_change_1h}
                    </span>
                    </p>
                    <p className="card-text">
                    <span className="font-weight-bold">
                        Ultimas 24 Horas: {percent_change_24h}
                    </span>
                    </p>
                    <p className="card-text">
                    <span className="font-weight-bold">
                        Ultima 7 dias: {percent_change_7d}
                    </span>
                    </p>
                
               </div>
            </div>

        </div>

    );
};

export default Price;