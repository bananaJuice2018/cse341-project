const express = require('express');
const router = express.Router();
const books = [
  {title:'At the going down of the sun', summary: 'This is summary for book1', author: 'Alan Teo', cover_url: '/images/1.png'},
  {title:'LIGHT BEYOND THE GARDEN WALL', summary: 'This is summary for book2', author: 'Mark Tansey', cover_url: '/images/2.jpg'},
  {title:'THE LINE THAT HELD US', summary: 'This is summary for book3', author: 'David Joy', cover_url: '/images/3.jpg'},];

// Task2.1
router.get('/', (req, res, next) => {
  res.render('pages/library', { 
    title: 'Library',
    books: books,
    path: '/library', // For pug, EJS 
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

// Task1.4
router.post('/create-book', (req, res, next) => {
    const newBook = {...req.body};
    // Console log seen in terminal, may be encoded, but isn't important for now
    console.log("New Book: ", newBook);
    
    // Task1.5
    books.push(newBook);
    // Remain on './activities' url.
    res.writeHead(302, {'Location': '/library'});
    res.end();
});

module.exports = router;