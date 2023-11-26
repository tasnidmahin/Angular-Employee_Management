import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, CommonModule]
})
export class UsersModule {}
