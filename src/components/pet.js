import React from 'react';
import * as actions from '../actions.js'
import { connect } from 'react-redux'

export class Pet extends React.Component{

  onAdoptAnimal(species){
    this.props.dispatch(actions.adoptPet(species))
  }

  render(){

  return (<div>
  <section>
  <header>
    <h1>{this.props.pet.name}</h1>
    <img src={`${this.props.pet.imageURL}`}/>
   
    </header>
    <main>
      <dl>
       <dt> {this.props.pet.description}</dt>
       <dt>{this.props.pet.age}</dt>
       <dt> {this.props.pet.gender}</dt>
       <dt> {this.props.pet.breed}</dt>
       <dt> {this.props.pet.story}</dt>
      </dl>
      <button onClick={() => this.onAdoptAnimal(this.props.species)}>adopt</button>
    </main>
</section>
      </div>)
}
}

export default connect()(Pet);