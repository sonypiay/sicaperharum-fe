<script setup>
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">

    <h3>Hematologi</h3>
    <div class="form-section-input" v-if="props.formDataPatient">
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
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.hematologiRutin.hemoglobin.hasil" />
                    </td>
                    <td>{{ props.formInput.hematologiRutin.hemoglobin.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.patientType === 'adult'">
                            <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.hematologiRutin.hemoglobin.nilai_normal.laki }}</span>
                            <span v-else>{{ props.formInput.hematologiRutin.hemoglobin.nilai_normal.perempuan }}</span>
                        </span>
                        <span v-else>{{ props.formInput.hematologiRutin.hemoglobin.nilai_normal.anak }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Hematokrit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.hematologiRutin.hematokrit.hasil" />
                    </td>
                    <td>{{ props.formInput.hematologiRutin.hematokrit.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.patientType === 'adult'">
                            <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.hematologiRutin.hematokrit.nilai_normal.laki }}</span>
                            <span v-else>{{ props.formInput.hematologiRutin.hematokrit.nilai_normal.perempuan }}</span>
                        </span>
                        <span v-else>{{ props.formInput.hematologiRutin.hematokrit.nilai_normal.anak }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Leukosit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.hematologiRutin.leukosit.hasil" />
                    </td>
                    <td>{{ props.formInput.hematologiRutin.leukosit.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.patientType === 'adult'">
                            <span>{{ props.formInput.hematologiRutin.leukosit.nilai_normal.dewasa }}</span>
                        </span>
                        <span v-else>{{ props.formInput.hematologiRutin.hematokrit.nilai_normal.anak }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Trombosit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.hematologiRutin.trombosit.hasil" />
                    </td>
                    <td>{{ props.formInput.hematologiRutin.trombosit.satuan }}</td>
                    <td>{{ props.formInput.hematologiRutin.trombosit.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Eritrosit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.hematologiRutin.eritrosit.hasil" />
                    </td>
                    <td>{{ props.formInput.hematologiRutin.eritrosit.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.patientType === 'adult'">
                            <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.hematologiRutin.eritrosit.nilai_normal.laki }}</span>
                            <span v-else>{{ props.formInput.hematologiRutin.eritrosit.nilai_normal.perempuan }}</span>
                        </span>
                        <span v-else>{{ props.formInput.hematologiRutin.eritrosit.nilai_normal.anak }}</span>
                    </td>
                </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">

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
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.indexEritrosit.mcv.hasil" /></td>
            </tr>
            <tr>
                <td>MCH</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.indexEritrosit.mch.hasil" /></td>
            </tr>
            <tr>
                <td>MCHC</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.indexEritrosit.mchc.hasil" /></td>
            </tr>
            <tr>
                <td>RDW-SD</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.indexEritrosit.rdwsd.hasil" /></td>
            </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">

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
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.lajuEndapDarah.hasil" /></td>
            </tr>
            <tr>
                <th>Satuan</th>
                <td>{{ props.formInput.lajuEndapDarah.satuan }}</td>
            </tr>
            <tr>
                <th>Nilai Normal</th>
                <td>
                    <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.lajuEndapDarah.nilai_normal.laki }}</span>
                    <span v-else>{{ props.formInput.lajuEndapDarah.nilai_normal.perempuan }}</span>
                </td>
            </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">

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
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.jenisLeukosit.basofil.hasil" /></td>
                <td>{{ props.formInput.jenisLeukosit.basofil.satuan }}</td>
                <td>{{ props.formInput.jenisLeukosit.basofil.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Eosinofil</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.jenisLeukosit.eosinofil.hasil" /></td>
                <td>{{ props.formInput.jenisLeukosit.eosinofil.satuan }}</td>
                <td>{{ props.formInput.jenisLeukosit.eosinofil.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Neutrofil Batang</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.jenisLeukosit.neutrofil_batang.hasil" /></td>
                <td>{{ props.formInput.jenisLeukosit.neutrofil_batang.satuan }}</td>
                <td>{{ props.formInput.jenisLeukosit.neutrofil_batang.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Neutrofil Segmen</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.jenisLeukosit.neutrofil_segmen.hasil" /></td>
                <td>{{ props.formInput.jenisLeukosit.neutrofil_segmen.satuan }}</td>
                <td>{{ props.formInput.jenisLeukosit.neutrofil_segmen.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Limfosit</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.jenisLeukosit.limfosit.hasil" /></td>
                <td>{{ props.formInput.jenisLeukosit.limfosit.satuan }}</td>
                <td>{{ props.formInput.jenisLeukosit.limfosit.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Monosit</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.jenisLeukosit.monosit.hasil" /></td>
                <td>{{ props.formInput.jenisLeukosit.monosit.satuan }}</td>
                <td>{{ props.formInput.jenisLeukosit.monosit.nilai_normal }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>