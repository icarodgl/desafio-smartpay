import { Router } from 'express';
import {
  estabelecimentoController,
  produtoController,
  pingController,
} from '../controllers';

const routes = Router();

// Produto routes
routes.get('/produto', produtoController.getAll);
routes.get('/produto/:id', produtoController.getOne);
routes.put('/produto/:id', produtoController.update);
routes.delete('/produto/:id', produtoController.delete);
routes.post('/produto', produtoController.create);

// estabelecimento routes
routes.get('/estabelecimento', estabelecimentoController.getAll);
routes.get('/estabelecimento/:id', estabelecimentoController.getOne);
routes.put('/estabelecimento/:id', estabelecimentoController.update);
routes.delete('/estabelecimento/:id', estabelecimentoController.delete);
routes.post('/estabelecimento', estabelecimentoController.create);

// ping route
routes.get('/', pingController.ping);
// error route
routes.get('/*', pingController.error);

export default routes;
