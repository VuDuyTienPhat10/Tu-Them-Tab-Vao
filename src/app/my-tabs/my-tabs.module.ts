import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTabsPageRoutingModule } from './my-tabs-routing.module';

import { MyTabsPage } from './my-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyTabsPageRoutingModule
  ],
  declarations: [MyTabsPage]
})
export class MyTabsPageModule {}
