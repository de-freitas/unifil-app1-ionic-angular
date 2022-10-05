import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-sou-empresa',
  templateUrl: './sou-empresa.page.html',
  styleUrls: ['./sou-empresa.page.scss'],
})
export class SouEmpresaPage implements OnInit {
  nome: String = '';
  cnpj: String = '';
  endereco: String = '';
  telefone: String = '';
  email: String = '';
  senha: String = '';

  constructor(public toastController: ToastController, public navCtrl: NavController, private service: ApiRequestService) { }

  async helpButtonEmp() {
    const toast = await this.toastController.create({
      message: "Aqui você pode cadastrar a sua empresa. Caso queira, insira as informações solicitadas e clique em 'Salvar'.",
      duration: 3000,
      buttons: [
        {
          icon: 'checkmark-done-outline',
          role: 'cancel',
        }
      ]
    })
    toast.present();
  };

  ngOnInit(): void {

  }

  saveEmpresa() {
    var dados: any = {
      cnpj: this.cnpj,
      email: this.email,
      cidade: this.endereco,
      nomeRazaoSocial: this.nome,
      senha: this.senha,
      telefone: this.telefone
    };

    this.service.saveEmpresa(dados).subscribe(
      (data) => {
        this.mensagem('Empresa cadastrada com sucesso!');
        this.navCtrl.navigateForward('/empresa-autenticacao');
      },
      (erro) => this.mensagem(erro.error.message)      
    );
  }

  async mensagem(mensagem: string) {
    const toast = await this.toastController.create({
      message: mensagem,
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
}