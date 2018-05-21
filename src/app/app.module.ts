import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { TopocadastroComponent } from './topocadastro/topocadastro.component';
import { PrincipalComponent } from './principal/principal.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    TopocadastroComponent,
    PrincipalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
