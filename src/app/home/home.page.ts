import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
//

import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public toastController: ToastController, public actionSheetController: ActionSheetController) {}


  async helpButton() {
    const toast = await this.toastController.create({
      message: "Clique em 'SOU EMPRESA' se deseja cadastrar a sua empresa ou uma vaga; em 'SOU ALUNO' se deseja visualizar as vagas disponíveis.",
      duration: 3000,
      buttons: [
        {
          icon: 'checkmark-outline',
          role: 'cancel',
        }
      ]
    });
    toast.present();
  };
  // cria o action sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Sou Empresa',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Cadastrar minha empresa',
        role: 'destructive',
        icon: 'trail-sign-outline',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cadastrar vagas',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    actionSheet.setAttribute('id', 'action-sheet');
    //let routerlink = document.getElementById

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

}




