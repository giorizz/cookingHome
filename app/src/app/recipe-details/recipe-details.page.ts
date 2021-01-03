import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit, OnDestroy {

  constructor() {

   }

  //INICIO TOTAL DA PÁGINA
  ngOnInit() {
    alert('Aqui está sua receita')
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
    alert('Você voltou para a lista de receitas')
  }




}
