import React from 'react';
import propTypes from 'prop-types';

import { Book } from './Book';
import { Hiring } from './Hiring';
import { NotHiring } from './NotHiring';

class Library extends React.Component {

    static defaultProps = {
      books: [
        {"title": "Tahoe Tales", "author": "Chet Whitley", "pages": 1000}
      ]
    }
  
    state = { 
      freeBookMark: true,
      open: true,
      hiring: false,
      data: [],
      loading: false,
    };
  
    componentDidMount() {
      this.setState({loading: true});
      fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
        .then(data => data.json())
        .then(data => this.setState({data, loading: false}));
    };
  
    componentDidUpdate() {
      console.log("The component just updated.");
    };
  
    toggleOpenClosed = () => {
      this.setState(prevState => ({
        open: !prevState.open,
      }));
    };
  
    render() {
      // console.log(this.state);
      const {books} = this.props;
  
      return (
        <div>
          <h1> The library is {this.state.open ? 'open' : 'closed'} </h1>
          {this.state.hiring ? <Hiring/> : <NotHiring/>}
  
          {this.state.loading? "Loading..." : <div>
            {this.state.data.map(product => {
              return (<div key = {product.id}>
                <h3> Library Product of the Week! </h3>
                <h4> {product.name} </h4>
                <img alt = {product.name} src = {product.image} height = {100} />
              </div>)
            })}
          </div>}
  
          {books.map((book, i) => 
            <Book
              key = {i}
              title = {book.title} 
              author = {book.author}
              Illustrator = {book.Illustrator}
              pages = {book.pages}
              freeBookMark = {this.state.freeBookMark}
            />
          )}
  
          <button onClick = {this.toggleOpenClosed}> Change </button>
        </div>
      )
    };
}
  
  Library.propTypes = {
    books: propTypes.array,             
  }
  
  Book.propTypes = {
    title: propTypes.string,
    author: propTypes.string,
    pages: propTypes.number,
    freeBookMark: propTypes.bool,
  }

export default Library;