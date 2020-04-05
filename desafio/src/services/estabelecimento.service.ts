import { EstabelecimentoModel, IEstabelecimentoModel } from '../models';
import { BaseService } from './base.service';
export class EstabelecimentoService extends BaseService<IEstabelecimentoModel> {
  constructor() {
    super(EstabelecimentoModel);
  }
}
