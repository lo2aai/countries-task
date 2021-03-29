import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponentsModule } from './components/components.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    sharedComponentsModule
  ],
  exports: [
    sharedComponentsModule
  ]
})
export class SharedModule { }
