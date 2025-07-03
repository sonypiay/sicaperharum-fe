<script setup>
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">
    <h3>Urinalisa</h3>

    <div v-if="props.formDataPatient">
        <!-- input makroskopis kimia -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Makroskopis / Kimia</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.makroskopis_kimia" :key="`makroskopis_kimia_${index}`">
                    <td>{{ column.label }}</td>
                    <td v-if="column.hasOwnProperty('option')">
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td v-else>
                        <input type="number" class="uk-width-1-1 uk-input form-input form-input-small" v-model="column.hasil" />
                    </td>
                    <td></td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <!-- input sedimen -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Sedimen</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.sedimen" :key="`sedimen_${index}`">
                    <td>{{ column.label }}</td>
                    <td v-if="column.hasOwnProperty('option')">
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td v-else>
                        <input type="number" class="uk-width-1-1 uk-input form-input form-input-small" v-model="column.hasil" />
                    </td>
                    <td>{{ column.satuan }}</td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>