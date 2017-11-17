import React from 'react';
import Pet from './components/pet';

export default function DashBoard(props){
  const catToAdopt = {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg',
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    gender: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  }
  
  const dogToAdopt = {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    gender: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  }
  return (
    <div>
    <Pet pet = {catToAdopt}/>
    <Pet pet = {dogToAdopt}/>
    </div>
  )
}