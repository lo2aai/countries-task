import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponentsModule } from './components/components.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from "@angular/material/form-field";





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    sharedComponentsModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  exports: [
    sharedComponentsModule,
    MatSnackBarModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
