import { Document } from 'mongoose';
export interface IProdutoModel extends Document {
  nome: string;
  categoria: string;
  estabelecimento: string;
}
