import Head from 'next/head';
import Navbar from './navbar';
import withRedux from "next-redux-wrapper";
import initStore from "../redux/store";

const Layout = (props) => (
    <div>
        <Head>
            <title>Next project</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default withRedux(initStore, null, null)(Layout);;