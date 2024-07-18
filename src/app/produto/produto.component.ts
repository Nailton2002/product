import { Produto } from './../model/produto';
import { ProdutoService } from './../services/produto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  constructor(private service: ProdutoService) { }

  produtos: Produto[] = []

  produto: Produto = new Produto();

  exibirBotao: boolean = false;

  ngOnInit() {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll()
    .subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  save(produto: Produto): void {
    this.service.save(produto)
    .subscribe(() => {
      this.produto = new Produto();
      this.findAll();
    });
  }


}