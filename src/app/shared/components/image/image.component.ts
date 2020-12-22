import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from "@angular/platform-browser";
import { UserService } from "app/shared/services/user.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
    selector: "app-image",
    templateUrl: "./image.component.html",
    styleUrls: ["./image.component.scss"],
})
export class ImageComponent implements OnInit {
    selectedFile: File = null;
    image: any = null;
    isImageLoading: boolean;
    constructor(
        private http: HttpClient,
        public sanitization: DomSanitizer,
        private _serviceUser: UserService,
        private _router: Router
    ) {}

    ngOnInit(): void {}

    onFileSelected(event) {
        this.selectedFile = <File>event.target.files[0];
    }

    onUpload() {
        const fd = new FormData();
        fd.append("file", this.selectedFile);
        this.http
            .post("http://localhost:3000/uploads/upload", fd)
            .subscribe((res) => console.log(res));
    }

    onload() {
        this.http
            .get(
                "http://localhost:3000/uploads/image/773d24313f76e9d1ce07f8f6c992c139.PNG"
            )
            .subscribe((res) => (this.image = res));
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
    getImageFromService() {
        this.isImageLoading = true;
        this.getImage().subscribe(
            (data) => {
                this.createImageFromBlob(data);
                this.isImageLoading = false;
            },
            (error) => {
                this.isImageLoading = false;
                console.log(error);
            }
        );
    }
    getImage(): Observable<Blob> {
        return this.http.get(
            "http://localhost:3000/uploads/image/773d24313f76e9d1ce07f8f6c992c139.PNG",
            { responseType: "blob" }
        );
    }
}
