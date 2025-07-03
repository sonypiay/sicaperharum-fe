<script setup>
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">
    <h3>Kimia Klinik</h3>

    <div v-if="props.formDataPatient">
        <!-- input diabetes -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Diabetes</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.diabetes" :key="`diabetes-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="number" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                    <td>{{ column.satuan }}</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <!-- input lipid -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Lipid</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.lipid" :key="`lipid-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="number" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                    <td>{{ column.satuan }}</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <!-- input fungsi ginjal -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Fungsi Ginjal</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.fungsiGinjal" :key="`fungsiGinjal-${index}`">
                    <td>{{ column.label }}</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="column.hasil" />
                    </td>
                    <td>{{ column.satuan }}</td>
                    <td v-if="column.label === 'Creatinin' || column.label === 'Asam Urat'">
                        <span v-if="props.formDataPatient.gender === 'L'">{{ column.nilai_normal.laki }}</span>
                        <span v-else>{{ column.nilai_normal.perempuan }}</span>
                    </td>
                    <td v-else>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <!-- input fungsi hati -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Fungsi Ginjal</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.fungsiHati" :key="`fungsiHati-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="number" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                    <td>{{ props.formInput.fungsiHati.sgot.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.fungsiHati.sgot.nilai_normal.laki }}</span>
                        <span v-else>{{ props.formInput.fungsiHati.sgot.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>