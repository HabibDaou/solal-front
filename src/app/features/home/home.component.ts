import { Component, OnInit, OnDestroy } from "@angular/core";
import { startWith, map } from "rxjs/operators";
import { FormControl } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

import { ToastService } from 'app/shared/services/toast.service';

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {


    ngOnInit(): void {
    }

    constructor(
      
        private toastService: ToastService
    ) {
        
    }
    
    

 

}
