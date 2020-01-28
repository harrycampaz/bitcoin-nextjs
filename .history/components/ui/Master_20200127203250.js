import Head from "next/head";
import Navigator from "./Navigator";


const Master = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="stylesheet" href="https://bootswatch.com/4/pulse/bootstrap.min.css"/>

        </Head>

        <Navigator />

<div className="container mt-4">
{props.children}
</div>
       
    </div>
);

export default Master;