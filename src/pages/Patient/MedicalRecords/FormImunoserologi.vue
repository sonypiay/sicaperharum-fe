<script setup>
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">
    <h3>Imunoserologi</h3>

    <div v-if="props.formDataPatient">
        <!-- input imunoserologi -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Imunoserologi</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Golongan Darah</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.golonganDarah.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.golonganDarah.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.golonganDarah.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Rhesus</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.rhesus.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.rhesus.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.rhesus.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">

        <!-- input hiv -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">HIV</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.hiv" :key="`hiv_${index}`">
                    <td>{{ column.label }}</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>

                        <div v-if="column.hasil === 'Reaktif' && column.label === 'VDRL'" class="uk-margin-small-top">
                            <!-- jika nilai reaktif, tampilkan input titer -->
                            <input  type="text" class="uk-width-1-1 uk-input form-input form-input-small" v-model="column.titer" placeholder="Masukkan nilai titer" />
                        </div>
                    </td>
                    <td></td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">

        <!-- input widal -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Widal</th>
                    <th>Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th class="uk-width-small">Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(column, index) in props.formInput.widal" :key="`widal_${index}`">
                    <td>{{ column.label }}</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="column.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in column.option" :key="item" :value="item">{{ item }}</option>
                        </select>

                        <!-- jika nilai reaktif, tampilkan input titer -->
                        <input v-if="column.hasil === 'Positif'" type="text" class="uk-width-1-1 uk-margin-small-top uk-input form-input form-input-small" v-model="column.titer" placeholder="Masukkan nilai titer" />
                    </td>
                    <td></td>
                    <td>{{ column.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>