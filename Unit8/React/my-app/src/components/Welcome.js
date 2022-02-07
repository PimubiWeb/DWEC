let msg = 'pelele'

function Welcome(props) {
    return (<h1>Hello, mi nombre a capon {msg} ---- {props.titulo}
    <button onClick={pulsaboton}> pulsame </button>
    </h1>);

  }

  function pulsaboton(){
    console.log('pulsado')
  }

export default Welcome;