import React, { } from 'react';
import { render } from 'react-dom';

let bookList = [
  { title: "Hunger Games", author: "Suzzanne Collins", pages: 324, Illustrator: "Jamal Mashburn"},
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260},
  { title: "Cat's Cradle", author: "Kurt Vongnut", pages: 304 },
  { title: "White Teeth", author: "Zadie Smith", pages: 479},
];

const Book = ({title, author, pages, Illustrator}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>pages: {pages} pages </p>
      <p> Illustration by: {Illustrator}</p>
    </section>
  )
}

const Library = ({books}) => {
  return (
    <div>
      {books.map((book, i) => 
        <Book 
          key = {i}
          title = {book.title} 
          author = {book.author}
          Illustrator = {book.Illustrator}
          pages = {book.pages}
        />)}
    </div>
  )
}

render(
  <Library books = {bookList}/>,
  document.getElementById('root')
)




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