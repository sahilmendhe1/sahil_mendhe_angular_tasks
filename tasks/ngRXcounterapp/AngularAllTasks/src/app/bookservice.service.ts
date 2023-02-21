import { Injectable } from '@angular/core';
import Book from './bookservice/book';

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  
  constructor() { }
  getAllBooks():any[] { 
        return [
    	        {"id": 1, "name": "HTML 5"  },
    	        {"id": 2, "name": "CSS 3"   },
    	        {"id": 3, "name": "Java Script"  },
    	        {"id": 4, "name": "Ajax Programming" }
    	    ];
    	  }
    
}
