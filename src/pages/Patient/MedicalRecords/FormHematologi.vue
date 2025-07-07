<script setup>
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <h3>Hematologi</h3>

    <div class="form-section-input" v-if="props.formDataPatient">
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

<!--                <tr v-if="rowsItem.multiple === true && Array.isArray(rowsItem.option)" v-for="(columnInput, columIndex) in rowsItem.option" :key="`sub-${columnInput.label}-${columIndex}`">-->
<!--                    <td>{{ columnInput.label }}</td>-->
<!--                    <td>-->
<!--                        <input type="text" class="uk-input form-input form-input-small" v-model="columnInput.hasil" placeholder="Masukkan nilai" />-->
<!--                    </td>-->
<!--                    <td>{{ columnInput.satuan }}</td>-->
<!--                    <td>-->
<!--                        <span v-if="typeof columnInput.nilai_normal === 'object'">-->
<!--                            <span v-if="typeof columnInput.nilai_normal[props.formDataPatient.patientType] === 'object'">-->
<!--                                {{ columnInput.nilai_normal[props.formDataPatient.patientType][props.formDataPatient.gender] }}-->
<!--                            </span>-->
<!--                            <span v-else>{{ columnInput.nilai_normal[props.formDataPatient.patientType] }}</span>-->
<!--                        </span>-->
<!--                        <span v-else>{{ columnInput.nilai_normal }}</span>-->
<!--                    </td>-->
<!--                </tr>-->

<!--                <tr v-else>-->
<!--                    <td>{{ rowsItem.name }}</td>-->
<!--                    <td>-->
<!--                        <input type="text" class="uk-input form-input form-input-small" v-model="rowsItem.hasil" placeholder="Masukkan nilai" />-->
<!--                    </td>-->
<!--                    <td>{{ rowsItem.satuan }}</td>-->
<!--                    <td>{{ rowsItem.nilai_normal[props.formDataPatient.gender] }}</td>-->
<!--                </tr>-->
<!--            </tbody>-->
<!--        </table>-->

        <div class="uk-card uk-card-default uk-card-body card-form-input">
            <table class="uk-table uk-table-small uk-table-middle uk-table-responsive uk-table-justify table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Hematologi Rutin</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th class="uk-width-small">Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(column, index) in props.formInput.hematologi_rutin" :key="`hematologi-rutin-${index}`">
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
        </div>

        <div class="uk-card uk-card-default uk-card-body card-form-input">
            <table class="uk-table uk-table-small uk-table-middle uk-table-responsive uk-table-justify table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Index Eritrosit</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th class="uk-width-small">Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(column, index) in props.formInput.index_eritrosit" :key="`index-eritrosit-${index}`">
                        <td>{{ column.label }}</td>
                        <td><input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                        <td>{{ column.satuan }}</td>
                        <td>
                            <span v-if="column.label === 'MCHC'">
                                <span v-if="props.formDataPatient.patientType === 'adult'">{{ column.nilai_normal.dewasa }}</span>
                                <span v-else>{{ column.nilai_normal.anak }}</span>
                            </span>
                            <span v-else>{{ column.nilai_normal }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="uk-card uk-card-default uk-card-body card-form-input">
            <table class="uk-table uk-table-small uk-table-middle uk-table-responsive uk-table-justify table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Laju Endap Darah</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th class="uk-width-small">Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Laju Endap Darah</td>
                        <td><input type="text" class="uk-input form-input form-input-small" v-model="props.formInput.laju_endap_darah.hasil" /></td>
                        <td>{{ props.formInput.laju_endap_darah.satuan }}</td>
                        <td>
                            <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.laju_endap_darah.nilai_normal.laki }}</span>
                            <span v-else>{{ props.formInput.laju_endap_darah.nilai_normal.perempuan }}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="uk-card uk-card-default uk-card-body card-form-input">
            <table class="uk-table uk-table-small uk-table-middle uk-table-responsive uk-table-justify table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Jenis Leukosit</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th class="uk-width-small">Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(column, index) in props.formInput.jenis_leukosit" :key="`jenis-leukosit-${index}`">
                        <td>{{ column.label }}</td>
                        <td><input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" /></td>
                        <td>{{ column.satuan }}</td>
                        <td>{{ column.nilai_normal }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>