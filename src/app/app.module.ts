import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommendeComponent } from './commende/commende.component';
import { CommandeComponent } from './commande/commande.component';
import { CommandCreatComponent } from './commande/command-creat/command-creat.component';
import { CommandListComponent } from './commande/command-list/command-list.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitCreatComponent } from './produit/produit-creat/produit-creat.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CommendeComponent,
    CommandeComponent,
    CommandCreatComponent,
    CommandListComponent,
    ProduitComponent,
    ProduitCreatComponent,
    ProduitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
