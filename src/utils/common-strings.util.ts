export default {
  userNotLoggedIn: {
    createAccount: "Crie uma conta gratuitamente",
    haveRegistration: "Já possuo cadastro",
  },
  header: {
    title: 'Recomendação Diária'
  },
  homeLogged: {
    noProperty: 'Você ainda não possui nenhuma cultura cadastrada.',
    addPropertyText1: 'Para calcular a irrigação diária para sua produção agrícola,',
    addPropertyText2: ' cadastre sua propriedade',
    addButton: {
      addCulture: 'Adicionar Cultura',
      addProperty: 'Nova Propriedade'
    }
  },
  modal: {
    title: 'Bem-Vindo!',
    button: 'Boa Irrigação!',
    onboarding1: {
      text1: ' Olá! Seja bem-vindo ao',
      text2: 'App de Manejo de Irrigação.',
      text3: 'Estamos aqui para ajudá-lo a otimizar o uso da água na irrigação de suas culturas.'
    },
    onboarding2: 'Através deste aplicativo, você pode cadastrar as informações sobre as culturas que precisa irrigar com mais eficiência.',
    onboarding3: 'Além disso, você poderá controlar e monitorar seu sistema de irrigação para obter o melhor desempenho para sua produção.',
    onboarding4: 'Estamos aqui para ajudá-lo a ter sucesso com suas culturas! Comece agora para ter acesso a todas as ferramentas e informações.'
  },
  newProperty: {
    header: {
      title: 'Nova Propriedade',
    },
    title: 'Dados da Propriedade',
    insertButton: {
      label: 'Localização da Propriedade',
      text: 'Inserir Manualmente'
    },
    gpsButton: {
      text: 'Detectar via GPS'
    },
    inputs: {
      name: {
        label: 'Nome da Propriedade',
        placeholder: 'Nome da Propriedade...'
      },
      latidude: {
        label: 'Latitude',
        placeholder: 'Ex: 15,23456'
      },
      longitude: {
        label: 'Longitude',
        placeholder: 'Ex: -30,67890.'
      },
      street: {
        label: 'Logradouro',
        placeholder: 'Rua, Travessa, Estrada...'
      },
      number: {
        label: 'Número',
        placeholder: 'Número...'
      },
      complement: {
        label: 'Complemento',
        placeholder: 'Complemento...'
      },
      city: {
        label: 'Cidade',
        placeholder: 'Rua, Travessa, Estrada...'
      },
      state: {
        label: 'Estado',
        placeholder: 'Selecione...'
      },
      cep: {
        label: 'CEP',
        placeholder: 'Ex: 00000-000'
      },
      area: {
        label: 'Área da Propriedade',
        placeholder: 'Ex: 10 ha'
      },
    }
  },
  groundInfo: {
    title: 'Dados do Solo',
    addButtonn: 'Adicionar Solo',
    inputs: {
      groundType: {
        label: 'Tipo do Solo',
        placeholder: 'Selecione...'
      },
      capacity: {
        label: 'Capacidade de Campo',
        placeholder: 'Ex: 95%'
      },
      point: {
        label: 'Ponto de Murcha',
        placeholder: 'Ex: 10%'
      },
      density: {
        label: 'Densidade',
        placeholder: 'Ex: 100 g/m³'
      },
    }
  },
  bombInfo: {
    title: 'Dados da Motobomba',
    addButtonn: 'Adicionar Motobomba',
    inputs: {
      manufacturer: {
        label: 'Fabricante',
        placeholder: 'Fabricante...'
      },
      model: {
        label: 'Modelo',
        placeholder: 'Modelo...'
      },
      power: {
        label: 'Potência',
        placeholder: 'Ex: 500w'
      },
      flowRate: {
        label: 'Vazão Máxima',
        placeholder: 'Ex: 500 m³/ha'
      },
      consumption: {
        label: 'Consumo da Bomba',
        placeholder: 'Ex: 500 kw/h'
      },
      value: {
        label: 'Valor do Kw',
        placeholder: 'Ex: R$ 00,00'
      },
    }
  },
  SystemInfo: {
    title: 'Sistema de Irrigação',
    addButtonn: 'Adicionar Sistema de Irrigação',
    inputs: {
      name: {
        label: 'Nome do Sistema',
        placeholder: 'Nome do sistema...'
      },
      efficiency: {
        label: 'Eficiência de Irrigação',
        placeholder: 'Ex: 95%'
      },
      area: {
        label: 'Área total do Plantio',
        placeholder: 'Ex: 1000 m²'
      },
      sectorQuantity: {
        label: 'Quantidade de Setores',
        placeholder: 'Ex: 1'
      },
      irrigationType: {
        label: 'Tipo de Irrigação',
        placeholder: 'Selecione...'
      },
      sectorName: {
        label: 'Nome do Setor',
        placeholder: 'Digite'
      },
      irrigatedArea: {
        label: 'Área Irrigada',
        placeholder: 'Ex: 300 m²'
      },
      sprinklerFlow: {
        label: 'Vazão do Aspersor',
        placeholder: 'Ex: 2.000 L/H'
      },
      sprinklerSpace: {
        label: 'Espaçamento entre Aspersores',
        placeholder: 'Ex: 10 m'
      },
      linesSpace: {
        label: 'Espaçamento entre Linhas',
        placeholder: 'Ex: 10 m'
      },
      CUC: {
        label: 'Coeficiente de Uniformidade CUC',
        placeholder: 'Ex: 10%'
      },
      efficiencySystem: {
        label: 'Eficiência do Sistema',
        placeholder: 'Ex: 95%'
      },
      issuerFlow: {
        label: 'Vazão do emissor',
        placeholder: 'Ex: 2.000 L/h'
      },
      issuerSpace: {
        label: 'Espaçamento entre emissores',
        placeholder: 'Ex: 10 m'
      },
      wetAreaPercentage: {
        label: 'Percentual de área molhada',
        placeholder: 'Ex: 95%'
      },
      shadedAreaPercentage: {
        label: 'Percentual de área sombreada',
        placeholder: 'Ex: 95%'
      },
    }
  },
  propertyRegistered: {
    title: 'Cadastro concluído',
    subTitle: 'Propriedade Cadastrada',
    regiterCulture: 'Quero cadastrar uma cultura!',
    goBack: 'Voltar para o início',
    content: {
      text1: 'Parabéns, você cadastrou sua propriedade! ',
      text2: 'Tudo agora está pronto para você começar a usar o ',
      text3: 'Manejo de Irrigação ',
      text4: 'e aproveitar as vantagens para sua produção! ',
      text5: 'Para começar, é fácil! Basta ',
      text6: 'cadastrar uma cultura ',
      text7: 'e você terá acesso aos números de irrigação diários para cada cultura em sua propriedade! ',
    }
  },
  CultureInfo: {
    title: 'Nova Cultura',
    subTitle: 'Selecione a cultura',
    button: 'Concluir',
    cultureFinished: 'Cadastro concluído',
    cultureRegistered: 'Cultura Cadastrada',
    gobackButton: 'Voltar para o Início',
    text1: 'Parabéns, você cadastrou uma cultura!',
    text2: 'Volte para o Início e veja os seus números diários de irrigação.',
    inputs: {
      search: {
        label: 'Pesquisar',
        placeholder: 'Digite...'
      },
      culture: {
        label: 'Cultura',
        placeholder: ''
      },
      cultureName: {
        label: 'Nome da Cultura',
        placeholder: 'Ex: Caturra, da Terra...'
      },
      date: {
        label: 'Data do Plantio',
        placeholder: 'Ex: dd/mm/aaaa'
      },
      area: {
        label: 'Área do Plantio',
        placeholder: 'Ex: 1 ha'
      },
      sector: {
        label: 'Setores',
        placeholder: 'Ex: 0'
      },
      stage: {
        label: 'Estágio da Colheita',
        placeholder: 'Automático'
      },
      property: {
        label: 'Propriedade',
        placeholder: 'Selecione...'
      },
      groundType: {
        label: 'Tipo de Solo',
        placeholder: 'Selecione...'
      },
      bomb: {
        label: 'Motobomba',
        placeholder: 'Selecione...'
      },
      irrigationSystem: {
        label: 'Sistema de Irrigação',
        placeholder: 'Selecione...'
      },
    },
  },
  menu: {
    recomendations: 'Recomendação Diária',
    myProperties: 'Minhas Propriedades',
    profile: 'Meu Perfil',
    about: 'Sobre o Projeto',
    close: 'Sair do Aplicativo'
  }
};
