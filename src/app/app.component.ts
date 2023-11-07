import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TrabalhoModel } from './models/trabalho-model';
import { fornecedorService } from './services/fornecedor.service';
import { ParametroFornecedor01 } from './parametros/parametro-fornecedor01';
import { FornecedorModel } from './models/fornecedor-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'frontend';

  inscricaoCrud!: Subscription;

  lsTrabalhos: TrabalhoModel[] = [];

  trabalho: TrabalhoModel = new TrabalhoModel();

  lsFornecedores: FornecedorModel[] = [];

  fornecedor: FornecedorModel = new FornecedorModel();

  constructor(private forencedorservice: fornecedorService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.inscricaoCrud?.unsubscribe();
  }

  getFornecedores() {
    let par = new ParametroFornecedor01();

    par.id_empresa = 1;

    par.orderby = '';

    par.pagina = 0;

    par.contador = 'N';

    par.tamPagina = 0;

    this.inscricaoCrud = this.forencedorservice
      .getFornecedoresParametro_01(par)
      .subscribe(
        (data: FornecedorModel[]) => {
          this.lsFornecedores = data;
          console.log(this.lsFornecedores);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  getFornecedor() {
    let idx = this.lsFornecedores.length - 1;
    this.inscricaoCrud = this.forencedorservice
      .getFornecedor(
        this.lsFornecedores[idx].id_empresa,
        this.lsFornecedores[idx].id_filial,
        this.lsFornecedores[idx].id
      )
      .subscribe(
        (data: FornecedorModel) => {
          this.fornecedor = data;
          this.lsFornecedores = [];
          console.log(this.fornecedor);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  addForncedor() {
    this.fornecedor = this.lsFornecedores[this.lsFornecedores.length - 1];
    this.fornecedor.id = 0;
    this.fornecedor.razao = 'NOVO FORNECEDOR';
    this.inscricaoCrud = this.forencedorservice
      .fornecedorInsert(this.fornecedor)
      .subscribe(
        (data: FornecedorModel) => {
          this.fornecedor = data;
          this.getFornecedores();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  updateFornecedor() {
    this.fornecedor = this.lsFornecedores[this.lsFornecedores.length - 1];
    this.fornecedor.razao = 'FORNECEDOR ALTERADO';
    this.inscricaoCrud = this.forencedorservice
      .fornecedorUpdate(this.fornecedor)
      .subscribe(
        (data: FornecedorModel) => {
          this.fornecedor = data;
          this.lsFornecedores = [];
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  deleteFornecedor() {
    let idx = this.lsFornecedores.length - 1;
    this.inscricaoCrud = this.forencedorservice
      .fornecedorDelete(
        this.lsFornecedores[idx].id_empresa,
        this.lsFornecedores[idx].id_filial,
        this.lsFornecedores[idx].id
      )
      .subscribe(
        (data: any) => {
          this.getFornecedores();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  onGetAll() {
    this.getFornecedores();
  }

  onGetOne() {
    this.getFornecedor();
  }

  onAddOne() {
    this.addForncedor();
  }

  onUpdateOne() {
    this.updateFornecedor();
  }

  onDeleteOne() {
    this.deleteFornecedor();
  }
}
