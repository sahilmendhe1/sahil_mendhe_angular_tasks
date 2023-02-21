import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DateService } from './date.service';
import { LoginpassingdatabetweencomponentsComponent } from './loginpassingdatabetweencomponents/loginpassingdatabetweencomponents.component';
import { CourseListComponent } from './course-list/course-list.component';


@NgModule({
  declarations: [ Component ],
  imports: [ BrowserModule],
  providers: [],
  bootstrap: [ Component ]
})
export class AppModule {
}



// export { Component };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   show:boolean=false;
//   title = 'app';
//   firstname = 'Sahil';
//   username = '';

// myInputMessage: string="I am Child component";
//task 2--Transaction table
  // Select: any[] = [{name: 'One',val:1}, {name: 'Two',val:2}, {name: 'Three',val:3}];
  // selectedValue: string='One';

  // items:any = [
  //   {
  //     orderId: 2001,productName: "iPhone 11",quantity: 1,price: 100000,transaction: 'Completed' 
  //   },
  //   {
  //     orderId: 2002,productName: "iPhone 12",quantity: 1,price: 100000,transaction: 'Completed'
  //   },
  //   {
  //     orderId: 2003,productName: "iPhone 13",quantity: 1,price: 100000,transaction: 'Completed'
  //   },
  //   {
  //     orderId: 2004,productName: "iPhone 14",quantity: 1,price: 100000,transaction: 'Pending'
  //   }
  // ]


  //task 3-- password weak or strong

  // password: string = "";
  // result: string = "";
  // loginSuccess: boolean = false;
  // loginFailed: boolean = false;
  // passwordStrength: string = "";
  // passmatch: string = "";
  // cpassword: string = "";
  // score: number = 25;

  // confirmPassword() :void{
  //   if(this.password==='password'){
  //     this.passmatch = "Password Matched";
  //   }
  //   else{
  //     this.passmatch = "Password Not Matched";
  //   }
  // }


  // checkPassword() :void{
  //   let reS = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  //   let reG = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  //   if(reS.test(this.password)) {
  //     this.passwordStrength = "strong";
  //   }else if(reG.test(this.password)) {
  //     this.passwordStrength = "good";
  //   }else {
  //     this.passwordStrength = "weak";
  //   }
  // };

  // validate = ():void => {
  //   this.checkPassword()
  //   this.confirmPassword()
  //   if(this.password === 'sahil' && this.password === 'sahil') {
  //     this.result =  'Login successful'
  //     this.loginSuccess = true
  //     this.loginFailed = false
  //   }else {
  //     this.result = 'Login Failed'
  //     this.loginFailed = true
  //     this.loginSuccess = false
  //   }

    // validate() {
    //   if (this.login.userid === "sahil" && this.login.password === "sahil") {
  
    //     // this.result="Success";
    //     // alert("Success")
    //     this.loginSuccess = true;
    //     this.loginFailed = false;
    //   }
  
  
      // else {
      //   // this.result="Failed"
      //   this.loginSuccess = false
      //   this.loginFailed = true;
      //   // alert("Failed")
      // }
// today : string="";
// myInputMessage: string ="I am parent component";
// constructor(private DateService: DateService) {

//     }

//     ngOnInit() {
// this.today=this.DateService.getTodayDate();
//     }
  // }
  
  // validate() {
  //   if (this.password.userid === "sahil" && this.login.password === "sahil") {

  //     // this.result="Success";
  //     // alert("Success")
  //     this.loginSuccess = true;
  //     this.loginFailed = false;
  //   }
  //   else {
  //     // this.result="Failed"
  //     this.loginSuccess = false
  //     this.loginFailed = true;
  //     // alert("Failed")
  //   }




// class Order {
//  orderId:any;
//  productName:string=""
//  quantity:number=1;
//  billAmount:number=1;
//  transaction:string=""
// }
// GetChildData(data:any) {
//   console.log(data);
  
// }
// message: string="";
// count: number = 0; 
//  courseReg(courseName: string) {
//   this.message = `Your registration for ${courseName} is successful`;
//  }

// updateFromChild($event:number){
// this.count = $event;



courseitems: any[] = [{name: 'Node Js', id: 1}, {name: 'Typescript', id: 2}, {name: 'Angular', id: 3}, {name: 'React Js', id: 4}];
  selectedCourseValue = 1;
 }
  

