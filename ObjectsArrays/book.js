const books={
    title:"Alpha male",
    author:"Fred Mugwe",
    year:1997,
    genre:"Masculinity",
    getBookInfo:function(){
        console.log(`The title is'${this.title}and the author is',+ this.author`)
    }

}
books .publisher='Moran'
books.year=1998
// console.log(books)
delete books.genre
console.log(books)