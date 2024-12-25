import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule, NbUserModule, NbActionsModule, NbSearchModule, NbButtonModule, NbContextMenuModule, NbTableModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { NbCardModule } from '@nebular/theme';;
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NbLayoutModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbTableModule,
    NbSpinnerModule,
    NbActionsModule,
    NbThemeModule.forRoot({ name: 'default' }), // Ou "dark"
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
