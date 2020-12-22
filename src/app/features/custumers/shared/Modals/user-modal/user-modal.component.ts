import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {
  public AddUserForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.initForm();
    
  }

initForm(){
  const isdisaybled = this.data?.data  ? true : false ;

  this.AddUserForm = new FormGroup({
      firstName: new FormControl( this.data?.data ? this.data.data.firstName : "" , Validators.required ),
      lastName: new FormControl(
     this.data?.data ? this.data.data.lastName : "" , Validators.required),
      email: new FormControl(
        this.data?.data ? this.data.data.email : ""  ,  Validators.required),
      password: new FormControl({
       value: this.data?.data ? this.data.data.password : "",disabled:isdisaybled},  Validators.required),
      phone: new FormControl( this.data?.data? this.data.data.phone : 0,  Validators.required),
      civility: new FormControl(
        this.data?.data? this.data.data.civility : ""),
      post: new FormControl(
        this.data?.data ? this.data.data.post : ""  ),
      socialReason: new FormControl(
        this.data?.data ? this.data.data.socialReason : "" ),
      Role: new FormControl({
        value: this.data?.data ? this.data.data.Role : "",disabled:isdisaybled},),
  });
}

adduser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}


Edituser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}
}
