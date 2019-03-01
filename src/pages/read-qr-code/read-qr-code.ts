import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { FileChooser } from '@ionic-native/file-chooser';
import { Base64 } from '@ionic-native/base64';


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
  public textQrCode: string = null;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner,
     public fileChooser: FileChooser, private base64: Base64) {
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
    let filePath: string;

    this.fileChooser.open()
    .then(uri => filePath = uri)
    .catch(e => console.log(e));

    this.base64.encodeFile(filePath)
    .then((base64File: string) => {
      console.log(base64File);
      this.textQrCode = base64File;
    }, (err) => {
      console.log(err);
    });
  }
}
