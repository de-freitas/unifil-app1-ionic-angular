import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-sou-empresa',
  templateUrl: './sou-empresa.page.html',
  styleUrls: ['./sou-empresa.page.scss'],
})
export class SouEmpresaPage implements OnInit{

  constructor(public toastController: ToastController) {}

  async helpButtonEmp() {
    const toast = await this.toastController.create({
      message: "Aqui você pode cadastrar a sua empresa. Caso deseje, insira as informações solicitadas e clique em 'Salvar'.",
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

  ngOnInit(): void {
    
  }
}