<script setup>
const props = defineProps({
    formInput: Object,
});
</script>

<template>
    <h3>Napza</h3>
    <div class="form-section-input">
<!--        <table class="uk-table uk-table-small uk-table-divider uk-table-responsive uk-table-middle table-input-lab">-->
<!--            <thead>-->
<!--                <tr>-->
<!--                    <th class="uk-width-small">Pemeriksaan</th>-->
<!--                    <th class="uk-width-medium">Nilai</th>-->
<!--                    <th class="uk-width-small">Satuan</th>-->
<!--                    <th class="uk-width-small">Nilai Normal</th>-->
<!--                </tr>-->
<!--            </thead>-->

<!--            <tbody>-->
<!--                <tr>-->
<!--                    <th>{{ props.formInput.name }}</th>-->
<!--                </tr>-->
<!--                <tr v-for="(columnInput, columIndex) in props.formInput.option" :key="`sub-${columnInput.label}-${columIndex}`">-->
<!--                    <td>{{ columnInput.label }}</td>-->
<!--                    <td>-->
<!--                        <select v-if="Array.isArray(columnInput.option)" class="uk-select form-select form-select-small" v-model="columnInput.hasil">-->
<!--                            <option value="">Pilih Nilai</option>-->
<!--                            <option v-for="item in columnInput.option" :key="item" :value="item">{{ item }}</option>-->
<!--                        </select>-->
<!--                    </td>-->
<!--                    <td>{{ columnInput.satuan }}</td>-->
<!--                    <td>{{ columnInput.nilai_normal }}</td>-->
<!--                </tr>-->
<!--            </tbody>-->
<!--        </table>-->

        <div class="uk-card uk-card-default uk-card-body card-form-input">
            <table class="uk-table uk-table-small uk-table-middle uk-table-responsive uk-table-justify table-input-lab">
                <thead>
                    <tr>
                        <th class="uk-width-medium">Napza</th>
                        <th class="uk-width-small">Nilai</th>
                        <th class="uk-width-small">Satuan</th>
                        <th class="uk-width-small">Nilai Normal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(column, index) in props.formInput" :key="`napza-${index}`">
                        <td>{{ column.label }}</td>
                        <td>
                            <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                                <option value="">Pilih Nilai</option>
                                <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                            </select>
                        </td>
                        <td></td>
                        <td>{{ column.nilai_normal }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>

</style>