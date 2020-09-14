import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-enrollee',
  templateUrl: './edit-enrollee.component.html',
  styleUrls: ['./edit-enrollee.component.css']
})
export class EditEnrolleeComponent implements OnInit {
  enrolleeList : any =[];
  editForm: FormGroup;
  statuses : any = [];
  id: Number;
  result : any;
  displaySuccess: boolean = false;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.enrolleeList = JSON.parse(localStorage.getItem("enrollees")); 
    let index = this.enrolleeList.findIndex(ele => ele.id == this.id);
    this.statuses = [true,false];
    if(index!=-1){
      this.result = this.enrolleeList[index];
      this.editForm = this.formBuilder.group({       
        id: {value:this.result.id,disabled:true},
        name: [this.result.name, [Validators.required]],
        DOB: {value:this.result.DOB,disabled:true},
        activationStatus : [this.result.activationStatus, [Validators.required]]
    });
    
    }
  }
  onSubmit(){
    if(this.editForm.invalid){
      return;
    }
    this.displaySuccess = false;
    let values = this.editForm.value;
    this.result['name'] = values['name'];
    this.result['activationStatus'] = values['activationStatus'];    
    let index = this.enrolleeList.findIndex(ele => ele.id == this.id);
    this.enrolleeList[index] = this.result;
    localStorage.setItem("enrollees",JSON.stringify(this.enrolleeList));
    this.displaySuccess = true;
    setTimeout(() => {
      this.router.navigate(['/enrollees']);
    },2500);
  }

  back(){
    this.router.navigate(['/enrollees']);
  }

  logout(){
    localStorage.removeItem("enrollees");
    this.router.navigate(['/login']);
  }
}
