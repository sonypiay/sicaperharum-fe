<script setup>
defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">

    <h3>Hematologi</h3>
    <div class="form-section-input" v-if="formDataPatient">
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
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.hematologiRutin.hemoglobin.hasil" />
                    </td>
                    <td>{{ formInput.hematologiRutin.hemoglobin.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.patientType === 'adult'">
                            <span v-if="formDataPatient.gender === 'L'">{{ formInput.hematologiRutin.hemoglobin.nilai_normal.laki }}</span>
                            <span v-else>{{ formInput.hematologiRutin.hemoglobin.nilai_normal.perempuan }}</span>
                        </span>
                        <span v-else>{{ formInput.hematologiRutin.hemoglobin.nilai_normal.anak }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Hematokrit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.hematologiRutin.hematokrit.hasil" />
                    </td>
                    <td>{{ formInput.hematologiRutin.hematokrit.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.patientType === 'adult'">
                            <span v-if="formDataPatient.gender === 'L'">{{ formInput.hematologiRutin.hematokrit.nilai_normal.laki }}</span>
                            <span v-else>{{ formInput.hematologiRutin.hematokrit.nilai_normal.perempuan }}</span>
                        </span>
                        <span v-else>{{ formInput.hematologiRutin.hematokrit.nilai_normal.anak }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Leukosit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.hematologiRutin.leukosit.hasil" />
                    </td>
                    <td>{{ formInput.hematologiRutin.leukosit.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.patientType === 'adult'">
                            <span>{{ formInput.hematologiRutin.leukosit.nilai_normal.dewasa }}</span>
                        </span>
                        <span v-else>{{ formInput.hematologiRutin.hematokrit.nilai_normal.anak }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Trombosit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.hematologiRutin.trombosit.hasil" />
                    </td>
                    <td>{{ formInput.hematologiRutin.trombosit.satuan }}</td>
                    <td>{{ formInput.hematologiRutin.trombosit.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Eritrosit</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.hematologiRutin.eritrosit.hasil" />
                    </td>
                    <td>{{ formInput.hematologiRutin.eritrosit.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.patientType === 'adult'">
                            <span v-if="formDataPatient.gender === 'L'">{{ formInput.hematologiRutin.eritrosit.nilai_normal.laki }}</span>
                            <span v-else>{{ formInput.hematologiRutin.eritrosit.nilai_normal.perempuan }}</span>
                        </span>
                        <span v-else>{{ formInput.hematologiRutin.eritrosit.nilai_normal.anak }}</span>
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
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.indexEritrosit.mcv.hasil" /></td>
            </tr>
            <tr>
                <td>MCH</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.indexEritrosit.mch.hasil" /></td>
            </tr>
            <tr>
                <td>MCHC</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.indexEritrosit.mchc.hasil" /></td>
            </tr>
            <tr>
                <td>RDW-SD</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.indexEritrosit.rdwsd.hasil" /></td>
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
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.lajuEndapDarah.hasil" /></td>
            </tr>
            <tr>
                <th>Satuan</th>
                <td>{{ formInput.lajuEndapDarah.satuan }}</td>
            </tr>
            <tr>
                <th>Nilai Normal</th>
                <td>
                    <span v-if="formDataPatient.gender === 'L'">{{ formInput.lajuEndapDarah.nilai_normal.laki }}</span>
                    <span v-else>{{ formInput.lajuEndapDarah.nilai_normal.perempuan }}</span>
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
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.jenisLeukosit.basofil.hasil" /></td>
                <td>{{ formInput.jenisLeukosit.basofil.satuan }}</td>
                <td>{{ formInput.jenisLeukosit.basofil.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Eosinofil</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.jenisLeukosit.eosinofil.hasil" /></td>
                <td>{{ formInput.jenisLeukosit.eosinofil.satuan }}</td>
                <td>{{ formInput.jenisLeukosit.eosinofil.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Neutrofil Batang</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.jenisLeukosit.neutrofil_batang.hasil" /></td>
                <td>{{ formInput.jenisLeukosit.neutrofil_batang.satuan }}</td>
                <td>{{ formInput.jenisLeukosit.neutrofil_batang.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Neutrofil Segmen</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.jenisLeukosit.neutrofil_segmen.hasil" /></td>
                <td>{{ formInput.jenisLeukosit.neutrofil_segmen.satuan }}</td>
                <td>{{ formInput.jenisLeukosit.neutrofil_segmen.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Limfosit</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.jenisLeukosit.limfosit.hasil" /></td>
                <td>{{ formInput.jenisLeukosit.limfosit.satuan }}</td>
                <td>{{ formInput.jenisLeukosit.limfosit.nilai_normal }}</td>
            </tr>
            <tr>
                <td>Monosit</td>
                <td><input type="number" class="uk-input form-input form-input-small" v-model="formInput.jenisLeukosit.monosit.hasil" /></td>
                <td>{{ formInput.jenisLeukosit.monosit.satuan }}</td>
                <td>{{ formInput.jenisLeukosit.monosit.nilai_normal }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>