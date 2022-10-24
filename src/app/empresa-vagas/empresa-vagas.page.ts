import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll, NavController, ToastController } from '@ionic/angular';
import { ApiRequestService } from '../services/api-request.service';
import { ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-empresa-vagas',
  templateUrl: './empresa-vagas.page.html',
  styleUrls: ['./empresa-vagas.page.scss'],
})
export class EmpresaVagasPage implements OnInit {

  public vagas: any = [];
  idEmpresa: number;

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(public toastController: ToastController, private service: ApiRequestService, public navCtrl: NavController, private route: ActivatedRoute) { }

  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    console.log('abriu');
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll > code below
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      if (parametros['idEmpresa']) {
        this.idEmpresa = parametros['idEmpresa'];
      }
    });
  }

  ionViewWillEnter() {
    this.getVagas();
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

  navigation(idEmpresa: number) {
    this.navCtrl.navigateForward(`/cadastro-vagas/${this.idEmpresa}`);
  }

  deletarVaga(idVaga: number) {
    this.service.deleteVaga(idVaga).subscribe(
      (data) => {
        this.mensagem('Vaga deletada com sucesso!');
        this.getVagas();
      },
      (erro) => this.mensagem(erro.error.message)
    );
  }

  getVagas() {
    this.service.getVagas().subscribe(
      (data) => {
        this.vagas = data;
        this.vagas = this.vagas.filter(x => x.empresa.id == this.idEmpresa)
      },
      (erro) => this.mensagem(erro.error.message)
    );
  }
}





