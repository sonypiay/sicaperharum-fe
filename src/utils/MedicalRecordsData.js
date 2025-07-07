const MedicalRecordsData = [
    {
        name: 'Hematologi',
        value: 'hematologi',
        hasSub: true,
        sub: [
            {
                name: 'Hematologi Rutin',
                value: 'hematologi_rutin',
                multiple: true,
                option: [
                    {
                        label: 'Hemoglobin',
                        hasil: '',
                        satuan: 'gr/dL',
                        nilai_normal: {
                            adult: {
                                L: '12,0 - 16,0',
                                P: '11,0 - 15,0',
                            },
                            child: '12,0 - 16,0 ',
                        },
                    },
                    {
                        label: 'Hematokrit',
                        hasil: '',
                        satuan: '%',
                        nilai_normal: {
                            adult: {
                                L: '40 - 54',
                                P: '37 - 47',
                            },
                            child: '35 - 49',
                        },
                    },
                    {
                        label: 'Leukosit',
                        hasil: '',
                        satuan: 'sel/µl',
                        nilai_normal: {
                            adult: '4.000 - 10.000',
                            child: '4.000 - 12.000',
                        },
                    },
                    {
                        label: 'Trombosit',
                        hasil: '',
                        satuan: 'sel/µl',
                        nilai_normal: '100.000 - 300.000'
                    },
                    {
                        label: 'Eritrosit',
                        hasil: '',
                        satuan: 'juta sel/µl',
                        nilai_normal: {
                            adult: {
                                L: '4,0 - 5,5',
                                P: '3,5 - 5,0',
                            },
                            child: '3,5 - 5,2',
                        },
                    }
                ]
            },
            {
                name: 'Index Eritrosit',
                value: 'index_eritrosit',
                multiple: true,
                option: [
                    {
                        label: 'MCV',
                        hasil: '',
                        satuan: 'fL',
                    },
                    {
                        label: 'MCH',
                        hasil: '',
                        satuan: 'pg',
                    },
                    {
                        label: 'MCHC',
                        hasil: '',
                        satuan: 'g/dL',
                    },
                    {
                        label: 'RDW-SD',
                        hasil: '',
                        satuan: 'fL',
                    }
                ]
            },
            {
                name: 'Laju Endap Darah',
                value: 'laju_endap_darah',
                multiple: false,
                hasil: '',
                satuan: 'mmHg',
                nilai_normal: {
                    L: '0 - 15',
                    P: '0 - 20',
                },
            },
            {
                name: 'Jenis Leukosit',
                value: 'jenis_leukosit',
                multiple: true,
                option: [
                    {
                        label: 'Basofil',
                        hasil: '',
                        satuan: '%',
                        nilai_normal: '0 - 2'
                    },
                    {
                        label: 'Eosinofil',
                        hasil: '',
                        satuan: '%',
                        nilai_normal: '0 - 6'
                    },
                    {
                        label: 'Neutrofil Batang',
                        hasil: '',
                        satuan: '%',
                        nilai_normal: '0 - 12'
                    },
                    {
                        label: 'Neutrofil Segmen',
                        hasil: '',
                        satuan: '%',
                        nilai_normal: '50 - 70'
                    },
                    {
                        label: 'Limfosit',
                        hasil: '',
                        satuan: '%',
                        nilai_normal: '20 - 40'
                    },
                    {
                        label: 'Monosit',
                        hasil: '',
                        satuan: '%',
                        nilai_normal: '3 - 15'
                    }
                ]
            }
        ]
    },
    {
        name: 'Kimia Klinik',
        value: 'kimia_klinik',
        hasSub: true,
        sub: [
            {
                name: 'Diabetes',
                value: 'diabetes',
                multiple: true,
                option: [
                    {
                        label: 'Gula Darah Puasa',
                        hasil: '',
                        satuan: 'mg/L',
                        nilai_normal: "70 - 115"
                    },
                    {
                        label: 'Gula Darah 2 Jam PP',
                        hasil: '',
                        satuan: 'mg/L',
                        nilai_normal: "<= 200"
                    },
                    {
                        label: 'Gula Darah Sewaktu',
                        hasil: '',
                        satuan: 'mg/L',
                        nilai_normal: "<= 200"
                    }
                ]
            },
            {
                name: 'Lipid',
                value: 'lipid',
                multiple: true,
                option: [
                    {
                        label: 'Kolestrol',
                        hasil: '',
                        satuan: 'mg/dL',
                        nilai_normal: "<= 200"
                    },
                    {
                        label: 'HDL Kolestrol',
                        hasil: '',
                        satuan: 'mg/dL',
                        nilai_normal: "> 35"
                    },
                    {
                        label: 'LDL Kolestrol',
                        hasil: '',
                        satuan: 'mg/dL',
                        nilai_normal: "< 115"
                    },
                    {
                        label: 'Trigliserida',
                        hasil: '',
                        satuan: 'mg/dL',
                        nilai_normal: '< 200'
                    },
                ]
            },
            {
                name: 'Fungsi Ginjal',
                value: 'fungsi_ginjal',
                multiple: true,
                option: [
                    {
                        label: 'Ureum',
                        hasil: '',
                        satuan: 'mg/dL',
                        nilai_normal: "17 - 43"
                    },
                    {
                        label: 'Creatinin',
                        hasil: '',
                        satuan: 'mg/dL',
                        nilai_normal: {
                            L: "0,9 - 1,3",
                            P: "0,6 - 1,1",
                        }
                    },
                    {
                        label: 'Asam Urat',
                        hasil: '',
                        satuan: 'mg/dL',
                        nilai_normal: {
                            L: "3,5 - 7,2",
                            P: "2,6 - 6,0",
                        }
                    }
                ]
            },
            {
                name: 'Fungsi Hati',
                value: 'fungsi_hati',
                multiple: true,
                option: [
                    {
                        label: 'SGOT',
                        hasil: '',
                        satuan: 'U/L',
                        nilai_normal: {
                            L: "< 35",
                            P: "< 31",
                        }
                    },
                    {
                        label: 'SGPT',
                        hasil: '',
                        satuan: 'U/L',
                        nilai_normal: {
                            L: "< 41",
                            P: "< 31"
                        }
                    }
                ]
            }
        ]
    },
    {
        name: 'Urinalisa',
        value: 'urinalisa',
        hasSub: true,
        sub: [
            {
                name: 'Makroskopis Kimia',
                value: 'makroskopis_kimia',
                multiple: true,
                option: [
                    {
                        label: 'Warna',
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
                        hasil: '',
                        nilai_normal: '1.002 - 1.030'
                    },
                    {
                        label: 'pH',
                        hasil: '',
                        nilai_normal: '5,0 - 8,0'
                    },
                    {
                        label: 'Glucosa',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif 1",
                            "Positif 2",
                            "Positif 3",
                            "Positif 4",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Protein',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif 1",
                            "Positif 2",
                            "Positif 3",
                            "Positif 4",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Bilirubin',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Urobilinogen',
                        hasil: '',
                        option: [
                            "Normal",
                            "Abnormal",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Nitrit',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Keton',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Eritrosit',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif 1",
                            "Positif 2",
                            "Positif 3",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Leukosit',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif 1",
                            "Positif 2",
                            "Positif 3",
                        ],
                        nilai_normal: "Negatif"
                    },
                ]
            },
            {
                name: 'Sedimen',
                value: 'sedimen',
                multiple: true,
                option: [
                    {
                        label: 'Leukosit',
                        hasil: '',
                        satuan: '/ LPB',
                        nilai_normal: '0 - 2'
                    },
                    {
                        label: 'Eritrosit',
                        hasil: '',
                        satuan: '/ LPB',
                        nilai_normal: '0 - 1'
                    },
                    {
                        label: 'Epitel',
                        hasil: '',
                        satuan: '/ LPK',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "5 - 6"
                    },
                    {
                        label: 'Silinder',
                        hasil: '',
                        satuan: '/ LPK',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Kristal',
                        hasil: '',
                        satuan: '/ LPK',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Bakteri',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif 1",
                            "Positif 2",
                            "Positif 3",
                        ],
                        satuan: "/ LPB",
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Jamur',
                        hasil: '',
                        satuan: '/ LPB',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Lainnya',
                        hasil: '',
                        satuan: '',
                        nilai_normal: '',
                    },
                    {
                        label: 'Lainnya',
                        hasil: '',
                        satuan: '',
                        nilai_normal: '',
                    }
                ]
            }
        ]
    },
    {
        name: 'Napza',
        value: 'napza',
        hasSub: false,
        option: [
            {
                label: 'AMP',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'MOP',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'THC',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            }
        ]
    },
    {
        name: 'Imunoserologi',
        value: 'imunoserologi',
        hasSub: true,
        sub: [
            {
                name: 'Golongan Darah',
                value: 'golongan_darah',
                multiple: false,
                hasil: '',
                option: [
                    "A",
                    "B",
                    "AB",
                    "O",
                ],
                nilai_normal: ''
            },
            {
                name: 'Rhesus',
                value: 'rhesus',
                multiple: false,
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: ''
            },
            {
                name: 'HIV',
                value: 'hiv',
                multiple: true,
                option: [
                    {
                        label: 'HIV R1',
                        hasil: '',
                        option: [
                            "Non Reaktif",
                            "Reaktif",
                        ],
                        nilai_normal: "Non Reaktif"
                    },
                    {
                        label: 'HIV R2',
                        hasil: '',
                        option: [
                            "Non Reaktif",
                            "Reaktif",
                        ],
                        nilai_normal: "Non Reaktif"
                    },
                    {
                        label: 'HIV R3',
                        hasil: '',
                        option: [
                            "Non Reaktif",
                            "Reaktif",
                        ],
                        nilai_normal: "Non Reaktif"
                    },
                    {
                        label: 'TPHA',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'VDRL',
                        hasil: '',
                        option: [
                            "Non Reaktif",
                            "Reaktif",
                        ],
                        nilai_normal: "Non Reaktif",
                        titer: "",
                    },
                    {
                        label: 'HBsAG',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Anti HBs',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'HCV',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    }
                ]
            },
            {
                name: 'Widal',
                value: 'widal',
                multiple: true,
                option: [
                    {
                        label: 'Salmonella Typhi O',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif",
                        titer: '',
                    },
                    {
                        label: 'Salmonella Typhi H',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif",
                        titer: '',
                    },
                    {
                        label: 'Salmonella Paratyphi A0',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif",
                        titer: '',
                    },
                    {
                        label: 'Salmonella Paratyphi AH',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif",
                        titer: '',
                    }
                ]
            }
        ]
    },
    {
        name: 'Mikroskopis',
        value: 'mikroskopis',
        hasSub: true,
        sub: [
            {
                name: 'Makroskopis',
                value: 'makroskopis',
                multiple: true,
                option: [
                    {
                        label: 'Warna',
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
                        hasil: '',
                        option: [
                            "Khas",
                        ],
                        nilai_normal: "Khas"
                    },
                    {
                        label: 'Lendir',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Darah',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Sisa Makanan',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    }
                ]
            },
            {
                name: 'Mikroskopis',
                value: 'mikroskopis',
                multiple: true,
                option: [
                    {
                        label: 'Leukosit',
                        hasil: '',
                        satuan: '/ LPB',
                        nilai_normal: 'Negatif'
                    },
                    {
                        label: 'Eritrosit',
                        hasil: '',
                        satuan: '/ LPB',
                        nilai_normal: 'Negatif'
                    },
                    {
                        label: 'Parasit',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Telur Cacing',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Jamur',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    },
                    {
                        label: 'Lainnya',
                        hasil: '',
                        option: [
                            "Negatif",
                            "Positif",
                        ],
                        nilai_normal: "Negatif"
                    }
                ]
            },
            {
                name: 'BTA',
                value: 'bta',
                multiple: false,
                hasil: '',
                option: [
                    "Negatif",
                    "Scanty",
                    "Positif 1",
                    "Positif 2",
                    "Positif 3",
                ],
                nilai_normal: "Negatif"
            },
            {
                name: 'IMS',
                value: 'ims',
                multiple: false,
                option: {
                    L: [
                        {
                            label: 'PMN',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        },
                        {
                            label: 'Diplocossus',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        }
                    ],
                    P: [
                        {
                            label: 'PMN',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        },
                        {
                            label: 'Diplocossus',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        },
                        {
                            label: 'T Vaginalis',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        },
                        {
                            label: 'Candida',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        },
                        {
                            label: 'Clue Cell',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        },
                        {
                            label: 'Bakterial Vaginosis',
                            hasil: '',
                            option: [
                                "Negatif",
                                "Positif",
                            ],
                            nilai_normal: "Negatif"
                        }
                    ]
                }
            }
        ]
    },
    {
        name: 'TCM',
        value: 'tcm',
        hasSub: false,
        option: [
            {
                label: 'MTB-Rif',
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
                hasil: '',
                option: [
                    "Terdeteksi",
                    "Tidak Terdeteksi",
                ],
                nilai_normal: "Tidak Terdeteksi",
                note: '',
            }
        ]
    },
    {
        name: 'Lainnya',
        value: 'lainnya',
        hasSub: false,
        option: [
            {
                label: 'HbA1c',
                hasil: '',
                satuan: '%',
                nilai_normal: '5,6 - 7,1'
            },
            {
                label: 'HCG (Tes Kehamilan)',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'Dengue NS1',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'Dengue IgG ',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif",
            },
            {
                label: 'Dengue IgM',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'Malaria',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'Chikungunya',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'Antigen Covid-19',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'Darah Samar',
                hasil: '',
                option: [
                    "Negatif",
                    "Positif",
                ],
                nilai_normal: "Negatif"
            },
            {
                label: 'Lainnya',
                hasil: '',
                satuan: '',
                nilai_normal: ''
            },
            {
                label: 'Lainnya',
                hasil: '',
                satuan: '',
                nilai_normal: ''
            },
        ],
    }
];

export default MedicalRecordsData;