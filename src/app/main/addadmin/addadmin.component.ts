import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddadminService } from 'src/app/service/addadmin.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  constructor(private adminServiece:AddadminService) { }

  ngOnInit(): void {
  }

  submitted=false

  addadminform = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    password: new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@#$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
    contactNumber: new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  })

  addAdmin(){
    this.submitted=true;
    if(this.addadminform.valid){
      this.adminServiece.addAdmin(this.addadminform.value).subscribe((res)=>{
        if(res.error==true){
          Swal.fire('info','This email is already used', 'info')
        }else if(res.error==false){
          this.submitted=false;
          this.addadminform.reset();
          Swal.fire('success',"Added", 'success')
        }else{
          Swal.fire('error','Something Went Wrong!', 'error')
        }
      })
    }
  }

  


}
