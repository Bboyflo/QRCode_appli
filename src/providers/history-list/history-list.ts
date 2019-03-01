import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HistoryListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HistoryListProvider {

  public listQRCodeGenerate: Array<string>;
  
  constructor(public http: HttpClient) {
    this.listQRCodeGenerate = new Array<string>();
  }

  setListHistory(infoGenerate: string){
    this.listQRCodeGenerate.push(infoGenerate);
  }

  getListHistory(){
    return this.listQRCodeGenerate;
  }

}
