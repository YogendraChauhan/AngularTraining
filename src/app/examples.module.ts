import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ExamplesComponent } from './examples.component';
import { PageNotFoundComponent } from './examples/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiceComponent } from './examples/service/service.component';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [ExamplesComponent, PageNotFoundComponent, ServiceComponent],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ExamplesRoutingModule
  ],
  providers: [DataService],
  bootstrap: [ExamplesComponent]
})
export class ExamplesModule { }
