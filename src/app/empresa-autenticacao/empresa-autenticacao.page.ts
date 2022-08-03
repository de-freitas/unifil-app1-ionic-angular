import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-autenticacao',
  templateUrl: './empresa-autenticacao.page.html',
  styleUrls: ['./empresa-autenticacao.page.scss'],
})
export class EmpresaAutenticacaoPage{

  constructor(public toastController: ToastController) { }

  async helpButton() {
    const toast = await this.toastController.create({
      message: "Insira o CNPJ e a Senha para autenticar",
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
  // ngOnInit() {
  // }

}
