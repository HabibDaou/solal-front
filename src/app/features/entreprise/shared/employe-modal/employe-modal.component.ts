import { Component, Inject, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '@fuse/animations';
import { ConfirmationModalComponent } from '../../../../shared/components/confirmation-modal/confirmation-modal.component';
import { ToastService } from '../../../../shared/services/toast.service';
import { UserService } from '../../../../shared/services/user.service';
import { UserModalComponent } from '../../../custumers/shared/Modals/user-modal/user-modal.component';

@Component({
  selector: 'app-employe-modal',
  templateUrl: './employe-modal.component.html',
  styleUrls: ['./employe-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class EmployeModalComponent implements OnInit {
  public AddUserForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<UserModalComponent>,
     private userService: UserService,  
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
      password: new FormControl(
        this.data?.data ? this.data.data.password : "",  Validators.required),
      phone: new FormControl( this.data?.data? this.data.data.phone : 0,  Validators.required),
      civility: new FormControl(
        this.data?.data? this.data.data.civility : ""),
      post: new FormControl(
        this.data?.data ? this.data.data.post : ""  ),
      socialReason: new FormControl(
        this.data?.data ? this.data.data.socialReason : "" ),
     
  });
}

adduser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}


Edituser(): void {
  this.dialogRef.close(this.AddUserForm.value);
}
}
