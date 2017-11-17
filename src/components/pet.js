import React from 'react';
export default function Pet(props){

  function onAdoptAnimal(){
    console.log("animal adopted");
  }
  return (<div>
  <section>
  <header>
    <h1>{props.pet.name}</h1>
    <img src={`${props.pet.imageURL}`}/>
   
    </header>
    <main>
      <dl>
       <dt> {props.pet.description}</dt>
       <dt>{props.pet.age}</dt>
       <dt> {props.pet.gender}</dt>
       <dt> {props.pet.breed}</dt>
       <dt> {props.pet.story}</dt>
      </dl>
      <button onClick = {() => onAdoptAnimal()}>adopt</button>
    </main>
</section>
{/* <section>
        <header>
          {props.dog.name}
          {props.dog.imageURL}
        </header>
        <main>
            <dl>
            <dt>{props.dog.description}</dt>
            <dt> {props.dog.age}</dt>
            <dt>{props.dog.gender}</dt>
            <dt>{props.dog.breed}</dt>
            <dt>{props.dog.story}</dt>
            </dl>
            <button>adopt</button>
          </main>
      </section> */}
      </div>)
}