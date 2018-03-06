import React from 'react';
import ReactDOM from 'react-dom';
import './css/invie.css';
import './css/animations.css';
import Invie from './Invie';
import registerServiceWorker from './registerServiceWorker';

import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import clasica from './images/invie-classic.png';

import cheet from 'cheet.js'

import { Provider } from 'react-redux';
import {createStore } from 'redux';

import easterA from './images/easter-a.png'
import easterB from './images/easter-b.png'

const initialState = {
    menu: [
        {
            href: 'index.html',
            title: 'Home'
        }, 
        {
            href: '#guitarras',
            title: 'Guitarras'
        },
        {
            href: 'precios.html',
            title: 'Precios'
        }
    ], 

    logo: logoPortada,

    guitarras: [
        {
            image: acustica,
            alt: 'Guitarra Invie Acustica',
            name: 'Invie Acustica',
            features: [
                'Estilo vintage',
                'Madera pura',
                'Incluye estuche invisible de aluminio'
            ]
        },
        {
            image: clasica,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Clasica',
            features: [
                'Estilo vintage',
                'Liviana',
                'Inicia tu camino como Rockstar'
            ]
        }
    ]
}

function reducer(state, action) {
    switch(action.type) {
        case 'UPDATE_PROPS':{
            const newProps = action.payload.props;
            return {...state, ...newProps}   
        }
        default:
            return state;
    }
}

const store = createStore(reducer, initialState);

const easter = {
    menu: [
        {
            href: 'index.html',
            title: 'Home'
        }, 
    ],
    guitarras: [
        {
            image: easterA,
            alt: 'Guitarra padre de familia',
            name: 'Invie Familiar',
            features: [
                'Listo para copiar a los Simpsons',
                'Aire puro',
                'Chistes malos'
            ]
        },
        {
            image: easterB,
            alt: 'Guitarra Invie Classic',
            name: 'Invie Clasica',
            features: [
                'Estilo vintage',
                'Liviana',
                'Inicia tu camino como Rockstar'
            ]
        }
    ]
}

// cheet('f r a s e', function(){ })
cheet('i n v i e', function () {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: easter
        } 
    });
});
cheet('g o b a c k', function () {
    store.dispatch({
        type: 'UPDATE_PROPS',
        payload: {
            props: initialState,
        } 
    });
});

ReactDOM.render(
<Provider store={store}>
    <Invie />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
