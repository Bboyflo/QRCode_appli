import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryListProvider } from '../../providers/history-list/history-list';

/**
 * Generated class for the QrCodeHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-history',
  templateUrl: 'qr-code-history.html',
})
export class QrCodeHistoryPage {

  listHistoryQRCode: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private historyListProvider: HistoryListProvider) {
    this.listHistoryQRCode = this.historyListProvider.getListHistory();
  }
  
}
