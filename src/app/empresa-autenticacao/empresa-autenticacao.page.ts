import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa-autenticacao',
  templateUrl: './empresa-autenticacao.page.html',
  styleUrls: ['./empresa-autenticacao.page.scss'],
})
export class EmpresaAutenticacaoPage{

  constructor(public toastController: ToastController, public navCtrl: NavController) { }

  async helpButton() {
    const toast = await this.toastController.create({
      message: "Insira o CNPJ e a Senha para autenticar. Caso ainda não tenha cadastro, clique aqui >>> </strong>",
      duration: 3000,
      buttons: [
        {
          icon: 'return-up-forward-outline',
          cssClass: 'icon',
          role: 'cancel',    
          side: 'end',
          handler: () => {
            
            this.navigation('sou-empresa');
      } 
        }
      ]
    });

    toast.present();
  
  };

  navigation(page) {
    this.navCtrl.navigateForward(page);
  }
  // ngOnInit() {
  // }

}
