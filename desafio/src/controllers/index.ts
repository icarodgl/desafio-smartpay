import { estabelecimentoController } from './estabelecimento.controller';
import { produtoController } from './produto.controller';
import { PingController } from './ping.controller';

const pingController = new PingController();

export { estabelecimentoController, produtoController, pingController };
