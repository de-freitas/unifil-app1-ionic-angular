import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {
  private url: String = 'http://ec2-3-95-255-76.compute-1.amazonaws.com:8080/api/';
  private options: any = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
  };

  constructor(private httpClient: HttpClient) { }

  getEmpresas() {
    return this.httpClient.get(`${this.url}empresas`);
  }

  saveEmpresa(data: any) {
    return this.httpClient.post(`${this.url}empresas`, JSON.stringify(data), this.options);
  }

  varificarCNPJReceita(cnpj: String) {
    return this.httpClient.get(`https://receitaws.com.br/v1/cnpj/${cnpj}`, this.options);
  }

  verificarCredenciais(data: any) {
    return this.httpClient.post(`${this.url}usuarios`, JSON.stringify(data), this.options);
  }

  getVagas() {
    return this.httpClient.get(`${this.url}vagas`);
  }

  saveVaga(data: any) {
    return this.httpClient.post(`${this.url}vagas`, JSON.stringify(data), this.options);
  }

  deleteVaga(id: Number) {
    return this.httpClient.delete(`${this.url}vagas/${id}`);
  }
}
