import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll, ToastController } from '@ionic/angular';
import { ApiRequestService } from '../services/api-request.service';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-empresa-vagas',
  templateUrl: './empresa-vagas.page.html',
  styleUrls: ['./empresa-vagas.page.scss'],
})
export class EmpresaVagasPage implements OnInit {

  public vagas: any = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  
  constructor(public toastController: ToastController, private service: ApiRequestService) { }

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
      //PERGUNTAR CLAUDIN DEPOIS
      function a() {
        let height = document.getElementById('modal').clientHeight;
        console.log(height);
      }
      this.service.getVagas().subscribe(
        (data) => {
          this.vagas = data;
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



// /////////////////////////////////////////////////////////////////////
// //import { Component, defineInjectable, OnInit } from '@angular/core';
// import { ViewChild } from '@angular/core';
// import { IonInfiniteScroll, ToastController } from '@ionic/angular';
// import { ApiRequestService } from '../services/api-request.service';

// // @Component({
// //   selector: 'app-sou-aluno',
// //   templateUrl: './sou-aluno.page.html',
// //   styleUrls: ['./sou-aluno.page.scss'],
// // })
// // export class SouAlunoPage implements OnInit {
//   // public vagas: any = [];

//   // @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

//   // constructor(public toastController: ToastController, private service: ApiRequestService) { }

//   isModalOpen = false;
//   setOpen(isOpen: boolean) {
//     this.isModalOpen = isOpen;
//     console.log('abriu');
//   }

//   loadData(event) {
//     setTimeout(() => {
//       console.log('Done');
//       event.target.complete();

//       // App logic to determine if all data is loaded
//       // and disable the infinite scroll > code below
//       // if (data.length === 1000) {
//       //   event.target.disabled = true;
//       // }
//     }, 500);
//   }

//   toggleInfiniteScroll() {
//     this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
//   }

//   ngOnInit() {
//     //PERGUNTAR CLAUDIN DEPOIS
//     function a() {
//       let height = document.getElementById('modal').clientHeight;
//       console.log(height);
//     }
//     this.service.getVagas().subscribe(
//       (data) => {
//         this.vagas = data;
//       },
//       (erro) => this.mensagem(erro.error.message)  
//     );
//   }

//   async mensagem(mensagem: string) {
//     const toast = await this.toastController.create({
//       message: mensagem,
//       duration: 3000,
//       buttons: [
//         {
//           icon: 'checkmark-outline',
//           role: 'cancel',
//         }
//       ]
//     });
//     toast.present();
//   };  
// }
