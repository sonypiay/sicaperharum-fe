<script setup>
import {onMounted, reactive, ref} from "vue";
import {useSessionStorage} from "@vueuse/core";

defineProps({
    formDataPatient: Object,
})

const dataPatient = ref({});

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
});

onMounted(() => {
    dataPatient.value = JSON.parse(useSessionStorage('form-patient').value ?? "{}");
});
</script>

<template>
    <h3>Hematologi</h3>
    <div class="uk-form-stacked form-section-input" v-if="formDataPatient">
        <form @submit.prevent="false">
            <!-- section input hematologi -->
            <table class="uk-table uk-table-small uk-table-divider table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Hematologi Rutin</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th>Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hemoglobin</td>
                        <td>
                            <input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.hematologiRutin.hemoglobin.hasil" />
                        </td>
                        <td>{{ formDataHematologi.hematologiRutin.hemoglobin.satuan }}</td>
                        <td>
                            <span v-if="formDataPatient.patientType === 'adult'">
                                <span v-if="formDataPatient.gender === 'L'">{{ formDataHematologi.hematologiRutin.hemoglobin.nilai_normal.laki }}</span>
                                <span v-else>{{ formDataHematologi.hematologiRutin.hemoglobin.nilai_normal.perempuan }}</span>
                            </span>
                            <span v-else>{{ formDataHematologi.hematologiRutin.hemoglobin.nilai_normal.anak }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Hematokrit</td>
                        <td>
                            <input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.hematologiRutin.hematokrit.hasil" />
                        </td>
                        <td>{{ formDataHematologi.hematologiRutin.hematokrit.satuan }}</td>
                        <td>
                            <span v-if="formDataPatient.patientType === 'adult'">
                                <span v-if="formDataPatient.gender === 'L'">{{ formDataHematologi.hematologiRutin.hematokrit.nilai_normal.laki }}</span>
                                <span v-else>{{ formDataHematologi.hematologiRutin.hematokrit.nilai_normal.perempuan }}</span>
                            </span>
                            <span v-else>{{ formDataHematologi.hematologiRutin.hematokrit.nilai_normal.anak }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Leukosit</td>
                        <td>
                            <input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.hematologiRutin.leukosit.hasil" />
                        </td>
                        <td>{{ formDataHematologi.hematologiRutin.leukosit.hasil }}</td>
                        <td>
                            <span v-if="formDataPatient.patientType === 'adult'">
                                <span>{{ formDataHematologi.hematologiRutin.leukosit.nilai_normal.dewasa }}</span>
                            </span>
                            <span v-else>{{ formDataHematologi.hematologiRutin.hematokrit.nilai_normal.anak }}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Trombosit</td>
                        <td>
                            <input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.hematologiRutin.trombosit.hasil" />
                        </td>
                        <td>{{ formDataHematologi.hematologiRutin.leukosit.hasil }}</td>
                        <td>{{ formDataHematologi.hematologiRutin.trombosit.nilai_normal }}</td>
                    </tr>
                    <tr>
                        <td>Eritrosit</td>
                        <td>
                            <input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.hematologiRutin.eritrosit.hasil" />
                        </td>
                        <td>{{ formDataHematologi.hematologiRutin.eritrosit.satuan }}</td>
                        <td>
                            <span v-if="formDataPatient.patientType === 'adult'">
                                <span v-if="formDataPatient.gender === 'L'">{{ formDataHematologi.hematologiRutin.eritrosit.nilai_normal.laki }}</span>
                                <span v-else>{{ formDataHematologi.hematologiRutin.eritrosit.nilai_normal.perempuan }}</span>
                            </span>
                            <span v-else>{{ formDataHematologi.hematologiRutin.eritrosit.nilai_normal.anak }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- section input index eritrosit -->
            <table class="uk-table uk-table-small uk-table-divider table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Index Eritrosit</th>
                        <th class="uk-width-small">Nilai</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>MCV</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.indexEritrosit.mcv.hasil" /></td>
                    </tr>
                    <tr>
                        <td>MCH</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.indexEritrosit.mch.hasil" /></td>
                    </tr>
                    <tr>
                        <td>MCHC</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.indexEritrosit.mchc.hasil" /></td>
                    </tr>
                    <tr>
                        <td>RDW-SD</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.indexEritrosit.rdwsd.hasil" /></td>
                    </tr>
                </tbody>
            </table>

            <!-- section input laju endap darah -->
            <table class="uk-table uk-table-small uk-table-divider table-input-lab">
                <thead>
                    <tr>
                        <th colspan="4">Laju Endap Darah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Nilai</th>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.lajuEndapDarah.hasil" /></td>
                    </tr>
                    <tr>
                        <th>Satuan</th>
                        <td>{{ formDataHematologi.lajuEndapDarah.satuan }}</td>
                    </tr>
                    <tr>
                        <th>Nilai Normal</th>
                        <td>
                            <span v-if="formDataPatient.gender === 'L'">{{ formDataHematologi.lajuEndapDarah.nilai_normal.laki }}</span>
                            <span v-else>{{ formDataHematologi.lajuEndapDarah.nilai_normal.perempuan }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- section input jenis leukosit -->
            <table class="uk-table uk-table-small uk-table-divider table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Index Eritrosit</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th class="uk-width-small">Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Basofil</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.jenisLeukosit.basofil.hasil" /></td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.satuan }}</td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.nilai_normal }}</td>
                    </tr>
                    <tr>
                        <td>Eosinofil</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.jenisLeukosit.eosinofil.hasil" /></td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.satuan }}</td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.nilai_normal }}</td>
                    </tr>
                    <tr>
                        <td>Neutrofil Batang</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.jenisLeukosit.neutrofil_batang.hasil" /></td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.satuan }}</td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.nilai_normal }}</td>
                    </tr>
                    <tr>
                        <td>Neutrofil Segmen</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.jenisLeukosit.neutrofil_segmen.hasil" /></td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.satuan }}</td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.nilai_normal }}</td>
                    </tr>
                    <tr>
                        <td>Limfosit</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.jenisLeukosit.limfosit.hasil" /></td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.satuan }}</td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.nilai_normal }}</td>
                    </tr>
                    <tr>
                        <td>Monosit</td>
                        <td><input type="number" class="uk-input form-input form-input-small" v-model="formDataHematologi.jenisLeukosit.monosit.hasil" /></td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.satuan }}</td>
                        <td>{{ formDataHematologi.jenisLeukosit.basofil.nilai_normal }}</td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
</template>

<style scoped>

</style>