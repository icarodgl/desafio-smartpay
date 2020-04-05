import { Schema, model } from 'mongoose';
import { IEstabelecimentoModel } from './estabelecimento.interface';

const EstabelecimentoSchema = new Schema<IEstabelecimentoModel>({
  nome: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
});

export default model<IEstabelecimentoModel>(
  'Estabelecimento',
  EstabelecimentoSchema,
);
