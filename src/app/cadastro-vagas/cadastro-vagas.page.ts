import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiRequestService } from '../services/api-request.service';

@Component({
  selector: 'app-cadastro-vagas',
  templateUrl: './cadastro-vagas.page.html',
  styleUrls: ['./cadastro-vagas.page.scss'],
})
export class CadastroVagasPage implements OnInit {
  idEmpresa: number;
  area: string = '';
  cargo: string = '';
  requisitos: string = '';
  beneficios: string = '';
  salario: number = 0.0;

  constructor(private toastController: ToastController, private route: ActivatedRoute, private service: ApiRequestService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      if (parametros['idEmpresa']) {
        this.idEmpresa = parametros['idEmpresa'];
      }
    });
  }

  saveVaga() {
    var dados: any = {
      areaAtuacao: this.area,
      cargo: this.cargo,
      descricao: this.beneficios + this.requisitos,
      empresaId: +this.idEmpresa,
      salario: +this.salario
    };

    this.service.saveVaga(dados).subscribe(
      (data) => {
        this.mensagem('VAGA CADASTRADA COM SUSEXO');
      },
      (erro) => {
        this.mensagem(erro.error.message);
      }
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
