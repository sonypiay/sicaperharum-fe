<script setup lang="ts">
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">
    <h3>Napza</h3>

    <div v-if="props.formDataPatient">
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Napza</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AMP</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.amp.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.amp.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.amp.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>MOP</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.mop.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.mop.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.mop.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>THC</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.thc.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.thc.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.thc.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>