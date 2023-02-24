import { Component } from '@angular/core';
import { Movie } from '../../modles/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Movie[] = [];

  // inputTodo: string = "";
  movieName: any;
  movieBookingDate: any;
  noOfTickets: number =0;
  totalAmount: number=(150*this.noOfTickets);
  
constructor(){

}

  ngOnInit(): void{
    this.todos = [
      
      {
        movieId: 1,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    },
    {
        movieId: 2,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    },
    {
        movieId: 3,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    },
    {
        movieId: 4,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    },
    {
        movieId: 5,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    },
    {
        movieId: 6,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    }, {
        movieId: 7,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    },
    {
        movieId: 8,
        movieName: 'Harry Potter and the Half-Blood Prince',
        movieBookingDate: '16/02/2023',
        noOfTickets: 1,
        totalAmount: 150,
        completed: false
    }

    ]
  }

  toggleDone(id:number) {
    this.todos?.map((v ,i) =>{
      if(i === id){
        v.completed =!v.completed
      }
      return v;
    })
  }


  deleteTodo(id:number) {
    this.todos = this.todos.filter((v,i) => i !== id);
    }

    addTodo() {
      this.todos.push({
        movieName: this.movieName,
        completed: false,
        movieId: 0,
        movieBookingDate: this.movieBookingDate,
        noOfTickets: this.noOfTickets,
        totalAmount: (this.totalAmount*150)
      })

      this.movieName = "";
      this.movieBookingDate="";
      this.noOfTickets =0;
      this.totalAmount =(150*this.noOfTickets);
    }


  }



