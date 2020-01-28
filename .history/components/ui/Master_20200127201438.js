import Head from "next/head";


const Master = (props) => (
            <div>
                <Head>
                    <title>Bitcoin App</title>
                </Head>

                {props.children}
            </div>
    );

export default Master;