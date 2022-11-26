// import logo from './logo.svg';
import test from ".//img/api-paises.png";
import GClon from ".//img/clon.PNG";
import GClon2 from ".//img/clon_2.PNG";
import Game from ".//img/5.PNG";
import './App.css';

function App() {



  return (
    <div className="App">
      
      <header className="index-body">

        <div>
        {/* Titulo */}
        <div class="container">
  <svg viewBox="0 0 960 300">
    <symbol id="s-text">
      <text text-anchor="middle" x="50%" y="80%">Reto 2</text>
    </symbol>

    <g class = "g-ants">
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
      <use href="#s-text" class="text-copy"></use>
    </g>
  </svg>
</div>
        </div>
        <div>
        {/*nav que novega  */}
        <ul>
          <li onClick={()=>{ return window.scrollTo({ top: 460, left: 0, behavior: 'smooth'});}}>Acerca de mi</li>
          <li onClick={()=>{ return window.scrollTo({ top: 1300, left: 0, behavior: 'smooth'});}}>Proyectos</li>
        </ul>

            {/*nav que novega  */}
        </div>
        <div>
          <h1 className="iten-left" >
            Nombre: <br/>
                <div style={{color:'#00ff04'}} >Nestor Javier Solera Ayala </div>
          </h1>
          <h1 className="iten-right" >
              Correo✉: <br/>
               <span HREF="otra_pagina.html" >ness.cero1@gmail.com </span>
          </h1>
          <h1 className="iten-left">
          Acerca de mi: <br/>
          Tengo 2 años de experiencia como desarrollador web
            <br/>5 trabajando como programador, graduado como <span style={{color:'#c02a6b'}}>lic-</span>
            <br/><span style={{color:'#c02a6b'}}>enciado en informática y medio audiovisuales</span>.
            <br/>Actualmente soy <span style={{color:'#c02a6b'}}>desarrollador web
            <br/>freelance desde el Front-end</span>. También se ustilizar  <span style={{color:'#c02a6b'}}> C#, Javascript </span>
            <br/> <span style={{color:'#c02a6b'}}> y Typescript </span>. Adicional a esto tengo adicional a esto  
            <br/> tengo experiencia como Dev-game usando Unity3D
          </h1>
          <h1 className="iten-right" >
           Github📂:
            <br/>
           <a HREF= "https://github.com/NessDisk">https://github.com/NessDisk</a>
          </h1><h1 className="iten-left">
          Primer proyectos:
            <br/>
            <a HREF="https://github.com/NessDisk/PI-Countries-main" > Banderas del mundo </a>
            <br/>
          <img src={test} alt="Logo" className="img-style-index-left" />
          </h1>

          <h1 className="iten-right" >
            proyecto:
            <br/>
           <a HREF="https://github.com/NessDisk/Google-clone"> Google Clone </a>
            <br/>
          <img src={GClon} alt="Logo" className="img-style-index-right" />
          </h1>
          
          <h1 className="iten-left">
          proyectos:
            <br/>
           <a HREF="https://github.com/NessDisk/WhatsApp-clone"> whatsapp Clone </a>
            <br/>
          <img src={GClon2} alt="Logo" className="img-style-index-left" />
          </h1>
          <h1 className="iten-right" >
            Proyecto aparte demo:
            <br/>
            <img src={Game} alt="Logo" className="img-style-index-left" />
          </h1>
        </div>

        {/* body */}
       
      </header>
    </div>
  );
}

export default App;
