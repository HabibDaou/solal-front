import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { fuseAnimations } from "@fuse/animations";
import { FormGroup, FormControl } from "@angular/forms";
import { AuthenticationService } from "app/shared/services/authentication.service";
import { Router } from "@angular/router";
import { Validators } from "@angular/forms";
import { UserService } from 'app/shared/services/user.service';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    constructor(
        private authService: AuthenticationService,
        private router: Router,
        private userService: UserService
    ) {
        this.loginForm = new FormGroup({
            email: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required),
        });
    }

    ngOnInit() {}

    login() {
        this.authService.login(this.loginForm.value).subscribe(
            (data) => {
                console.log(data);
                this.authService.saveToken(data.token);
                this.userService.getuser().subscribe(data=>{
                    localStorage.setItem('connectedId',data._id);
                    this.router.navigate( ['/features/home'] );
                })
                
            },
            (error) => {
            }
        );
    }
}
