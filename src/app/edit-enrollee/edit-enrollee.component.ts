import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';
@Component({
  selector: 'app-edit-enrollee',
  templateUrl: './edit-enrollee.component.html',
  styleUrls: ['./edit-enrollee.component.css']
})
export class EditEnrolleeComponent implements OnInit {
  enrolleeList : any =[];
  editForm: FormGroup;
  statuses : any = [];
  id: any;
  result : any;
  displaySuccess: boolean = false;
  displayError: boolean = false;
  loadData:boolean =true;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router,private httpService: HttpService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.displayError= false;
    this.loadData = true;
    this.httpService.getEnrolleById(this.id).subscribe((response) =>{      
      this.result = response;
      this.editForm = this.formBuilder.group({       
        id: {value:this.result.id,disabled:true},
        name: [this.result.name, [Validators.required]],
        DOB: {value:this.result.dateOfBirth,disabled:true},
        activationStatus : [this.result.active, [Validators.required]]
    });
    this.loadData = false;
    },(error) =>{
      this.loadData = false;
      this.displayError= true;
      console.log("Error while fetching data");
    });    
    this.statuses = [true,false];
    
  }
  onSubmit(){
    if(this.editForm.invalid){
      return;
    }
    this.displaySuccess = false;    
    let values = this.editForm.value;
    this.result['name'] = values['name'];
    this.result['activationStatus'] = values['activationStatus'];
    let obj = {
      "active": values['activationStatus'],
      "name": values['name'],
      "dateOfBirth": this.result.dateOfBirth
    };   
    this.loadData = true; 
    this.httpService.updateEnrollee(obj,this.id).subscribe((response) =>{
      this.loadData = false;
      this.displaySuccess = true;
      setTimeout(() => {
        this.router.navigate(['/enrollees']);
      },2500);
    });
    
  }

  back(){
    this.router.navigate(['/enrollees']);
  }

  logout(){    
    this.router.navigate(['/login']);
  }
}
