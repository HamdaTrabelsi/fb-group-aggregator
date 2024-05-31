import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookIntegrationRoutingModule } from './facebook-integration-routing.module';
import { TestingComponentComponent } from './testing-component/testing-component.component';


@NgModule({
  declarations: [
    TestingComponentComponent
  ],
  imports: [
    CommonModule,
    FacebookIntegrationRoutingModule
  ]
})
export class FacebookIntegrationModule { }
