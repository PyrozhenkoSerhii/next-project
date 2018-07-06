import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
    <div>
        <Head>
            <title>Next project</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"/>

        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;