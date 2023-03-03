import { Component } from '@angular/core';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  constructor(private dialog: MatDialog){}
    

  openDialog() {

    
    this.dialog.open(AddtodoComponent, {
      width: '40%',
      height: '62%',
    }).afterClosed().subscribe(val => {
      if (val === 'save') {
      }
    })
  }

  
  
}
