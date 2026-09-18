import { ApartmentUnit, Amenity, GalleryItem, FAQItem, NearbyPoint } from '../types';

export const INTEREST_FORM_URL = 'https://forms.gle/Yz2zKktUAsM6ZQJ46';

export const APARTMENT_UNITS: ApartmentUnit[] = [
  {
    id: 'unit-studio',
    name: 'Studio Design & Compacto Premium',
    category: 'studio',
    area: 48,
    suites: 1,
    bedrooms: 1,
    bathrooms: 1,
    parkingSpots: 1,
    startingPrice: 420000,
    monthlyEstimate: 2190,
    tag: 'Alta Rentabilidade',
    description: 'Conceito aberto e inteligente com pé-direito elevado, fechadura biométrica e varanda com vista panorâmica. Perfeito para morar ou locação premium.',
    highlights: [
      'Ambientes 100% integrados com iluminação zenital',
      'Ponto para máquina de lavar e bancada em granito',
      'Fechadura digital e cabeamento de fibra óptica',
      'Infraestrutura para ar-condicionado Split Inverter'
    ],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'unit-2suites',
    name: 'Apartamento Elegance 2 Suítes',
    category: '2suites',
    area: 82,
    suites: 2,
    bedrooms: 2,
    bathrooms: 3,
    parkingSpots: 2,
    startingPrice: 790000,
    monthlyEstimate: 3950,
    tag: 'Mais Procurado',
    description: 'Planta versátil com living ampliado integrado à generosa varanda gourmet com churrasqueira a carvão e lavabo independente.',
    highlights: [
      'Varanda gourmet com churrasqueira a carvão embutida',
      'Suíte master com espaço para closet e persiana blackout motorizada',
      '2 vagas de garagem demarcadas e cobertas',
      'Piso em porcelanato 90x90cm retificado nas áreas sociais'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'unit-3suites',
    name: 'Residência Grand Prestige 3 Suítes',
    category: '3suites',
    area: 136,
    suites: 3,
    bedrooms: 3,
    bathrooms: 4,
    parkingSpots: 3,
    startingPrice: 1350000,
    monthlyEstimate: 6800,
    tag: 'Luxo e Conforto',
    description: 'Hall social privativo com elevador inteligente, living em 3 ambientes com pele de vidro, suíte master com hidromassagem e dependência completa.',
    highlights: [
      'Elevador com biometria e hall social privativo',
      'Living panorâmico com 8 metros contínuos de fachada envidraçada',
      'Cozinha gourmet com ilha central e despensa espaçosa',
      '3 vagas de garagem com ponto individual de recarga para carro elétrico'
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'unit-penthouse',
    name: 'Penthouse Duplex Horizon',
    category: 'penthouse',
    area: 218,
    suites: 4,
    bedrooms: 4,
    bathrooms: 6,
    parkingSpots: 4,
    startingPrice: 2490000,
    monthlyEstimate: 11900,
    tag: 'Exclusividade Máxima',
    description: 'Cobertura duplex icônica com piscina de borda infinita privativa, solarium com deck de madeira nobre e vista panorâmica de 360 graus para a cidade.',
    highlights: [
      'Piscina privativa aquecida com borda de vidro suspensa',
      'Rooftop privativo com espaço gourmet externo e lareira ao ar livre',
      '4 vagas soltas de garagem + depósito privativo no subsolo',
      'Suíte master com 42m², cuba dupla e banheira de imersão escultural'
    ],
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80',
    floorPlanImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'am-1',
    title: 'Rooftop com Piscina Infinita',
    description: 'Piscina aquecida a 90m de altura com raia de 25 metros, prainha infantil e deck molhado com vista espetacular.',
    iconName: 'Waves',
    category: 'lazer',
    highlight: true
  },
  {
    id: 'am-2',
    title: 'Varanda Gourmet Integrada',
    description: 'Churrasqueira a carvão com duto exclusivo anti-fumaça e bancada em quartzo stone para reunir quem você ama.',
    iconName: 'UtensilsCrossed',
    category: 'bem-estar',
    highlight: true
  },
  {
    id: 'am-3',
    title: 'Fitness Center High-Tech',
    description: 'Academia completa assinada por especialistas esportivos com esteiras interativas, pesos livres e espaço funcional.',
    iconName: 'Dumbbell',
    category: 'bem-estar',
    highlight: true
  },
  {
    id: 'am-4',
    title: 'Coworking & Meeting Pods',
    description: 'Ambiente climatizado e profissional com internet dedicada, cabines acústicas e sala de reuniões privativa.',
    iconName: 'Briefcase',
    category: 'tecnologia',
    highlight: false
  },
  {
    id: 'am-5',
    title: 'Ponto para Veículo Elétrico',
    description: 'Infraestrutura com medidor individual para recarga de carros elétricos e híbridos em todas as garagens.',
    iconName: 'Zap',
    category: 'tecnologia',
    highlight: false
  },
  {
    id: 'am-6',
    title: 'Segurança com IA e Portaria 24h',
    description: 'Controle de acesso com reconhecimento facial, clausura dupla de pedestres e câmeras térmicas perimetrais.',
    iconName: 'ShieldCheck',
    category: 'seguranca',
    highlight: true
  },
  {
    id: 'am-7',
    title: 'Spa Relax com Sauna Úmida',
    description: 'Sala de relaxamento, hidromassagem aquecida e salas reservadas para massoterapia e tratamentos estéticos.',
    iconName: 'Sparkles',
    category: 'bem-estar',
    highlight: false
  },
  {
    id: 'am-8',
    title: 'Delivery Room Refrigerado',
    description: 'Espaço dedicado e seguro para recebimento de compras online, encomendas de supermercado e delivery térmico.',
    iconName: 'PackageCheck',
    category: 'tecnologia',
    highlight: false
  },
  {
    id: 'am-9',
    title: 'Quadra de Beach Tennis & Poliesportiva',
    description: 'Espaço poliesportivo oficial com areia tratada e iluminação em LED para torneios entre amigos e família.',
    iconName: 'Trophy',
    category: 'lazer',
    highlight: false
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Fachada Arquitetônica Contemporânea',
    category: 'Fachada',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    description: 'Linhas orgânicas com brises metálicos e jardins verticais integrados à paisagem urbana.'
  },
  {
    id: 'gal-2',
    title: 'Living Social com Varanda Gourmet',
    category: 'Apartamento',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'Integração total entre a cozinha americana, sala de jantar e o amplo terraço envidraçado.'
  },
  {
    id: 'gal-3',
    title: 'Suíte Master com Iluminação Zenital',
    category: 'Interiores',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    description: 'Acabamentos em tons neutros, marcenaria planejada de alto padrão e esquadrias termoacústicas.'
  },
  {
    id: 'gal-4',
    title: 'Piscina de Borda Infinita no Pôr do Sol',
    category: 'Lazer',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
    description: 'Deck de madeira certificada e vista inigualável para contemplar os fins de tarde mais bonitos.'
  },
  {
    id: 'gal-5',
    title: 'Lobby Principal com Pé-Direito Duplo',
    category: 'Áreas Comuns',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    description: 'Recepção elegante com curadoria de arte contemporânea e mobiliário assinado por designers consagrados.'
  },
  {
    id: 'gal-6',
    title: 'Espaço Gourmet & Wine Experience',
    category: 'Lazer',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    description: 'Ambiente sofisticado preparado para chefs convidados e encontros com amigos e apreciadores de vinho.'
  }
];

export const NEARBY_POINTS: NearbyPoint[] = [
  { category: 'Natureza & Lazer', name: 'Parque Ibirapuera / Parque Central', distance: '850m', timeMinutes: 3 },
  { category: 'Educação', name: 'Colégio Internacional & Bilíngue', distance: '1.2 km', timeMinutes: 4 },
  { category: 'Gastronomia', name: 'Restaurantes com Guia Michelin & Bistrôs', distance: '400m', timeMinutes: 2 },
  { category: 'Conveniência', name: 'Shopping Jardins & Grifes Internacionais', distance: '1.8 km', timeMinutes: 6 },
  { category: 'Saúde', name: 'Hospital Sírio-Libanês / Albert Einstein Hub', distance: '2.1 km', timeMinutes: 7 },
  { category: 'Mobilidade', name: 'Acesso Direto à Avenida Principal & Metrô', distance: '500m', timeMinutes: 2 }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: 'Como funciona o processo de compra e reserva durante o lançamento?',
    answer: 'Ao clicar no botão "Tenho interesse" e preencher o breve formulário, você entra na lista prioritária de lançamento. Nosso consultor exclusivo entrará em contato para apresentar as condições especiais da tabela zero, disponibilizar o agendamento no apartamento decorado e reservar a sua unidade preferida antes da abertura geral ao público.'
  },
  {
    question: 'Quais são as opções de financiamento e entrada?',
    answer: 'Trabalhamos com condições flexíveis diretamente com a construtora durante a fase de obras (com entrada facilitada dividida em até 36x sem juros remuneratórios) e repasse para financiamento bancário com as menores taxas do mercado através dos principais bancos parceiros (Caixa, Itaú, Bradesco e Santander).'
  },
  {
    question: 'Posso personalizar o layout da planta e os acabamentos?',
    answer: 'Sim! Oferecemos o programa exclusivo de personalização "Tailor Made", permitindo que você opte por banheiros ampliados, sala integrada, automação residencial e escolha de acabamentos em mármore ou porcelanato antes da entrega das chaves.'
  },
  {
    question: 'Os apartamentos possuem garantia e documentação regular?',
    answer: 'Absolutamente. O empreendimento possui patrimônio de afetação instituído, incorporação imobiliária registrada em cartório de imóveis e seguro garantia de entrega de obra.'
  },
  {
    question: 'O empreendimento aceita animais de estimação (Pet Friendly)?',
    answer: 'Sim, o residencial foi planejado para toda a família e conta com Pet Place ao ar livre com obstáculos de agility e Pet Care equipado para banho e tosa.'
  }
];
