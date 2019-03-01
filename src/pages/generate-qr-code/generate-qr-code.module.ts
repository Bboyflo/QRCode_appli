import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerateQrCodePage } from './generate-qr-code';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    GenerateQrCodePage
  ],
  imports: [
    IonicPageModule.forChild(GenerateQrCodePage),
    QRCodeModule
  ],
})
export class GenerateQrCodePageModule {}
