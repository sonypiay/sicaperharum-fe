const mappingMedicalRecord = {}

mappingMedicalRecord.hematologi = {
    hematologiRutin: {
        hemoglobin: {
            hasil: '',
            satuan: 'gr/dL',
            nilai_normal: {
                laki: '12,0 - 16,0',
                perempuan: '11,0 - 15,0',
                anak: '12,0 - 16,0 ',
            },
        },
        hematokrit: {
            hasil: '',
            satuan: '%',
            nilai_normal: {
                laki: '40 - 54',
                perempuan: '37 - 47',
                anak: '35 - 49',
            },
        },
        leukosit: {
            hasil: '',
            satuan: 'sel/µl',
            nilai_normal: {
                dewasa: '4.000 - 10.000',
                anak: '4.000 - 12.000',
            },
        },
        trombosit: {
            hasil: '',
            satuan: 'sel/µl',
            nilai_normal: '100.000 - 300.000'
        },
        eritrosit: {
            hasil: '',
            satuan: 'juta sel/µl',
            nilai_normal: {
                laki: '4,0 - 5,5',
                perempuan: '3,5 - 5,0',
                anak: '3,5 - 5,2',
            },
        }
    },
    indexEritrosit: {
        mcv: {
            hasil: '',
            satuan: 'fL',
        },
        mch: {
            hasil: '',
            satuan: 'fL',
        },
        mchc: {
            hasil: '',
            satuan: 'fL',
        },
        rdwsd: {
            hasil: '',
            satuan: 'fL',
        }
    },
    lajuEndapDarah: {
        hasil: '',
        satuan: 'mmHg',
        nilai_normal: {
            laki: '0 - 15',
            perempuan: '0 - 20',
        },
    },
    jenisLeukosit: {
        basofil: {
            hasil: '',
            satuan: '%',
            nilai_normal: '0 - 2'
        },
        eosinofil: {
            hasil: '',
            satuan: '%',
            nilai_normal: '0 - 6'
        },
        neutrofil_batang: {
            hasil: '',
            satuan: '%',
            nilai_normal: '0 - 12'
        },
        neutrofil_segmen: {
            hasil: '',
            satuan: '%',
            nilai_normal: '50 - 70'
        },
        limfosit: {
            hasil: '',
            satuan: '%',
            nilai_normal: '20 - 40'
        },
        monosit: {
            hasil: '',
            satuan: '%',
            nilai_normal: '3 - 15'
        }
    }
};

mappingMedicalRecord.kimiaKlinik = {
    diabetes: {
        gulaDarahPuasa: {
            hasil: '',
            satuan: 'mg/L',
            nilai_normal: "70 - 115"
        },
        gulaDarah2jamPP: {
            hasil: '',
            satuan: 'mg/L',
            nilai_normal: "<= 200"
        },
        gulaDarahSewaktu: {
            hasil: '',
            satuan: 'mg/L',
            nilai_normal: "<= 200"
        }
    },
    lipid: {
        kolestrol: {
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "<= 200"
        },
        hdlKolestrol: {
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "> 35"
        },
        ldlKolestrol: {
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "< 115"
        },
        trigliserida: {
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: '< 200'
        },
    },
    fungsiGinjal: {
        ureum: {
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: "17 - 43"
        },
        creatinin: {
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: {
                laki: "0,9 - 1,3",
                perempuan: "0,6 - 1,1",
            }
        },
        asamUrat: {
            hasil: '',
            satuan: 'mg/dL',
            nilai_normal: {
                laki: "3,5 - 7,2",
                perempuan: "2,6 - 6,0",
            }
        }
    },
    fungsiHati: {
        sgot: {
            hasil: '',
            satuan: 'U/L',
            nilai_normal: {
                laki: "< 35",
                perempuan: "< 31",
            }
        },
        sgpt: {
            hasil: '',
            satuan: 'U/L',
            nilai_normal: {
                laki: "< 41",
                perempuan: "< 31"
            }
        }
    }
};

mappingMedicalRecord.urinalisa = {
    makrosopis_kimia: {
        warna: {
            hasil: '',
            option: [
                "Kuning Muda",
                "Kuning",
                "Kuning Tua",
                "Merah",
            ],
            nilai_normal: "Kuning"
        },
        kejernihan: {
            hasil: '',
            option: [
                "Jernih",
                "Agak Keruh",
                "Keruh",
                "Sangat Keruh",
            ],
            nilai_normal: "Jernih"
        },
        beratJenis: {
            hasil: '',
            nilai_normal: '1.002 - 1.030'
        },
        ph: {
            hasil: '',
            nilai_normal: '5,0 - 8,0'
        },
        glucosa: {
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
        protein: {
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
        bilirubin: {
            hasil: '',
            option: [
                "Negatif",
                "Positif",
            ],
            nilai_normal: "Negatif"
        },
        urobilinogen: {
            hasil: '',
            option: [
                "Normal",
                "Abnormal",
            ],
            nilai_normal: "Negatif"
        }
    },
}

export default mappingMedicalRecord;