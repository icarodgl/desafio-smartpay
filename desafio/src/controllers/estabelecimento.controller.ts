import { Request, Response } from 'express';
import { EstabelecimentoService, estabelecimentoService } from '../services';
import { BaseController } from './base.controller';
import { IEstabelecimentoModel } from '../models';

class EstabelecimentoController extends BaseController<
  IEstabelecimentoModel,
  EstabelecimentoService
> {
  constructor() {
    super(estabelecimentoService, {
      // keys do req.body que serão usados no create
      create: ['nome', 'cnpj', 'bairro', 'cidade'],
      // keys do req.body que serão usados no update
      update: ['nome', 'cnpj', 'bairro', 'cidade'],
    });
  }
}

export const estabelecimentoController = new EstabelecimentoController();
