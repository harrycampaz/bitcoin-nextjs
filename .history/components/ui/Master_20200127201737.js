import Head from "next/head";
import Navigator from "./Navigator";


const Master = (props) => (
            <div>
                <Head>
                    <title>Bitcoin App</title>
                </Head>

                <Navigator/>

                {props.children}
            </div>
    );

export default Master;