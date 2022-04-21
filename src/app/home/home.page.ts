import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public toastController: ToastController) {}


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
  })
    toast.present();
  };
}

