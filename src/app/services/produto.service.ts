import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/products`)
  }

  findById(produto: Produto): Observable<Produto>{
    return this.http.get<Produto>(`${API_CONFIG.baseUrl}/products/${produto.id}`);
  }

  save(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${API_CONFIG.baseUrl}/products`, produto);
  }

  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${API_CONFIG.baseUrl}/products/${produto.id}`, produto);
  }

  delete(produto: Produto): Observable<void> {
    return this.http.delete<void>(`${API_CONFIG.baseUrl}/products/${produto.id}`);
  }
  
}
