import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromoteRoutingModule } from './promote-routing.module';
import { PromotePublicityComponent } from './promote-publicity/promote-publicity.component';
import { PromoteDirectMailComponent } from './promote-direct-mail/promote-direct-mail.component';
import { PromotePushComponent } from './promote-push/promote-push.component';

@NgModule({
  declarations: [PromotePublicityComponent, PromoteDirectMailComponent, PromotePushComponent],
  imports: [
    CommonModule,
    PromoteRoutingModule
  ]
})
export class PromoteModule { }
