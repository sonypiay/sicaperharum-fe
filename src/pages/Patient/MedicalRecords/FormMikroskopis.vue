<script setup>
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">
    <h3>Mikroskopis</h3>

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
<!--                <tr v-if="rowsIndex === 0">-->
<!--                    <th>Feses</th>-->
<!--                </tr>-->
<!--                <tr>-->
<!--                    <th>{{ rowsItem.name }}</th>-->
<!--                </tr>-->

<!--                <tr v-if="rowsItem.multiple === true && Array.isArray(rowsItem.option)" v-for="(columnInput, columIndex) in rowsItem.option" :key="`sub-${columnInput.label}-${columIndex}`">-->
<!--                    <td>{{ columnInput.label }}</td>-->
<!--                    <td>-->
<!--                        <select v-if="Array.isArray(columnInput.option)" class="uk-select form-select form-select-small" v-model="columnInput.hasil">-->
<!--                            <option value="">Pilih Nilai</option>-->
<!--                            <option v-for="item in columnInput.option" :key="item" :value="item">{{ item }}</option>-->
<!--                        </select>-->

<!--                        <input v-else type="text" class="uk-input form-input form-input-small" v-model="columnInput.hasil" placeholder="Masukkan nilai" />-->
<!--                    </td>-->
<!--                    <td>{{ columnInput.satuan }}</td>-->
<!--                    <td>{{ columnInput.nilai_normal }}</td>-->
<!--                </tr>-->

<!--                <tr v-else>-->
<!--                    <td>{{ rowsItem.name }}</td>-->
<!--                    <td>-->
<!--                        <select v-if="Array.isArray(rowsItem.option)" class="uk-select form-select form-select-small" v-model="rowsItem.hasil">-->
<!--                            <option value="">Pilih Nilai</option>-->
<!--                            <option v-for="item in rowsItem.option" :key="item" :value="item">{{ item }}</option>-->
<!--                        </select>-->

<!--                        <select v-else class="uk-select form-select form-select-small" v-model="rowsItem.hasil">-->
<!--                            <option value="">Pilih Nilai</option>-->
<!--                            <option v-for="item in rowsItem.option" :key="item" :value="item">{{ item }}</option>-->
<!--                        </select>-->
<!--                    </td>-->
<!--                    <td>{{ rowsItem.satuan }}</td>-->
<!--                    <td>{{ rowsItem.nilai_normal }}</td>-->
<!--                </tr>-->
<!--            </tbody>-->
<!--        </table>-->

        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th colspan="4">Feses</th>
                </tr>
                <tr>
                    <th class="uk-width-medium">Makroskopis</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.makroskopis" :key="`makroskopis-${index}`">
                    <td>{{ column.label }}</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td>-</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Mikroskopis</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.mikroskopis" :key="`mikroskopis-${index}`">
                    <td>{{ column.label }}</td>
                    <td v-if="column.hasOwnProperty('option')">
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td v-else>
                        <input type="number" class="uk-width-1-1 uk-input form-select form-input-small" v-model="column.hasil" />
                    </td>
                    <td>-</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">BTA</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>BTA</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.bta.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.bta.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.bta.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">

        <table class="uk-table uk-table-small uk-table-divider table-input-lab" v-if="props.formDataPatient.gender === 'L'">
            <thead>
                <tr>
                    <th colspan="4">IMS</th>
                </tr>
                <tr>
                    <th class="uk-width-medium">Laki</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.ims.laki" :key="`ims-laki-${index}`">
                    <td>{{ column.label }}</td>
                    <td v-if="column.hasOwnProperty('option')">
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td v-else>
                        <input type="number" class="uk-width-1-1 uk-input form-select form-input-small" v-model="column.hasil" />
                    </td>
                    <td>-</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <table class="uk-table uk-table-small uk-table-divider table-input-lab" v-if="props.formDataPatient.gender === 'P'">
            <thead>
                <tr>
                    <th class="uk-width-medium">Perempuan</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.ims.perempuan" :key="`ims-laki-${index}`">
                    <td>{{ column.label }}</td>
                    <td v-if="column.hasOwnProperty('option')">
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td v-else>
                        <input type="number" class="uk-width-1-1 uk-input form-select form-input-small" v-model="column.hasil" />
                    </td>
                    <td>-</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>