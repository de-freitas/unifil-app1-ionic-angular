import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
//

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public toastController: ToastController, public actionSheetController: ActionSheetController, public navCtrl: NavController) {} 


  async helpButton() {
    const toast = await this.toastController.create({
      message: "Clique em 'SOU EMPRESA' se deseja cadastrar a sua empresa ou uma vaga; em 'SOU ALUNO' se deseja visualizar as vagas disponíveis.",
      duration: 3000,
      buttons: [
        {
          icon: 'checkmark-done-outline',
          role: 'cancel',
        }
      ]
    });
    toast.present();
  };
  // cria o action sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Cadastrar minha empresa',
        role: 'destructive',
        icon: 'podium-outline',
        id: 'delete-button',
        handler: () => {
          this.navigation('sou-empresa');
        }
      }, {
        text: 'Cadastrar vagas',
        icon: 'reader-outline',
        handler: () => {
          this.navigation('empresa-autenticacao');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }

  navigation(page) {
    this.navCtrl.navigateForward(page);
  }

}




