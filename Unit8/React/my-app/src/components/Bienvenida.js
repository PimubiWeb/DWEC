import React from'react'
class Bienvenida extends React.Component {
    mensaje = 'tukuntakan'

    constructor(props){
        super(props)
        // this.atributos = props;
    }

    render(){
            return <h1>Bienvenida comp con mensaje={this.mensaje} <br></br> 
            titulo: {this.props.titu}</h1>
    }
}

export default Bienvenida