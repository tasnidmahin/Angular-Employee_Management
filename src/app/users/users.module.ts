import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { UsersProfileComponent } from './users-profile/users-profile.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [UsersComponent, UsersProfileComponent],
  imports: [UsersRoutingModule, CommonModule, TableModule, ButtonModule]
})
export class UsersModule {}
