import { NgModule } from '@angular/core';
import {MatToolbarModule,MatGridListModule,MatButtonModule, MatListModule,MatIconModule, MatDividerModule, MatPaginatorModule, MatTableModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';

const MaterialComponents=[
  MatToolbarModule,
  MatGridListModule,
  MatButtonModule,MatListModule,MatIconModule,MatDividerModule,
  MatPaginatorModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule

] ;

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports:[MaterialComponents
  ]
})
export class MaterialModule { }
