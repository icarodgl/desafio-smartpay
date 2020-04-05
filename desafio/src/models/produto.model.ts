import { Schema, model } from 'mongoose';
import { IProdutoModel } from './produto.interface';

export const ProdutoSchema = new Schema<IProdutoModel>({
  nome: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
  },
  estabelecimento: {
    type: String,
    required: true,
  },
});

export default model<IProdutoModel>('Produto', ProdutoSchema);
