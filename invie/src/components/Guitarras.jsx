import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'

function mapStateToProps(state) {
    return {
        guitarras: state.guitarras
    }
}

class Guitarras extends Component {
    render(){
        return(
            <section id="guitarras" className="guitarras contenedor"> 
                <h2>Nuestra guitarras</h2>
                <div className="video-demo-contenedor">
                    <div className="video-demo">
                    <div className="video-responsive-contenedor">
                        <iframe className="video-responsive-src" width="560" height="315" src="https://www.youtube.com/embed/R1dW8M4EqYY" frameborder="0" allowfullscreen></iframe>
                    </div>
                    </div>
                </div>
                {
                    this.props.guitarras.map(function(guitarra, index){
                        return (
                            <article className="guitarra" key={index}> 
                                <CSSTransitionGroup
                                    transitionName="flicker"
                                    transitionEnterTimeOut={500}
                                    transitionLeaveTimeOut={500}
                                >
                                    <img 
                                        className="guitarra-image" 
                                        key={guitarra.image}  
                                        src={guitarra.image}
                                        alt={guitarra.alt} 
                                        width="350"
                                    />
                                </CSSTransitionGroup>
                                <CSSTransitionGroup
                                    transitionName="fade"
                                    transitionEnterTimeOut={300}
                                    transitionLeave={false}
                                >                           
                                    <div className="contenedor-guitarra" key={guitarra.name}>                                
                                        <h3 className="guitarra-name">{guitarra.name}</h3>
                                        <ol>
                                            {
                                                guitarra.features.map(function(feature, index){
                                                    return (
                                                        <li key={index}>{feature}</li>
                                                    )
                                                })
                                            }
                                        </ol>
                                </div>
                                </CSSTransitionGroup>
                            </article>
                        )
                    })
                }
                
                {/* <article className="guitarra b">
                    <img className="izquierda" src={ clasica } alt="Guitarra Invie Classic" width="350"/>
                    <div className="contenedor-guitarra-b">
                    <h3 className="title-b">Invie Classic</h3>
                    <ol>
                        <li>Estilo vintage</li>
                        <li>Liviana</li>
                        <li>Inicia tu camino como Rockstar</li>
                    </ol>
                    </div>
                </article> */}
            </section>
        )
    }
}

export default connect(mapStateToProps)(Guitarras);