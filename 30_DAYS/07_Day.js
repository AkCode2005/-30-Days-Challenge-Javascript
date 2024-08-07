//Day - 7 (Object)

//Activity - 1 (Object Creation and Access)
//Task - 1
const Book = {
    Title: "Harry potter part 1",
    author: "JK Rowling",
    year: 1997,
}

console.log(Book);

//Task - 2
console.log(Book.Title);
console.log(Book.year);

//Activity - 2 (Objects Method)

//Task - 3
const Book2 = {
    Title: "Harry potter part 2",
    author: "JK Rowling",
    year: 1997,
    getsummary: function () {
       return `${this.Title} written by ${this.author}`
    }
}
console.log(Book2.getsummary());
//Task - 4
const Bookupdate = {
    Title: "Harry potter part 1",
    author: "JK Rowling",
    year: 1997,
    updateYear: function (NewYear) {
    this.year = NewYear;
    }
}
Bookupdate.updateYear(1996)
console.log(Bookupdate);

//Activity - 3
//Task - 5
const Library = [
    {Name: "Ashish",
     book: "Physics",
     Dateofissue: '12 July 2024'
    },
    {Name: "Manish",
     book: "Math",
     Dateofissue: '13 June 2024'
    },
    {Name: "Dishant",
     book: "Chemistry",
     Dateofissue: '10 July 2024'
    },
    {Name: "Ramesh",
     book: "Economics",
     Dateofissue: '12 July 2024'
    },
]
console.log(Library);

//Task - 6
console.log(Library[0].book)
console.log(Library[1].book)
console.log(Library[2].book)
console.log(Library[3].book)

//Activity - 4 (this Keyword)
//Task - 7
const Book3 = {
    Title: "Percey Jackson the lightning thief",
    Author: "Rick Riordan",
    Year: 2005,
    getBookInfo: function () {
        return `${this.Title} is published in ${this.Year}`
    }

}
console.log(Book3);
console.log(Book3.getBookInfo());

//Activity - 5 (Object Iterations)
//Task - 8
const Book4 = {
    Title: "Harry potter part 3",
    author: "JK Rowling",
    year: 1999,
}
for (const key in Book4) {
    console.log(`${key} of the book is ${Book4[key]}`)
}

//Task- 9
console.log(Object.keys(Book4));
console.log(Object.values(Book4));
console.log(Object.entries(Book4));