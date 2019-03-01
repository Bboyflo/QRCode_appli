import { Component } from '@angular/core';
import { QrCodeProvider } from '../../providers/qr-code/qr-code';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HistoryListProvider } from '../../providers/history-list/history-list';

/**
 * Generated class for the GenerateQrCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generate-qr-code',
  templateUrl: 'generate-qr-code.html',
})
export class GenerateQrCodePage {

  encodeData: string;
  public encodedData: string= null;
  public qrCodeVisible: boolean = false;
  public btnShare: boolean = true;
  public dateGenerate: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrCodeProvider: QrCodeProvider
    , private socialSharing: SocialSharing, private historyListProvider: HistoryListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerateQrCodePage');
  }

  encodeText(){
    if (this.encodeData != "") {
      this.qrCodeProvider.generate(this.encodeData).then((url) => {
        this.qrCodeVisible = true
        this.encodedData = url
        this.dateGenerate = new Date();
        this.historyListProvider.setListHistory(this.encodeData + " / Date : " + this.dateGenerate)
        this.btnShare = false
        ,(error) =>
        alert(error)
      });
    }
  }

  share(){
    this.socialSharing.share(null, null, this.encodedData);
  }

}
