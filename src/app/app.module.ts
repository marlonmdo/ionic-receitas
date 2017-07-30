import { ReceitasService } from './../services/receitas-service';
import { ListaComprasService } from './../services/lista-compras';
import { EditaReceitaPage } from './../pages/edita-receita/edita-receita';
import { ReceitaPage } from './../pages/receita/receita';
import { ReceitasPage } from './../pages/receitas/receitas';
import { TabsPage } from './../pages/tabs/tabs';
import { ListaComprasPage } from './../pages/lista-compras/lista-compras';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ListaComprasPage,
    ReceitasPage,
    ReceitaPage,
    EditaReceitaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ListaComprasPage,
    ReceitasPage,
    ReceitaPage,
    EditaReceitaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaComprasService,
    ReceitasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
