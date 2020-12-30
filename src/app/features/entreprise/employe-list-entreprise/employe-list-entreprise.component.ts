import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { fuseAnimations } from '../../../../@fuse/animations';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { Entrepriseservice } from '../../../shared/services/entreprise.service';
import { ToastService } from '../../../shared/services/toast.service';
import { UserService } from '../../../shared/services/user.service';
import { EmployeModalComponent } from '../shared/employe-modal/employe-modal.component';

@Component({
  selector: 'app-employe-list-entreprise',
  templateUrl: './employe-list-entreprise.component.html',
  styleUrls: ['./employe-list-entreprise.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class EmployeListEntrepriseComponent implements OnInit {
    userDataSource: any;
    @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<any>();
  
  
    constructor(private route: ActivatedRoute,public dialog: MatDialog, private userService: UserService,private entrepriseService : Entrepriseservice, private toastService: ToastService) { }
  
    ngOnInit(): void {
        this.getEntrepriseEmployee();
    }
  
  
    openEditUserModal(data): void {
        const dialogRef = this.dialog.open(EmployeModalComponent, {
            width: '590px',
            height: '490px',
            data: { data: data }
  
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.userService.edit(result, data._id).subscribe(
                    user => {
                        this.toastService.success("User Edited", "Sucess");
  
                    },
                    err => {
                        this.toastService.error("error", "check informations");
                    }
                );
            }
        });
    }
    openAddUserModal(): void {
        const dialogRef = this.dialog.open(EmployeModalComponent, {
            width: '590px',
            height: '490px',
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.route.paramMap.subscribe((routes:any)=>{
                this.userService.AddEmployee(result,routes.params.id).subscribe(
                    user => {
                        console.log(result);
                        console.log(user);
                        console.log(routes.params.id);
                        if (user) {
                            this.toastService.success("User added", "Sucess");
                            this.getEntrepriseEmployee();
                        }
                    },
                    error => {
                        this.toastService.error("error", "check informations");
                    }
                );
            })
            }
            
        });
        
    }
  
    getEntrepriseEmployee(): void {
        this.route.paramMap.subscribe((routes:any)=>{
        this.userService
            .getEmployees(routes.params.id)
            .subscribe(
                (data) =>
                    (this.userDataSource = new MatTableDataSource<any>(data))
            );
        })
    }
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
    displayedColumns: string[] = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "civility",
        "post",
        "socialReason",
        "actions",
    ];
  
    ngOnChanges(changes: SimpleChanges): void {
        if (changes["userDataSource"].currentValue != undefined) {
            this.userDataSource.paginator = this.paginator;
        }
    };
  
  
    openConfirmationModal(i,id): void {
        const dialogRef = this.dialog.open(ConfirmationModalComponent, {
            panelClass: "confirm-dialog-container",
            width: "390px",
  
            data: {
                IdData: id,
            },
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.userService.delete(id).subscribe(
                    (data2: any) => {
                        console.log(data2);
                        this.toastService.success("User Deleted", "Sucess");
                        this.getEntrepriseEmployee();
                    },
                    err=>{
                        this.toastService.error("error", "error while delete");
  
                    }
                    );
            }
        });
    }
  
}
