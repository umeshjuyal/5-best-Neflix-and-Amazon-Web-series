
// function Card(props){
//   console.log(props);
// return( 
// <>
//   <div className="cards">
//   <div className="card">
//   <img src ={ props.imgsrc}alt ="my Pic" className="card_img"/>
//   <div className="card_info">
//       <span className="card_category">{props.title} </span>
//       <h3 className="card_title">{props.sname}</h3>
//       <a href={props.link} target ="blank">
//           <button>Watch Now</button>
//       </a>
//   </div>

//   </div>
//   </div>
//   </>

// );
// }

//  For 5 Netflix and Amazon Prime series

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards"; 
import "./index.css";
import Sdata from './Sdata';

// console.log(Sdata[0])
ReactDOM.render(
  <>
  <h1 className="heading_style">List of top 5 Neflix and Amazon Prime Series</h1>
  <Card 
  imgsrc={Sdata[0].imgscr}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].links}
  />

  <Card
  imgsrc={Sdata[1].imgscr}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].links}
/>

  <Card
  imgsrc={Sdata[2].imgscr}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  link={Sdata[2].links}
/>
<Card 
   imgsrc={Sdata[3].imgscr}
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  link={Sdata[3].links}
  />
  <Card 
  imgsrc={Sdata[4].imgscr}
  title={Sdata[4].title}
  sname={Sdata[4].sname}
  link={Sdata[4].links}
  />

  </>,
document.getElementById('root')
);
