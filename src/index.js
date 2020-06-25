import React, { } from 'react';
import { render } from 'react-dom';

import Library from './Library';

let bookList = [
  { title: "Hunger Games", author: "Suzzanne Collins", pages: 324, Illustrator: "Jamal Mashburn"},
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260},
  { title: "Cat's Cradle", author: "Kurt Vongnut", pages: 304 },
  { title: "White Teeth"},
];

render(
  <Library books = {bookList}/>,
  document.getElementById('root')
)


// ======= 2ND PART =============
// class FavoriteColorForm extends React.Component {
//   state = { value: '' }

//   newColor = e => this.setState({ value: e.target.value });
//   submit = e =>  {
//     console.log(`New color: ${this.state.value}`)
//     e.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit = {this.submit}>
//         <label>
//           Favorite Color: 
//           <input 
//             type = "color"
//             onChange = {this.newColor}
//           />
//         </label>
//         <button> Submit </button>
//       </form>
//     )
//   }
// }


// ======FIRST PART=====
// class SkiDayCounter extends Component {

  // getPercent = decimal => {
  //   return decimal * 100 + '%';
  // }

  // calcGoalProgress = (total, goal) => {
  //   return this.getPercent(total/goal);
  // }

//   render() {
//     const { total, powder, backCountry, goal } = this.props;
//     return (
//       <section>
//       <div>
//         <p> Total Days: {total} </p>
//       </div>

//       <div>
//         <p> Powder Days: {powder} </p>
//       </div>

//       <div>
//         <p> backCountry Days: {backCountry} </p>
//       </div>

//       <div>
//         <p> Goal Progress: {this.calcGoalProgress(total, goal)} </p>
//       </div>
//     </section>
//     )
//   }
// }

// class Message extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h1 style = {{color: this.props.color}}>
//           {this.props.msg}
//         </h1>
//         <p> I'll check back in {this.props.minutes} minutes </p>
//       </div>
//     )
//   }
// }