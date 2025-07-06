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
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.hematologiRutin" :key="`hematologi-rutin-${index}`">
                    <td>{{ column.label }}</td>
                    <td>
                        <input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" />
                    </td>
                    <td>{{ column.satuan }}</td>
                    <td v-if="column.label === 'Leukosit'">
                        <span v-if="props.formDataPatient.patientType === 'adult'">
                            <span>{{ column.nilai_normal.dewasa }}</span>
                        </span>
                        <span v-else>{{ column.nilai_normal.anak }}</span>
                    </td>
                    <td v-else-if="column.label === 'Trombosit'">{{ column.nilai_normal }}</td>
                    <td v-else>
                        <span v-if="props.formDataPatient.patientType === 'adult'">
                            <span v-if="props.formDataPatient.gender === 'L'">{{ column.nilai_normal.laki }}</span>
                            <span v-else>{{ column.nilai_normal.perempuan }}</span>
                        </span>
                        <span v-else>{{ column.nilai_normal.anak }}</span>
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
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.indexEritrosit" :key="`index-eritrosit-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                    <td>{{ column.satuan }}</td>
                    <td>{{ column.nilai_normal }}</td>
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
                    <td><input type="text" class="uk-input form-input form-input-small" v-model="props.formInput.lajuEndapDarah.hasil" /></td>
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
                    <th class="uk-width-medium">Jenis Leukosit</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.jenisLeukosit" :key="`jenis-leukosit-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                    <td>{{ column.satuan }}</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>