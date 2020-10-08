let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

books.sort((a,b) => Number(a.published) - Number(b.published)); // Forgot to convert the string to numbers (still gave correct answer?);
console.log(books);

// Explicit coercion to a number is not necessary since the subtraction operator used on strings will implicitly convert strings to numbers;