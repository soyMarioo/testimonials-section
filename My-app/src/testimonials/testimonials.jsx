import React from 'react';
import '../css-styles/testimonials.css';

function Testimonials(props){
return(
  <div className="div-testimonials">
<img className="div-testimonials__img" src={require(`../img-students/student-${props.image}.png`)} alt="" />
    <div className="div-testimonials__div-testimonial-text">
      <p className="div-testimonials__div-testimonial-text--name">{props.name} in {props.country}</p>
      <p className="div-testimonials__div-testimonial-text--occupation">{props.occupation} at {props.company}</p>
      <p className="div-testimonials__div-testimonial-text--testimony">"{props.testimony}"</p>
    </div>
  </div>
  )
}

export default Testimonials;
