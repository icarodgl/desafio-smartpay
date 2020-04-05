import { ProdutoService } from './produto.service';
import { EstabelecimentoService } from './estabelecimento.service';

const produtoService = new ProdutoService();
const estabelecimentoService = new EstabelecimentoService();

export {
  estabelecimentoService,
  EstabelecimentoService,
  produtoService,
  ProdutoService,
};
