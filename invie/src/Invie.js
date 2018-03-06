import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada.jsx';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';

// const data = {
//   menu: [
//     {
//         href: 'index.html',
//         title: 'Home'
//     }, 
//     {
//         href: '#guitarras',
//         title: 'Guitarras'
//     },
//     {
//         href: 'precios.html',
//         title: 'Precios'
//     }
//   ], 

//   logo: logoPortada,

//   guitarras: [
//     {
//         image: acustica,
//         alt: 'Guitarra Invie Acustica',
//         name: 'Invie Acustica',
//         features: [
//             'Estilo vintage',
//             'Madera pura',
//             'Incluye estuche invisible de aluminio'
//         ]
//     },
//     {
//         image: clasica,
//         alt: 'Guitarra Invie Classic',
//         name: 'Invie Clasica',
//         features: [
//             'Estilo vintage',
//             'Liviana',
//             'Inicia tu camino como Rockstar'
//         ]
//     }
// ]
// }



class App extends Component {
  render() {
    return (
      <section className="Invie">
        {/* Portada */}        
        {/* <Portada menu={data.menu} logo={data.logo}/> */}
        <Portada/>
        

        {/* Guitarras */}
        {/* <Guitarras guitarras={data.guitarras}/> */}
        <Guitarras/>
        
        
        {/* Footer */}
        <Footer/>
      </section>
    );
  }
}

export default App;
