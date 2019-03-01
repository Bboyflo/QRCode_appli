import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

/**
 * Generated class for the ReadQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-read-qr-code',
  templateUrl: 'read-qr-code.html',
})
export class ReadQrCodePage {

  scannedQRCode = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
     public fileChooser: FileChooser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadQrCodePage');
  }

  scanQRCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedQRCode = barcodeData.text;
    })
  }

  readFileQrCode(){
    this.fileChooser.open()
    .then(uri => uri)
    .catch(e => console.log(e));
  }
}
