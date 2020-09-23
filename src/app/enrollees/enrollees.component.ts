import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-enrollees',
  templateUrl: './enrollees.component.html',
  styleUrls: ['./enrollees.component.css']
})
export class EnrolleesComponent implements OnInit {
  enrolleesList : any = [];
  displayLogout : boolean = true;
  loadData: boolean = true;
  constructor(private route: ActivatedRoute, private router: Router,private httpService: HttpService) { }

  ngOnInit(): void {
    this.displayLogout = true;  
    this.loadData = true;     
      this.httpService.getEnrollees().subscribe(
        (response) =>{          
          this.enrolleesList = response;
          this.loadData = false; 
        },
        (error) =>{
          console.log("err",error);
          this.loadData = false; 
        }
      );

  }
  logout(){    
    this.router.navigate(['/login']);
  }
}
