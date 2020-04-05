import { Request, Response } from 'express';
import { ProdutoService, produtoService } from '../services';
import { BaseController } from './base.controller';
import { IProdutoModel } from '../models';

class ProdutoController extends BaseController<IProdutoModel, ProdutoService> {
  constructor() {
    super(produtoService, {
      // keys do req.body que serão usados no create
      create: ['nome', 'categoria', 'estabelecimento'],
      // keys do req.body que serão usados no update
      update: ['nome', 'categoria', 'estabelecimento'],
    });
  }
}

export const produtoController = new ProdutoController();
