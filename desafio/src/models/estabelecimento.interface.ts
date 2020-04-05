import { Document } from 'mongoose';
export interface IEstabelecimentoModel extends Document {
  nome: string;
  cnpj: string;
  bairro: string;
  cidade: string;
}
