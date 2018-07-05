import Layout from '../components/layout';
import React from 'react';
import socketIO from 'socket.io-client';

class Index extends React.Component{
    constructor(props){
        super();
        this.state = {
            messages:[],
            connectedTime: new Date(Date.now())
        }
    }
    componentDidMount(){
        //const {socket} = this.props;
        const socket = socketIO('https://obscure-stream-46512.herokuapp.com/');
        socket.emit('room',{
            data: {
                room: '5aea138d5f09713c5c2ea10c',
                type: 'customer',
                //todo customer
                user: 'customer1',
                connectedTime: this.state.connectedTime,
                //todo product
                product: null
            }
        })
        socket.on('customerOutput', (data)=>{
            this.setState({
                messages: data
            })

        })
    }
    render(){
        return(
            <Layout>
                <h3 align="center">Home</h3>
                {this.state.messages.map(message => {
                    {message}
                })}
            </Layout>
        );
    }
}

export default Index;