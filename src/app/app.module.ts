import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdGridListModule, MdTabsModule, MdIconModule, MdDialogModule } from '@angular/material';
import { MdDataTableModule } from 'ng2-md-datatable';

import { AppComponent } from './app.component';
import { VisorComponent } from './visor/visor.component';
import { MappingsTableComponent } from './mappings-table/mappings-table.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    VisorComponent,
    MappingsTableComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdGridListModule,
    MdTabsModule,
    MdIconModule,
    MdDialogModule,
    MdDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InfoComponent]
})
export class AppModule { }
