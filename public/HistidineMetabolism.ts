import { Link, Node } from '../dist_layout/dist'

export const nodes: { [key: string]: Node } = {
  M_glu_L_c: {
    id: 'M_glu_L_c',
    x: 93,
    y: 89,
    label: 'L-glutamate(1-)',
    classes: ['metabolite']
  },
  M_urcan_c: {
    id: 'M_urcan_c',
    x: 63,
    y: 40,
    label: 'trans-urocanate',
    classes: ['metabolite']
  },
  M_im4act_m: {
    id: 'M_im4act_m',
    x: 58,
    y: 53,
    label: 'imidazole-4-acetaldehyde',
    classes: ['metabolite']
  },
  M_his_L_c: {
    id: 'M_his_L_c',
    x: 44,
    y: 27,
    label: 'L-histidine',
    classes: ['metabolite']
  },
  M_thf_c: {
    id: 'M_thf_c',
    x: 75,
    y: 84,
    label: '(6S)-5,6,7,8-tetrahydrofolate(2-)',
    classes: ['metabolite']
  },
  M_h_m: {
    id: 'M_h_m',
    x: 91,
    y: 82,
    label: 'proton',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_h2o_m: {
    id: 'M_h2o_m',
    x: 38,
    y: 16,
    label: 'water',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_CE7218_c: {
    id: 'M_CE7218_c',
    x: 49,
    y: 93,
    label: 'S-[2-carboxy-1-(1H-imidazol-4-yl)ethyl]-3-thiolactate',
    classes: ['metabolite']
  },
  M_amet_c: {
    id: 'M_amet_c',
    x: 63,
    y: 48,
    label: 'S-adenosyl-L-methionine',
    classes: ['metabolite']
  },
  M_mhista_c: {
    id: 'M_mhista_c',
    x: 30,
    y: 36,
    label: 'N(tele)-methylhistaminium',
    classes: ['metabolite']
  },
  M_nad_c: {
    id: 'M_nad_c',
    x: 23,
    y: 51,
    label: 'NAD(1-)',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_h2o2_c: {
    id: 'M_h2o2_c',
    x: 25,
    y: 69,
    label: 'hydrogen peroxide',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_hista_c: {
    id: 'M_hista_c',
    x: 66,
    y: 41,
    label: 'histaminium',
    classes: ['metabolite']
  },
  M_carn_c: {
    id: 'M_carn_c',
    x: 8,
    y: 44,
    label: 'carnosine',
    classes: ['metabolite']
  },
  M_gthrd_c: {
    id: 'M_gthrd_c',
    x: 97,
    y: 44,
    label: 'glutathionate(1-)',
    classes: ['metabolite']
  },
  M_nad_m: {
    id: 'M_nad_m',
    x: 62,
    y: 88,
    label: 'NAD(1-)',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_3mlda_c: {
    id: 'M_3mlda_c',
    x: 73,
    y: 5,
    label: '1-methyl-4-imidazoleacetic acid',
    classes: ['metabolite']
  },
  M_coa_c: {
    id: 'M_coa_c',
    x: 37,
    y: 60,
    label: 'coenzyme A(4-)',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_4izp_c: {
    id: 'M_4izp_c',
    x: 31,
    y: 28,
    label: '5-(2-carboxylatoethyl)-4-oxo-4,5-dihydro-1H-imidazol-5-ide',
    classes: ['metabolite']
  },
  M_nadh_c: {
    id: 'M_nadh_c',
    x: 50,
    y: 21,
    label: 'NADH(2-)',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_o2_c: {
    id: 'M_o2_c',
    x: 92,
    y: 45,
    label: 'dioxygen',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_5forthf_c: {
    id: 'M_5forthf_c',
    x: 100,
    y: 4,
    label: '5-formimidoyltetrahydrofolate(2-)',
    classes: ['metabolite']
  },
  M_ahcys_c: {
    id: 'M_ahcys_c',
    x: 88,
    y: 82,
    label: 'S-adenosyl-L-homocysteine',
    classes: ['metabolite']
  },
  M_nadh_m: {
    id: 'M_nadh_m',
    x: 57,
    y: 15,
    label: 'NADH(2-)',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_im4ac_m: {
    id: 'M_im4ac_m',
    x: 45,
    y: 32,
    label: 'imidazol-4-ylacetate',
    classes: ['metabolite']
  },
  M_forglu_c: {
    id: 'M_forglu_c',
    x: 91,
    y: 92,
    label: 'N-formimidoyl-L-glutamate(2-)',
    classes: ['metabolite']
  },
  M_h_c: {
    id: 'M_h_c',
    x: 79,
    y: 6,
    label: 'proton',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_ac_c: {
    id: 'M_ac_c',
    x: 17,
    y: 95,
    label: 'acetate',
    classes: ['metabolite']
  },
  M_nh4_c: {
    id: 'M_nh4_c',
    x: 90,
    y: 73,
    label: 'ammonium',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_im4act_c: {
    id: 'M_im4act_c',
    x: 6,
    y: 94,
    label: 'imidazole-4-acetaldehyde',
    classes: ['metabolite']
  },
  M_im4ac_c: {
    id: 'M_im4ac_c',
    x: 85,
    y: 65,
    label: 'imidazol-4-ylacetate',
    classes: ['metabolite']
  },
  M_h2o_c: {
    id: 'M_h2o_c',
    x: 65,
    y: 54,
    label: 'water',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_co2_c: {
    id: 'M_co2_c',
    x: 51,
    y: 81,
    label: 'carbon dioxide',
    metadata: {
      isSideCompound: true
    },
    classes: ['metabolite']
  },
  M_CE7220_c: {
    id: 'M_CE7220_c',
    x: 44,
    y: 72,
    label: 'S-[2-carboxy-1-(1H-imidazol-4-yl)ethyl]glutathione',
    classes: ['metabolite']
  },
  M_CE2065_c: {
    id: 'M_CE2065_c',
    x: 34,
    y: 1,
    label: 'acetylcarnosine',
    classes: ['metabolite']
  },
  M_accoa_c: {
    id: 'M_accoa_c',
    x: 67,
    y: 15,
    label: 'acetyl-CoA(4-)',
    classes: ['metabolite']
  },
  M_3mldz_c: {
    id: 'M_3mldz_c',
    x: 17,
    y: 21,
    label: '1-methylimidazole-4-acetaldehyde',
    classes: ['metabolite']
  },
  M_CE2089_c: {
    id: 'M_CE2089_c',
    x: 57,
    y: 65,
    label: 'S-[2-carboxy-1-(1 H-imidazol-4-yl)ethyl]-L-cysteine',
    classes: ['metabolite']
  },
  M_CE2088_c: {
    id: 'M_CE2088_c',
    x: 74,
    y: 4,
    label: 'N-acetyl-S-[2-carboxy-1-(1 H-imidazol-4-yl)ethyl]-L-cysteine',
    classes: ['metabolite']
  },
  r_0: {
    id: 'r_0',
    x: 32,
    y: 98,
    label: 'r_0',
    metadata: {
      isReversible: true
    },
    classes: ['reaction']
  },
  r_1: {
    id: 'r_1',
    x: 7,
    y: 49,
    label: 'r_1',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_2: {
    id: 'r_2',
    x: 0,
    y: 21,
    label: 'r_2',
    metadata: {
      isReversible: true
    },
    classes: ['reaction']
  },
  r_3: {
    id: 'r_3',
    x: 65,
    y: 23,
    label: 'r_3',
    metadata: {
      isReversible: true
    },
    classes: ['reaction']
  },
  r_4: {
    id: 'r_4',
    x: 25,
    y: 22,
    label: 'r_4',
    metadata: {
      isReversible: true
    },
    classes: ['reaction']
  },
  r_5: {
    id: 'r_5',
    x: 10,
    y: 26,
    label: 'r_5',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_6: {
    id: 'r_6',
    x: 43,
    y: 36,
    label: 'r_6',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_7: {
    id: 'r_7',
    x: 70,
    y: 98,
    label: 'r_7',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_8: {
    id: 'r_8',
    x: 52,
    y: 24,
    label: 'r_8',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_9: {
    id: 'r_9',
    x: 77,
    y: 8,
    label: 'r_9',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_10: {
    id: 'r_10',
    x: 38,
    y: 57,
    label: 'r_10',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_11: {
    id: 'r_11',
    x: 87,
    y: 4,
    label: 'r_11',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_12: {
    id: 'r_12',
    x: 24,
    y: 36,
    label: 'r_12',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_13: {
    id: 'r_13',
    x: 82,
    y: 51,
    label: 'r_13',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_14: {
    id: 'r_14',
    x: 75,
    y: 99,
    label: 'r_14',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  },
  r_15: {
    id: 'r_15',
    x: 33,
    y: 10,
    label: 'r_15',
    metadata: {
      isReversible: false
    },
    classes: ['reaction']
  }
}

export const links: Link[] = [
  {
    id: 'M_h2o_c -- r_0',
    source: nodes.M_h2o_c,
    target: nodes.r_0
  },
  {
    id: 'M_CE2089_c -- r_0',
    source: nodes.M_CE2089_c,
    target: nodes.r_0
  },
  {
    id: 'r_0 -- M_nh4_c',
    source: nodes.r_0,
    target: nodes.M_nh4_c
  },
  {
    id: 'r_0 -- M_CE7218_c',
    source: nodes.r_0,
    target: nodes.M_CE7218_c
  },
  {
    id: 'M_h2o_c -- r_1',
    source: nodes.M_h2o_c,
    target: nodes.r_1
  },
  {
    id: 'M_o2_c -- r_1',
    source: nodes.M_o2_c,
    target: nodes.r_1
  },
  {
    id: 'M_hista_c -- r_1',
    source: nodes.M_hista_c,
    target: nodes.r_1
  },
  {
    id: 'r_1 -- M_h2o2_c',
    source: nodes.r_1,
    target: nodes.M_h2o2_c
  },
  {
    id: 'r_1 -- M_nh4_c',
    source: nodes.r_1,
    target: nodes.M_nh4_c
  },
  {
    id: 'r_1 -- M_im4act_c',
    source: nodes.r_1,
    target: nodes.M_im4act_c
  },
  {
    id: 'M_urcan_c -- r_2',
    source: nodes.M_urcan_c,
    target: nodes.r_2
  },
  {
    id: 'M_gthrd_c -- r_2',
    source: nodes.M_gthrd_c,
    target: nodes.r_2
  },
  {
    id: 'r_2 -- M_CE7220_c',
    source: nodes.r_2,
    target: nodes.M_CE7220_c
  },
  {
    id: 'M_accoa_c -- r_3',
    source: nodes.M_accoa_c,
    target: nodes.r_3
  },
  {
    id: 'M_carn_c -- r_3',
    source: nodes.M_carn_c,
    target: nodes.r_3
  },
  {
    id: 'r_3 -- M_h_c',
    source: nodes.r_3,
    target: nodes.M_h_c
  },
  {
    id: 'r_3 -- M_CE2065_c',
    source: nodes.r_3,
    target: nodes.M_CE2065_c
  },
  {
    id: 'r_3 -- M_coa_c',
    source: nodes.r_3,
    target: nodes.M_coa_c
  },
  {
    id: 'M_h2o_c -- r_4',
    source: nodes.M_h2o_c,
    target: nodes.r_4
  },
  {
    id: 'M_CE2088_c -- r_4',
    source: nodes.M_CE2088_c,
    target: nodes.r_4
  },
  {
    id: 'r_4 -- M_CE2089_c',
    source: nodes.r_4,
    target: nodes.M_CE2089_c
  },
  {
    id: 'r_4 -- M_ac_c',
    source: nodes.r_4,
    target: nodes.M_ac_c
  },
  {
    id: 'M_nad_c -- r_5',
    source: nodes.M_nad_c,
    target: nodes.r_5
  },
  {
    id: 'M_h2o_c -- r_5',
    source: nodes.M_h2o_c,
    target: nodes.r_5
  },
  {
    id: 'M_3mldz_c -- r_5',
    source: nodes.M_3mldz_c,
    target: nodes.r_5
  },
  {
    id: 'r_5 -- M_nadh_c',
    source: nodes.r_5,
    target: nodes.M_nadh_c
  },
  {
    id: 'r_5 -- M_3mlda_c',
    source: nodes.r_5,
    target: nodes.M_3mlda_c
  },
  {
    id: 'r_5 -- M_h_c',
    source: nodes.r_5,
    target: nodes.M_h_c
  },
  {
    id: 'M_hista_c -- r_6',
    source: nodes.M_hista_c,
    target: nodes.r_6
  },
  {
    id: 'M_amet_c -- r_6',
    source: nodes.M_amet_c,
    target: nodes.r_6
  },
  {
    id: 'r_6 -- M_h_c',
    source: nodes.r_6,
    target: nodes.M_h_c
  },
  {
    id: 'r_6 -- M_ahcys_c',
    source: nodes.r_6,
    target: nodes.M_ahcys_c
  },
  {
    id: 'r_6 -- M_mhista_c',
    source: nodes.r_6,
    target: nodes.M_mhista_c
  },
  {
    id: 'M_his_L_c -- r_7',
    source: nodes.M_his_L_c,
    target: nodes.r_7
  },
  {
    id: 'M_h_c -- r_7',
    source: nodes.M_h_c,
    target: nodes.r_7
  },
  {
    id: 'r_7 -- M_co2_c',
    source: nodes.r_7,
    target: nodes.M_co2_c
  },
  {
    id: 'r_7 -- M_hista_c',
    source: nodes.r_7,
    target: nodes.M_hista_c
  },
  {
    id: 'M_nad_m -- r_8',
    source: nodes.M_nad_m,
    target: nodes.r_8
  },
  {
    id: 'M_im4act_m -- r_8',
    source: nodes.M_im4act_m,
    target: nodes.r_8
  },
  {
    id: 'M_h2o_m -- r_8',
    source: nodes.M_h2o_m,
    target: nodes.r_8
  },
  {
    id: 'r_8 -- M_nadh_m',
    source: nodes.r_8,
    target: nodes.M_nadh_m
  },
  {
    id: 'r_8 -- M_im4ac_m',
    source: nodes.r_8,
    target: nodes.M_im4ac_m
  },
  {
    id: 'r_8 -- M_h_m',
    source: nodes.r_8,
    target: nodes.M_h_m
  },
  {
    id: 'M_his_L_c -- r_9',
    source: nodes.M_his_L_c,
    target: nodes.r_9
  },
  {
    id: 'r_9 -- M_nh4_c',
    source: nodes.r_9,
    target: nodes.M_nh4_c
  },
  {
    id: 'r_9 -- M_urcan_c',
    source: nodes.r_9,
    target: nodes.M_urcan_c
  },
  {
    id: 'M_h2o_c -- r_10',
    source: nodes.M_h2o_c,
    target: nodes.r_10
  },
  {
    id: 'M_4izp_c -- r_10',
    source: nodes.M_4izp_c,
    target: nodes.r_10
  },
  {
    id: 'r_10 -- M_h_c',
    source: nodes.r_10,
    target: nodes.M_h_c
  },
  {
    id: 'r_10 -- M_forglu_c',
    source: nodes.r_10,
    target: nodes.M_forglu_c
  },
  {
    id: 'M_CE2089_c -- r_11',
    source: nodes.M_CE2089_c,
    target: nodes.r_11
  },
  {
    id: 'M_accoa_c -- r_11',
    source: nodes.M_accoa_c,
    target: nodes.r_11
  },
  {
    id: 'r_11 -- M_h_c',
    source: nodes.r_11,
    target: nodes.M_h_c
  },
  {
    id: 'r_11 -- M_CE2088_c',
    source: nodes.r_11,
    target: nodes.M_CE2088_c
  },
  {
    id: 'r_11 -- M_coa_c',
    source: nodes.r_11,
    target: nodes.M_coa_c
  },
  {
    id: 'M_h2o_c -- r_12',
    source: nodes.M_h2o_c,
    target: nodes.r_12
  },
  {
    id: 'M_urcan_c -- r_12',
    source: nodes.M_urcan_c,
    target: nodes.r_12
  },
  {
    id: 'r_12 -- M_4izp_c',
    source: nodes.r_12,
    target: nodes.M_4izp_c
  },
  {
    id: 'M_h2o_c -- r_13',
    source: nodes.M_h2o_c,
    target: nodes.r_13
  },
  {
    id: 'M_o2_c -- r_13',
    source: nodes.M_o2_c,
    target: nodes.r_13
  },
  {
    id: 'M_mhista_c -- r_13',
    source: nodes.M_mhista_c,
    target: nodes.r_13
  },
  {
    id: 'r_13 -- M_h2o2_c',
    source: nodes.r_13,
    target: nodes.M_h2o2_c
  },
  {
    id: 'r_13 -- M_nh4_c',
    source: nodes.r_13,
    target: nodes.M_nh4_c
  },
  {
    id: 'r_13 -- M_3mldz_c',
    source: nodes.r_13,
    target: nodes.M_3mldz_c
  },
  {
    id: 'M_nad_c -- r_14',
    source: nodes.M_nad_c,
    target: nodes.r_14
  },
  {
    id: 'M_h2o_c -- r_14',
    source: nodes.M_h2o_c,
    target: nodes.r_14
  },
  {
    id: 'M_im4act_c -- r_14',
    source: nodes.M_im4act_c,
    target: nodes.r_14
  },
  {
    id: 'r_14 -- M_nadh_c',
    source: nodes.r_14,
    target: nodes.M_nadh_c
  },
  {
    id: 'r_14 -- M_im4ac_c',
    source: nodes.r_14,
    target: nodes.M_im4ac_c
  },
  {
    id: 'r_14 -- M_h_c',
    source: nodes.r_14,
    target: nodes.M_h_c
  },
  {
    id: 'M_h_c -- r_15',
    source: nodes.M_h_c,
    target: nodes.r_15
  },
  {
    id: 'M_forglu_c -- r_15',
    source: nodes.M_forglu_c,
    target: nodes.r_15
  },
  {
    id: 'M_thf_c -- r_15',
    source: nodes.M_thf_c,
    target: nodes.r_15
  },
  {
    id: 'r_15 -- M_5forthf_c',
    source: nodes.r_15,
    target: nodes.M_5forthf_c
  },
  {
    id: 'r_15 -- M_glu_L_c',
    source: nodes.r_15,
    target: nodes.M_glu_L_c
  }
]
