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
        <hr class="form-section-divider">

        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th colspan="4">Feses</th>
                </tr>
                <tr>
                    <th class="uk-width-medium">Makroskopis</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
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
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
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
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
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
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
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
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
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