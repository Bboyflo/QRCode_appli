import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { GenerateQrCodePage } from '../pages/generate-qr-code/generate-qr-code';
import { QrCodeHistoryPage } from '../pages/qr-code-history/qr-code-history';
import { ReadQrCodePage } from '../pages/read-qr-code/read-qr-code';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HistoryListProvider } from '../providers/history-list/history-list';
import { FileChooser } from '@ionic-native/file-chooser/ngx';


@NgModule({
  declarations: [
    MyApp,
    GenerateQrCodePage,
    QrCodeHistoryPage,
    ReadQrCodePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GenerateQrCodePage,
    QrCodeHistoryPage,
    ReadQrCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileChooser,
    QrCodeProvider,
    BarcodeScanner,
    SocialSharing,
    HistoryListProvider,
    HistoryListProvider
  ]
})
export class AppModule {}
