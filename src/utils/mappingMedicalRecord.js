const mappingMedicalRecord = {}

mappingMedicalRecord.hematologi = {
    hematologi_rutin: [
        {
            label: 'Hemoglobin',
            name: 'hemoglobin',
            hasil: '',
            satuan: 'gr/dL',
            nilai_normal: {
                laki: '12,0 - 16,0',
                perempuan: '11,0 - 15,0',
                anak: '12,0 - 16,0 ',
            },
        },
        {
            label: 'Hematokrit',
            name: 'hematokrit',
            hasil: '',
            satuan: '%',
            nilai_normal: {
                laki: '40 - 54',
                perempuan: '37 - 47',
                anak: '35 - 49',
            },
        },
        {
            label: 'Leukosit',
            name: 'leukosit',
            hasil: '',
            satuan: 'sel/µl',
            nilai_normal: {
                dewasa: '4.000 - 10.000',
                anak: '4.000 - 12.000',
            },
        },
        {
            label: 'Trombosit',
            name: 'trombosit',
            hasil: '',
            satuan: 'sel/µl',
            nilai_normal: '100.000 - 300.000'
        },
        {
            label: 'Eritrosit',
            name: 'eritrosit',
            hasil: '',
            satuan: 'sel/µl',
            nilai_normal: {
                laki: '4jt - 5,5jt',
                perempuan: '3,5jt - 5jt',
                anak: '3,5jt - 5,2jt',
            },
        }
    ],
    index_eritrosit: [
        {
            label: 'MCV',
            name: 'mcv',
            hasil: '',
            satuan: 'fL',
            nilai_normal: "80 - 100",
        },
        {
            label: 'MCH',
            name: 'mch',
            hasil: '',
            satuan: 'pg',
            nilai_normal: "27 - 34",
        },
        {
            label: 'MCHC',
            name: 'mchc',
            hasil: '',
            satuan: 'g/dL',
            nilai_normal: {
                dewasa: '32 - 36',
                anak: '31 - 37'
            }
        },
        {
            label: 'RDW-SD',
            name: 'rdw_sd',
            hasil: '',
            satuan: 'fL',
            nilai_normal: '35 - 56'
        }
    ],
    laju_endap_darah: {
        hasil: '',
        satuan: 'mmHg',
        nilai_normal: {
            laki: '0 - 15',
            perempuan: '0 - 20',
        },
    },
    jenis_leukosit: [
        {
            label: 'Basofil',
            name: 'basofil',
            hasil: '',
            satuan: '%',
            nilai_normal: '0 - 2'
        },
        {
            label: 'Eosinofil',
            name: 'eosinofil',
            hasil: '',
            satuan: '%',
            nilai_normal: '0 - 6'
        },
        {
            label: 'Neutrofil Batang',
            name: 'neutrofil_batang',
            hasil: '',
            satuan: '%',
            nilai_normal: '0 - 12'
        },
        {
            label: 'Neutrofil Segmen',
            name: 'neutrofil_segmen',
            hasil: '',
            satuan: '%',
            nilai_normal: '50 - 70'
        },
        {
            label: 'Limfosit',
            name: 'limfosit',
            hasil: '',
            satuan: '%',
            nilai_normal: '20 - 40'
        },
        {
            label: 'Monosit',
            name: 'monosit',
            hasil: '',
            satuan: '%',
            nilai_normal: '3 - 15'
        }
    ]
};

mappingMedicalRecord.kimia_klinik = {
    diabetes: [
        {
            label: 'Gula Darah Puasa',
            name: 'gula_darah_puasa',
            hasil: '',
            satuan: 'mg/L',
            nilai_normal: "70 - 115"
        },
        {
            label: 'Gula Darah 2 Jam PP',
            name: 'gula_darah_2_jam_pp',
            hasil: '',
            satuan: 'mg/L',
            nilai_normal: "<= 200"
        },
        {
            label: 'Gula Darah Sewaktu',
            name: 'gula_darah_sewaktu',
            hasil: '',
            satuan: 'mg/L',
            nilai_normal: "<= 200"
        }
    ],
    lipid: [
        {
            label: 'Kolesterol',
            name: 'kolesterol',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "<= 200"
        },
        {
            label: 'HDL Kolesterol',
            name: 'hdl_kolesterol',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "> 35"
        },
        {
            label: 'LDL Kolesterol',
            name: 'ldl_kolesterol',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "< 115"
        },
        {
            label: 'Trigliserida',
            name: 'trigliserida',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: '< 200'
        },
    ],
    fungsi_ginjal: [
        {
            label: 'Ureum',
            name: 'ureum',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "17 - 43"
        },
        {
            label: 'Creatinin',
            name: 'creatinin',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: {
                laki: "0,9 - 1,3",
                perempuan: "0,6 - 1,1",
            }
        },
        {
            label: 'Asam Urat',
            name: 'asam_urat',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: {
                laki: "3,5 - 7,2",
                perempuan: "2,6 - 6,0",
            }
        }
    ],
    fungsi_hati: [
        {
            label: 'SGOT',
            name: 'sgot',
            hasil: '',
            satuan: 'U/L',
            nilai_normal: {
                laki: "< 35",
                perempuan: "< 31",
            }
        },
        {
            label: 'SGPT',
            name: 'sgpt',
            hasil: '',
            satuan: 'U/L',
            nilai_normal: {
                laki: "< 41",
                perempuan: "< 31"
            }
        }
    ]
};

