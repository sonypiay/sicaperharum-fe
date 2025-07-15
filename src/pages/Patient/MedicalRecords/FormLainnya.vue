<script setup>
const props = defineProps({
    formInput: Object,
});
</script>

<template>
    <h3>Lainnya</h3>

    <div class="form-section-input">
        <div class="uk-card uk-card-default uk-card-body card-form-input">
            <table class="uk-table uk-table-small uk-table-middle uk-table-responsive uk-table-justify table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Lainnya</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th class="uk-width-small">Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(column, index) in props.formInput" :key="`tcm-${index}`">
                        <td>{{ column.label }}</td>
                        <td v-if="column.hasOwnProperty('option')">
                            <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                                <option value="">Pilih Nilai</option>
                                <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                            </select>

                            <div v-if="column.hasOwnProperty('note') && column.hasil === 'Positif'" class="uk-margin-small-top">
                                <input type="text" class="uk-width-1-1 uk-input form-input form-input-small" v-model="column.note" placeholder="Masukkan keterangan" />
                            </div>
                        </td>
                        <td v-else>
                            <input type="text" class="uk-input form-input form-input-small" v-model="column.hasil" />
                        </td>
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