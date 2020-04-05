import { ProdutoModel, IProdutoModel } from '../models';
import { BaseService } from './base.service';

export class ProdutoService extends BaseService<IProdutoModel> {
  constructor() {
    super(ProdutoModel);
  }
}
