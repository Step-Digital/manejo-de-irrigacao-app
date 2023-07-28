import * as Yup from 'yup';

export const RULES = {
  GENERAL: {
    REQUIRED: 'Preencha todos os campos',
  },
  EMAIL: {
    VALID: 'Digite um email válido',
  },
  PASSWORD: {
    VALID: 'A senha deve conter pelo menos 8 caracteres',
  },
  CEP: {
    VALID: 'Digite um cep válido',
  },
  AREA_PROPRIEDADE: {
    VALID: 'Digite uma área válida',
  },
  CAPACIDADE_CAMPO: {
    VALID: 'Digite uma capacidade de campo válida',
  },
  PONTO_MURCHA: {
    VALID: 'Digite um ponto de murcha válido',
  },
  DENSIDADE: {
    VALID: 'Digite uma densidade válida',
  },
  POTENCIA: {
    VALID: 'Digite uma potência válida',
  },
  VAZAO_MAXIMA: {
    VALID: 'Digite uma vazão máxima válida',
  },
  CONSUMO: {
    VALID: 'Digite um consumo válido',
  },
  VALOR_KW: {
    VALID: 'Digite um valor do kw válido',
  },
  EIFICENCIA_IRRIGACAO: {
    VALID: 'Digite uma eficiência de irrigação válida',
  },
  AREA_TOTAL_PLANTIO: {
    VALID: 'Digite uma área total de plantio válida',
  },
  QUANTIADADE_SETORES: {
    VALID: 'Digite uma quantidade de setores válida',
  },
  AREA_IRRIGADA: {
    VALID: 'Digite uma área irrigada válido',
  },
  ESPACAMENTO_LINHA: {
    VALID: 'Digite um espaçamento entre linhas válido',
  },
  COEFICIENTE_UNIFORMIDADE: {
    VALID: 'Digite coeficiente de uniformidade válido',
  },
  EIFICIENCIA_SISTEMA: {
    VALID: 'Digite uma eficiência do sistema válida',
  },
};

export const loginValidators = Yup.object().shape({
  email: Yup.string().email(RULES.EMAIL.VALID).required(RULES.GENERAL.REQUIRED),
  password: Yup.string().min(8, RULES.PASSWORD.VALID).required(RULES.GENERAL.REQUIRED),
});

export const propertyValidators = Yup.object().shape({
  nome: Yup.string().required(RULES.GENERAL.REQUIRED),
  latitude: Yup.string().required(RULES.GENERAL.REQUIRED),
  longitude: Yup.string().required(RULES.GENERAL.REQUIRED),
  logradouro: Yup.string().required(RULES.GENERAL.REQUIRED),
  numero: Yup.string().required(RULES.GENERAL.REQUIRED),
  complemento: Yup.string().required(RULES.GENERAL.REQUIRED),
  cidade: Yup.string().required(RULES.GENERAL.REQUIRED),
  estado: Yup.string().required(RULES.GENERAL.REQUIRED),
  cep: Yup.string().max(8).required(RULES.GENERAL.REQUIRED),
  area_propriedade: Yup.string().required(RULES.GENERAL.REQUIRED),
});

export const groundValidators = Yup.object().shape({
  tipo_solo: Yup.string().required(RULES.GENERAL.REQUIRED),
  capacidade_campo: Yup.string().required(RULES.GENERAL.REQUIRED),
  ponto_murcha: Yup.string().required(RULES.GENERAL.REQUIRED),
  densidade: Yup.string().required(RULES.GENERAL.REQUIRED),
});

export const bombValidators = Yup.object().shape({
  fabricante: Yup.string().required(RULES.GENERAL.REQUIRED),
  modelo: Yup.string().required(RULES.GENERAL.REQUIRED),
  potencia: Yup.string().required(RULES.GENERAL.REQUIRED),
  vazao_maxima: Yup.string().required(RULES.GENERAL.REQUIRED),
  consumo: Yup.string().required(RULES.GENERAL.REQUIRED),
  valor_kw: Yup.string().required(RULES.GENERAL.REQUIRED),
});

export const systemValidators = Yup.object().shape({
  nome: Yup.string().required(RULES.GENERAL.REQUIRED),
  eficiencia_irrigacao: Yup.number().required(RULES.GENERAL.REQUIRED),
  area_total_plantio: Yup.number().required(RULES.GENERAL.REQUIRED),
  quantidade_setores: Yup.number().required(RULES.GENERAL.REQUIRED),
  tipo_irrigacao: Yup.string().required(RULES.GENERAL.REQUIRED),
  area_irrigada: Yup.number().required(RULES.GENERAL.REQUIRED),
  espacamento_linha: Yup.number().required(RULES.GENERAL.REQUIRED),
  nome_setor: Yup.string().required(RULES.GENERAL.REQUIRED),
  coeficiente_uniformidade: Yup.number().required(RULES.GENERAL.REQUIRED),
  eficiencia_sistema: Yup.number().required(RULES.GENERAL.REQUIRED),
});



