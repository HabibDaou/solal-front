import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EmployeListEntrepriseComponent } from './employe-list-entreprise/employe-list-entreprise.component';
import { EmployeModalComponent } from './shared/employe-modal/employe-modal.component';
import { MapComponent } from './shared/map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationModalModule } from '../../shared/components/confirmation-modal/confirmation-modal.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { FuseSidebarModule, FuseWidgetModule } from '../../../@fuse/components';
import { MatDialogModule } from '@angular/material/dialog';
import { EntrepriseComponent } from './entreprise.component';


@NgModule({
  declarations: [EmployeListEntrepriseComponent, EmployeModalComponent, MapComponent,EntrepriseComponent],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    HttpClientModule,
    ConfirmationModalModule,
    MatAutocompleteModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatTabsModule,
    FuseSharedModule,
    FuseSidebarModule,
    FuseWidgetModule,
    MatDialogModule
  ]
})
export class EntrepriseModule { }
