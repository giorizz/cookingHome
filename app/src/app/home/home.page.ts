import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

  constructor() {}


  //INICIO TOTAL DA PÁGINA
  ngOnInit() {
    console.log('onInit')
  }

  //INICIOU O CICLO
  ionViewWillEnter(){
   console.log('ionViewWillEnter')
  }

  //JÁ ESTÁ SENDO EXIBIDA
  ionViewDidEnter(){
    console.log('ionViewDidEnter')
  }

  //PÁGINA ESTÁ DEIXANDO DE SER EXIBIDA
  ionViewWillLeave(){
    console.log('ionViewWillLeave')
  }

  //PÁGINA JÁ NÃO APARECE MAIS
  ionViewDidLeave(){
    console.log('ionViewDidLeave')
  }

  //PÁGINA DESTRUÍDA
  ngOnDestroy(){
    console.log('onDestroy')
  }


}
