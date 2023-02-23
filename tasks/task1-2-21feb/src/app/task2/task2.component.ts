import { Component } from '@angular/core';
import { Pipe,PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import { filter } from 'rxjs/operators';



export interface CandidateList{
name:string;
technology:string;
city:string;
experience:number;

}

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})

export class Task2Component {

  list:any="";

 
  candidateList = [
    {  name: "Ramesh",technology:"Java",city:"Pune",experience:5 },
    {  name:"Ram",technology: "Angualr",city:"Mumbai",experience:3 },
    {  name:"Raj",technology:"React",city:"Banglore",experience:2 },
    {  name:"Smith",technology: "Java",city:"Pune",experience:5 },
    {  name:"John",technology:"Java",city:"Hyderabad",experience:0 },
    {  name:"Sita",technology: "React",city:"Chennai",experience:1 },
    {  name:"Arun",technology:"Angular",city:"Hyderabad",experience:4 },
    {  name:"Krish",technology:"React",city:"Chennai",experience:5 },
    {  name:"Teja",technology: "Java",city:"Pune",experience:0 },

];



ngOnInit() {
  let puneCandidate = from(this.candidateList).pipe(filter(candidateList => candidateList.city === "Pune"));
  puneCandidate.subscribe(puneCandidate => this.list = puneCandidate)
  console.log(puneCandidate);
  
}

}



