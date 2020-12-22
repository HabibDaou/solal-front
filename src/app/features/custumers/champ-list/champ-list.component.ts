import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { Champservice } from 'app/shared/services/champ.service';
import { ToastService } from 'app/shared/services/toast.service';
import { ChampModalComponent } from '../shared/champ-modal/champ-modal.component';


@Component({
  selector: 'app-champ-list',
  templateUrl: './champ-list.component.html',
  styleUrls: ['./champ-list.component.scss']
})
export class ChampListComponent implements OnInit {
  champDataSource: any;
  @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor(public dialog: MatDialog, private champService: Champservice, private toastService: ToastService) { }

  ngOnInit(): void {
      this.getallchamps();
  }


  openEditChampModal(data): void {
      const dialogRef = this.dialog.open(ChampModalComponent, {
          width: '590px',
          height: '490px',
          data: { data: data }

      });
      dialogRef.afterClosed().subscribe((result) => {
          if (result) {
              this.champService.edit(result, data._id).subscribe(
                  champ => {
                      this.toastService.success("champ Edited", "Sucess");

                  },
                  err => {
                      this.toastService.error("error", "check informations");
                  }
              );
          }
      });
  }
  openAddChampModal(): void {
      const dialogRef = this.dialog.open(ChampModalComponent, {
          width: '590px',
          height: '490px',
      });
      dialogRef.afterClosed().subscribe((result) => {
          if (result) {

              this.champService.Addchamp(result).subscribe(
                  champ => {
                      if (champ) {
                          this.toastService.success("champ added", "Sucess");
                          this.getallchamps();
                      }
                  },
                  error => {
                      this.toastService.error("error", "check informations");
                  }
              );
          }
      });
  }

  getallchamps(): void {
      this.champService
          .getAll()
          .subscribe(
              (data) =>
                  (this.champDataSource = new MatTableDataSource<any>(data))
          );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = [
      "label",
      "superficie",
      "longitude",
      "lattitude",
      "actions",
  ];

  ngOnChanges(changes: SimpleChanges): void {
      if (changes["champDataSource"].currentValue != undefined) {
          this.champDataSource.paginator = this.paginator;
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
              this.champService.delete(id).subscribe(
                  (data2: any) => {
                      console.log(data2);
                      this.toastService.success("champ Deleted", "Sucess");
                      this.getallchamps();
                  },
                  err=>{
                      this.toastService.error("error", "error while delete");

                  }
                  );
          }
      });
  }

}
