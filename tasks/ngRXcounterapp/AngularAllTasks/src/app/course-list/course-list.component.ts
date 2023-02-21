import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {
  // @Output() onRegister = new EventEmitter<string>();
  // courses = [
  //       { courseId: 1, courseName: "Node JS" },
  //       { courseId: 2, courseName: "Typescript" },
  //       { courseId: 3, courseName: "Angular" },
  //       { courseId: 4, courseName: "React JS" }
  //     ];
  @Input() courseitem: any;
  //       @Input() cName:string='';

  // register(courseName: string) {
  // this.onRegister.emit(courseName);

}

