const mappingMedicalRecord = {}

mappingMedicalRecord.hematologi = {
    hematologi_rutin: [
        {
            label: 'Hemoglobin',
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
            hasil: '',
            satuan: 'sel/µl',
            nilai_normal: {
                dewasa: '4.000 - 10.000',
                anak: '4.000 - 12.000',
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
                laki: '4,0 - 5,5',
                perempuan: '3,5 - 5,0',
                anak: '3,5 - 5,2',
            },
        }
    ],
    index_eritrosit: [
        {
            label: 'MCV',
            hasil: '',
            satuan: 'fL',
            nilai_normal: "80 - 100",
        },
        {
            label: 'MCH',
            hasil: '',
            satuan: 'pg',
            nilai_normal: "27 - 34",
        },
        {
            label: 'MCHC',
            hasil: '',
            satuan: 'g/dL',
            nilai_normal: {
                dewasa: '32 - 36',
                anak: '31 - 37'
            }
        },
        {
            label: 'RDW-SD',
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
};

mappingMedicalRecord.kimia_klinik = {
    diabetes: [
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
    ],
    lipid: [
        {
            label: 'Kolesterol',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "<= 200"
        },
        {
            label: 'HDL Kolesterol',
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "> 35"
        },
        {
            label: 'LDL Kolesterol',
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
    ],
    fungsi_ginjal: [
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
                laki: "0,9 - 1,3",
                perempuan: "0,6 - 1,1",
            }
        },
        {
            label: 'Asam Urat',
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
            hasil: '',
            satuan: 'U/L',
            nilai_normal: {
                laki: "< 35",
                perempuan: "< 31",
            }
        },
        {
            label: 'SGPT',
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
            nilai_normal: "Negatif",
            note: '',
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
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Bilirubin',
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
            hasil: '',
            option: [
                "Normal",
                "Abnormal",
            ],
            nilai_normal: "Negatif",
        },
        {
            label: 'Nitrit',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Keton',
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Blood',
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
            label: 'Leukosit Esterase',
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
            nilai_normal: "5 - 6",
            note: '',
        },
        {
            label: 'Silinder',
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
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Darah',
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
            nilai_normal: "Negatif",
            note: '',
        },
        {
            label: 'Telur Cacing',
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
];

mappingMedicalRecord.lainnya = [
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
        nilai_normal: "Negatif",
        note: '',
    },
    {
        label: 'Dengue NS1',
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