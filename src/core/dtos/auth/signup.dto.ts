export type SignupDTO = {
  nome: string;
  email: string;
  telefone1: string;
  telefone2: string;
  celular: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento?: string;
  cidade: string;
  estado: string;
  password: string;
  roles: String[];
}