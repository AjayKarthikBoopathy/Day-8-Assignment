class Movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating="PG";
    }
//Instance
getPG(){
    let moviedata=
    `Movie:${this.title}
     Rating:${this.rating}`;
     console.log(moviedata);
}

}
var m1=new Movie("Casino Royale","Eon Productions","PG13");
var m2=new Movie("KGF","Hombale Films");

console.log(m1);
console.log(m2);


let movie1= new Movie("Don","PG");
movie1.getPG();
