<script setup>
import {reactive} from "vue";

const formDataHematologi = reactive({
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
                laki: '4.0 - 5.5',
                perempuan: '3.5 - 5.0',
                anak: '3.5 - 5.2',
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
            nilai_normal: '3 - 152'
        }
    }
})
</script>

<template>
    <h3>Hematologi</h3>
</template>

<style scoped>

</style>