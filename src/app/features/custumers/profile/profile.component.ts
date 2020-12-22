import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/shared/services/user.service';
import { ToastService } from 'app/shared/services/toast.service';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class ProfileComponent implements OnInit {
  selectedFile: File = null;
  image: any = null;
  isImageLoading: boolean;
  ImageOpen: boolean;

  constructor(public dialog: MatDialog, 
    private userService: UserService,
     private toastService: ToastService,
     private http: HttpClient,
     public sanitization: DomSanitizer,
     private _router: Router) { }
    user : any;
  ngOnInit(): void {
    this.getConnected();
  
  }
  public  getConnected(){
    this.userService.getuser().subscribe(data=>{
    this.user = data;
    console.log(data);
        this.getImageFromService(data);
  });
 
 }

 
onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
}

onUpload() {
    const fd = new FormData();
    fd.append("file", this.selectedFile);
    this.http
        .post("http://localhost:3000/uploads/upload", fd)
        .subscribe((res) => {
            const UserT = this.user;
            UserT.imageUrl = res;
            this.userService.edit(UserT, this.user._id).subscribe(
                user => {
                  console.log(user);
                    this.toastService.success("Photo Edited", "Sucess");
                    this.ImageOpen=false;
                    this.getConnected();

                },
                err => {
                    this.toastService.error("error", "check informations");
                    this.ImageOpen=false;

                }
            );
            console.log(res)});
}

openPhotoEdit(){
this.ImageOpen=true;
}

imageToShow: any;

createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener(
        "load",
        () => {
            this.imageToShow = this.sanitization.bypassSecurityTrustResourceUrl(
                reader.result.toString()
            );
        },
        false
    );

    if (image) {
        reader.readAsDataURL(image);
    }
}
getImageFromService(user : any) {
    this.isImageLoading = true;
    this.getImage(user).subscribe(
        (data) => {
            this.createImageFromBlob(data);
            this.isImageLoading = false;
        },
        (error) => {
            console.log(error);
        }
    );
}
getImage(user :any): Observable<Blob> {
    return this.http.get(
        "http://localhost:3000/uploads/image/"+user.imageUrl,
        { responseType: "blob" }
    );
}

}