mappingMedicalRecord.urinalisa = {
    makroskopis_kimia: [
        {
            label: 'Warna',
            name: 'warna',
            hasil: '',
            option: [
                "Kuning Muda",
                "Kuning",
                "Kuning Tua",
                "Merah",
            ],
            nilai_normal: "Kuning"
        },
        {
            label: 'Kejernihan',
            name: 'kejernihan',
            hasil: '',
            option: [
                "Jernih",
                "Agak Keruh",
                "Keruh",
                "Sangat Keruh",
            ],
            nilai_normal: "Jernih"
        },
        {
            label: 'Berat Jenis',
            name: 'berat_jenis',
            hasil: '',
            nilai_normal: '1.02 - 1.03',
            note: '',
        },
        {
            label: 'pH',
            name: 'ph',
            hasil: '',
            nilai_normal: '5,0 - 8,0',
            note: '',
        },
        {
            label: 'Glucosa',
            name: 'glucosa',
            hasil: '',
            option: [
                "Negatif",
                "Positif 1",
                "Positif 2",
                "Positif 3",
                "Positif 4",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Protein',
            name: 'protein',
            hasil: '',
            option: [
                "Negatif",
                "Positif 1",
                "Positif 2",
                "Positif 3",
                "Positif 4",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Bilirubin',
            name: 'bilirubin',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Urobilinogen',
            name: 'urobilinogen',
            hasil: '',
            option: [
                "Normal",
                "Abnormal",
            ],
            nilai_normal: "Negatif"
        },
        {
            label: 'Blood',
            name: 'blood',
            hasil: '',
            option: [
                "Negatif",
                "Positif 1",
                "Positif 2",
                "Positif 3",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Keton',
            name: 'keton',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Nitrit',
            name: 'nitrit',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Leukosit Esterase',
            name: 'leukosit_esterase',
            hasil: '',
            option: [
                "Negatif",
                "Positif 1",
                "Positif 2",
                "Positif 3",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
    ],
    sedimen: [
        {
            label: 'Leukosit',
            name: 'leukosit',
            hasil: '',
            satuan: '/ LPB',
            nilai_normal: '0 - 2',
            note: '',
        },
        {
            label: 'Eritrosit',
            name: 'eritrosit',
            hasil: '',
            satuan: '/ LPB',
            nilai_normal: '0 - 1',
            note: '',
        },
        {
            label: 'Epitel',
            name: 'epitel',
            hasil: '',
            satuan: '/ LPK',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "5 - 6",
            note: '',
        },
        {
            label: 'Silinder',
            name: 'silinder',
            hasil: '',
            satuan: '/ LPK',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Kristal',
            name: 'kristal',
            hasil: '',
            satuan: '/ LPK',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Bakteri',
            name: 'bakteri',
            hasil: '',
            option: [
                "Negatif",
                "Positif 1",
                "Positif 2",
                "Positif 3",
            ],
            satuan: "/ LPB",
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Jamur',
            name: 'jamur',
            hasil: '',
            satuan: '/ LPB',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        }
    ]
};

mappingMedicalRecord.napza = [
    {
        label: 'AMP',
        name: 'amp',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'MOP',
        name: 'mop',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'THC',
        name: 'thc',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    }
];

mappingMedicalRecord.imunoserologi = {
    golongan_darah: {
        hasil: '',
        option: [
            "A",
            "B",
            "AB",
            "O",
        ],
        nilai_normal: ""
    },
    rhesus: {
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "",
        note: '',
    },
    hiv: [
        {
            label: 'HIV R1',
            name: 'hiv_r1',
            hasil: '',
            option: [
                "Non Reaktif",
                "Reaktif",
            ],
            nilai_normal: "Non Reaktif",
            note: '',
        },
        {
            label: 'HIV R2',
            name: 'hiv_r2',
            hasil: '',
            option: [
                "Non Reaktif",
                "Reaktif",
            ],
            nilai_normal: "Non Reaktif",
            note: '',
        },
        {
            label: 'HIV R3',
            name: 'hiv_r3',
            hasil: '',
            option: [
                "Non Reaktif",
                "Reaktif",
            ],
            nilai_normal: "Non Reaktif",
            note: '',
        },
    ],
    sifilis: [
        {
            label: 'TPHA',
            name: 'tpha',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'VDRL',
            name: 'vdrl',
            hasil: '',
            option: [
                "Non Reaktif",
                "Reaktif",
            ],
            nilai_normal: "Non Reaktif",
            titer: "",
        },
    ],
    hepatitis: [
        {
            label: 'HBsAg',
            name: 'hb_ag',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Anti HBs',
            name: 'anti_hb',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'HCV',
            name: 'hcv',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
    ],
    widal: [
        {
            label: `<i>Salmonella typhi</i> O`,
            name: 'salmonella_typhi_o',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            titer: '',
        },
        {
            label: `<i>Salmonella typhi</i> H`,
            name: 'salmonella_typhi_h',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            titer: '',
        },
        {
            label: `<i>Salmonella paratyphi</i> AO`,
            name: 'salmonella_paratyphi_ao',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            titer: '',
        },
        {
            label: `<i>Salmonella paratyphi</i> AH`,
            name: 'salmonella_paratyphi_ah',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            titer: '',
        }
    ]
};

mappingMedicalRecord.mikroskopis = {
    makroskopis: [
        {
            label: 'Warna',
            name: 'warna',
            hasil: '',
            option: [
                "Kuning",
                "Coklat",
                "Hitam",
            ],
            nilai_normal: "Kuning - Coklat"
        },
        {
            label: 'Konsistensi',
            name: 'konsistensi',
            hasil: '',
            option: [
                "Lunak",
                "Cair",
                "Keras",
            ],
            nilai_normal: "Lunak"
        },
        {
            label: 'Bau',
            name: 'bau',
            hasil: '',
            option: [
                "Khas",
            ],
            nilai_normal: "Khas"
        },
        {
            label: 'Lendir',
            name: 'lendir',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Darah',
            name: 'darah',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Sisa Makanan',
            name: 'sisa_makanan',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        }
    ],
    mikroskopis: [
        {
            label: 'Leukosit',
            name: 'leukosit',
            hasil: '',
            satuan: '/ LPB',
            nilai_normal: 'Negatif'
        },
        {
            label: 'Eritrosit',
            name: 'eritrosit',
            hasil: '',
            satuan: '/ LPB',
            nilai_normal: 'Negatif'
        },
        {
            label: 'Parasit',
            name: 'parasit',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Telur Cacing',
            name: 'telur_cacing',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Jamur',
            name: 'jamur',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        }
    ],
    bta: {
        hasil: '',
        option: [
            "Negatif",
            "Scanty",
            "Positif 1",
            "Positif 2",
            "Positif 3",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    ims: {
        laki: [
            {
                label: 'PMN',
                name: 'pmn',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            },
            {
                label: `<i>Diplococcus</i>`,
                name: 'diplococcus',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            }
        ],
        perempuan: [
            {
                label: 'PMN',
                name: 'pmn',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            },
            {
                label: `<i>Diplococcus</i>`,
                name: 'diplococcus',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            },
            {
                label: `T. <i>vaginalis</i>`,
                name: 't_vaginalis',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            },
            {
                label: `<i>Candida</i>`,
                name: 'candida',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            },
            {
                label: 'Clue Cell',
                name: 'clue_cell',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            },
            {
                label: 'Bakterial Vaginosis',
                name: 'bakterial_vaginosis',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
                note: '',
            }
        ]
    }
};

mappingMedicalRecord.tcm = [
    {
        label: 'MTB-Rif',
        name: 'mtb_rif',
        hasil: '',
        option: [
            "Terdeteksi",
            "Tidak Terdeteksi",
        ],
        nilai_normal: "Tidak Terdeteksi",
        note: '',
    },
    {
        label: 'Viral Load HIV 1/2',
        name: 'viral_load_hiv_1_2',
        hasil: '',
        option: [
            "Terdeteksi",
            "Tidak Terdeteksi",
        ],
        nilai_normal: "Tidak Terdeteksi",
        note: '',
    }
];

mappingMedicalRecord.lainnya = [
    {
        label: 'HbA1c',
        name: 'hba1c',
        hasil: '',
        satuan: '%',
        nilai_normal: '5,6 - 7,1'
    },
    {
        label: 'HCG (Tes Kehamilan)',
        name: 'hcg',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Dengue NS1',
        name: 'dengue_ns1',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Dengue IgG ',
        name: 'dengue_igg',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Dengue IgM',
        name: 'dengue_igm',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Malaria',
        name: 'malaria',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Chikungunya',
        name: 'chikungunya',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Antigen Covid-19',
        name: 'antigen_covid_19',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Darah Samar',
        name: 'darah_samar',
        hasil: '',
        option: [
            "Negatif",
            "Positif",
        ],
        nilai_normal: "Negatif",
        note: '',
    }
];

export default mappingMedicalRecord;