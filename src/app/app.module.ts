import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ShareModule } from './share/share.module';
import { PanelComponent } from './components/panel/panel.component';
import { DevExtremeModule, DxBulletModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxListModule, DxTemplateModule } from 'devextreme-angular';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoadingModule } from 'ngx-loading';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    FormsModule,
    HttpClientModule,
    DxButtonModule,
    DevExtremeModule,
    DxListModule,
    DxCheckBoxModule,
    DxDataGridModule,
    DxTemplateModule,
    DxBulletModule,
    ToastrModule.forRoot(),
    NgxLoadingModule.forRoot({}),
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
