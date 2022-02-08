import React from'react'
class Bienvenida extends React.Component {
    mensaje = 'tukuntakan'

    nombres = [{nombre: 'jose', edad: 13},
                {nombre: 'mikel', edad:22}];
    

    // constructor(props){
    //     super(props)
    //     // this.atributos = props;
    //     //para que no se pierda el this
    // }

    render(){
        const listItems = this.nombres.map((o,index)=> //para cada elemento del array necesita tener una key unica como puede ser el index
        <li key={index}>{o.nombre} que tiene {o.edad}</li>
        )


        return <div>Bienvenida comp con mensaje={this.mensaje} con titulo: {this.props.titu}
        
        

        <ol>
            {listItems}
        </ol>
        
       </div>
    }
}

export default Bienvenida