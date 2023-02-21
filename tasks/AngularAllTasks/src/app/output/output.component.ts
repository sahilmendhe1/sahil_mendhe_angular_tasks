import { Component , Input , Output , EventEmitter , OnInit} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  @Input() myinputMsg="";
  @Output() myoutput:EventEmitter<string> = new EventEmitter();
  outputMessage="I am child component";

  constructor(){}
  ngOnInit(): void {
    console.log(this.myinputMsg);    
  }
  sendValue(){
    this.myoutput.emit(this.outputMessage);
  }

}
