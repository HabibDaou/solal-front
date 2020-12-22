import { Component, EventEmitter, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { ToastService } from 'app/shared/services/toast.service';
import { UserService } from 'app/shared/services/user.service';
import { UserModalComponent } from '../shared/Modals/user-modal/user-modal.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
})
export class UsersListComponent implements OnInit {
  userDataSource: any;
  @Output() openConfirmationModalEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor(public dialog: MatDialog, private userService: UserService, private toastService: ToastService) { }

  ngOnInit(): void {
      this.getallcustumers();
  }


  openEditUserModal(data): void {
      const dialogRef = this.dialog.open(UserModalComponent, {
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
      const dialogRef = this.dialog.open(UserModalComponent, {
          width: '590px',
          height: '490px',
      });
      dialogRef.afterClosed().subscribe((result) => {
          if (result) {

              this.userService.Adduser(result).subscribe(
                  user => {
                      if (user) {
                          this.toastService.success("User added", "Sucess");
                          this.getallcustumers();
                      }
                  },
                  error => {
                      this.toastService.error("error", "check informations");
                  }
              );
          }
      });
  }

  getallcustumers(): void {
      this.userService
          .getAll()
          .subscribe(
              (data) =>
                  (this.userDataSource = new MatTableDataSource<any>(data))
          );
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
