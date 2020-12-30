import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-entreprise-modal',
  templateUrl: './entreprise-modal.component.html',
  styleUrls: ['./entreprise-modal.component.scss']
})
export class EntrepriseModalComponent implements OnInit {
  public AddEntrepriseForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<EntrepriseModalComponent>,
     @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.initForm();
    
  }

initForm(){
  const isdisaybled = this.data?.data  ? true : false ;

  this.AddEntrepriseForm = new FormGroup({
      label: new FormControl( this.data?.data ? this.data.data.label : "" , Validators.required ),
      adresse: new FormControl(
     this.data?.data ? this.data.data.adresse : "" , Validators.required),
  });
}

addEntreprise(): void {
  this.dialogRef.close(this.AddEntrepriseForm.value);
  
}


EditEntreprise(): void {
  this.dialogRef.close(this.AddEntrepriseForm.value);
}
}
