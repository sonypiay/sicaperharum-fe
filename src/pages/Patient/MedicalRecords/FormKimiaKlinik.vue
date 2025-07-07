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
<!--        <table class="uk-table uk-table-small uk-table-divider uk-table-responsive uk-table-middle table-input-lab">-->
<!--            <thead>-->
<!--                <tr>-->
<!--                    <th class="uk-width-small">Pemeriksaan</th>-->
<!--                    <th class="uk-width-medium">Nilai</th>-->
<!--                    <th class="uk-width-small">Satuan</th>-->
<!--                    <th class="uk-width-small">Nilai Normal</th>-->
<!--                </tr>-->
<!--            </thead>-->

<!--            <tbody v-for="(rowsItem, rowsIndex) in props.formInput.sub" :key="`sub-${rowsItem.value}-${rowsIndex}`">-->
<!--                <tr>-->
<!--                    <th>{{ rowsItem.name }}</th>-->
<!--                </tr>-->
<!--                <tr v-if="Array.isArray(rowsItem.option)" v-for="(columnInput, columIndex) in rowsItem.option" :key="`sub-${columnInput.label}-${columIndex}`">-->
<!--                    <td>{{ columnInput.label }}</td>-->
<!--                    <td>-->
<!--                        <input type="text" class="uk-input form-input form-input-small" v-model="columnInput.hasil" placeholder="Masukkan nilai" />-->
<!--                    </td>-->
<!--                    <td>{{ columnInput.satuan }}</td>-->
<!--                    <td>-->
<!--                        <span v-if="typeof columnInput.nilai_normal === 'object'">-->
<!--                            {{ columnInput.nilai_normal[props.formDataPatient.gender] }}-->
<!--                        </span>-->
<!--                        <span v-else>{{ columnInput.nilai_normal }}</span>-->
<!--                    </td>-->
<!--                </tr>-->
<!--            </tbody>-->
<!--        </table>-->

        <!-- input diabetes -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Diabetes</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.diabetes" :key="`diabetes-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
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
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.lipid" :key="`lipid-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
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
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.fungsi_ginjal" :key="`fungsiGinjal-${index}`">
                    <td>{{ column.label }}</td>
                    <td>
                        <input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" />
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
                    <th class="uk-width-medium">Fungsi Hati</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.fungsi_hati" :key="`fungsiHati-${index}`">
                    <td>{{ column.label }}</td>
                    <td><input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                    <td>{{ column.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.gender === 'L'">{{ column.nilai_normal.laki }}</span>
                        <span v-else>{{ column.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>