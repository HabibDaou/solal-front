import { Component, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationModalComponent } from '../../../shared/components/confirmation-modal/confirmation-modal.component';
import { Entrepriseservice } from '../../../shared/services/entreprise.service';
import { ToastService } from '../../../shared/services/toast.service';
import { EntrepriseModalComponent } from '../shared/entreprise-modal/entreprise-modal.component';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.scss']
})
export class EntrepriseListComponent implements OnInit {
  entrepriseDataSource: any;

  constructor(public dialog: MatDialog, private entrepriseService: Entrepriseservice, private toastService: ToastService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getallcustumers();

  }
  openEditEntrepriseModal(data): void {
    const dialogRef = this.dialog.open(EntrepriseModalComponent, {
        width: '590px',
        height: '490px',
        data: { data: data }

    });
    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
            this.entrepriseService.edit(result, data._id).subscribe(
                entreprise => {
                    this.toastService.success("entreprise Edited", "Sucess");

                },
                err => {
                    this.toastService.error("error", "check informations");
                }
            );
        }
    });
}
openAddentrepriseModal(): void {
    const dialogRef = this.dialog.open(EntrepriseModalComponent, {
        width: '590px',
        height: '490px',
    });
    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
         
            this.route.paramMap.subscribe((routes:any)=>{
            this.entrepriseService.AddEntrepriseTouser(routes.params.id,result).subscribe(
                entreprise => {
                    if (entreprise) {
                      console.log(entreprise)
                        this.toastService.success("entreprise added", "Sucess");
                        this.getallcustumers();
                    }})
                },
                error => {
                    this.toastService.error("error", "check informations");
                }
            );
        }
    });
}

getallcustumers(): void {
    this.route.paramMap.subscribe((routes:any)=>{
    this.entrepriseService.getEntrepriseByuser(routes.params.id).subscribe(data=>{
        console.log(data);
        this.entrepriseDataSource = new MatTableDataSource<any>(data.entreprise );
           
            });
            
    });}


@ViewChild(MatPaginator) paginator: MatPaginator;

displayedColumns: string[] = [
    "label",
    "adresse",
    "actions",
];

ngOnChanges(changes: SimpleChanges): void {
    if (changes["entrepriseDataSource"].currentValue != undefined) {
        this.entrepriseDataSource.paginator = this.paginator;
    }
};


openConfirmationModal(data): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
        panelClass: "confirm-dialog-container",
        width: "390px",

        data: {
            IdData: data,
        },
    });
    dialogRef.afterClosed().subscribe((result) => {
        if (result) {
            this.entrepriseService.delete(data._id).subscribe(
                (data2: any) => {
                    this.toastService.success("entreprise added", "Sucess");
                    this.getallcustumers();
                },
                err=>{
                    this.toastService.error("error", "error while delete");

                }
                );
        }
    });
}
}
