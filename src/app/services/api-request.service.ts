import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private url: String = 'https://jobstart-api.herokuapp.com/api/';
  private options: any = {
    headers: new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'})
  };

  constructor(private httpClient: HttpClient) { }

  getEmpresas() {
    return this.httpClient.get(`${this.url}empresas`);
  }

  saveEmpresa(data: any) {
    return this.httpClient.post(`${this.url}empresas`, JSON.stringify(data), this.options);
  }

  varificarCNPJReceita(cnpj: String){    
    return this.httpClient.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`, this.options);
  }

  verificarCredenciais(data: any){

  }

  getVagas(){
    return this.httpClient.get(`${this.url}vagas`);
  }

  saveVaga(data: any){

  }

  deleteVaga(id: Number){

  }
}
