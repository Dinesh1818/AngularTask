import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.css']
})
export class EnrolleesComponent implements OnInit {
  enrolleesList : any = [];
  displayLogout : boolean = true;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.displayLogout = true;
    this.enrolleesList = localStorage.getItem("enrollees");
    if(!this.enrolleesList){
      let list :any= [];
      list = [{"id":1,"name":"John","DOB":"01/01/1990","activationStatus":true},{"id":2,"name":"Peter","DOB":"01/01/1991","activationStatus":false},{"id":3,"name":"dinesh","DOB":"01/11/1989","activationStatus":true},{"id":4,"name":"Johnson","DOB":"11/10/1990","activationStatus":false},{"id":5,"name":"Marsh","DOB":"01/01/1993","activationStatus":true}];
      localStorage.setItem("enrollees",JSON.stringify(list));
      this.enrolleesList = list;
    }
    else{
      this.enrolleesList = JSON.parse(this.enrolleesList);
    }
  }
  logout(){
    localStorage.removeItem("enrollees");
    this.router.navigate(['/login']);
  }
}
