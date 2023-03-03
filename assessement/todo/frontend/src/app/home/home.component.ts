import { Component,Input,OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { TodoserviceService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

  todos?:Todo[];
  currentTodo?:Todo = {};
  currentIndex? = -1;
  todo = '';

  constructor(private route: ActivatedRoute, private router: Router) { }


  ngOnInit(): void {
    this.retrieveTodos();
  }
  retrieveTodos(): void {

}

}
