import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-empresa-autenticacao',
  templateUrl: './empresa-autenticacao.page.html',
  styleUrls: ['./empresa-autenticacao.page.scss'],
})
export class EmpresaAutenticacaoPage{
  cnpj: string = '';
  senha: string = '';

  constructor(public toastController: ToastController, public navCtrl: NavController,
    private service: ApiRequestService) { }

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

  verificarCredenciais(){
    var dados: any = {
      cnpj: this.cnpj,
      senha: this.senha
    };

    this.service.verificarCredenciais(dados);
    window.location.href = '/home';
  }

}
