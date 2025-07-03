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
                <tr>
                    <td>Gula Darah Puasa</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.diabetes.gulaDarahPuasa.hasil" />
                    </td>
                    <td>{{ props.formInput.diabetes.gulaDarahPuasa.satuan }}</td>
                    <td>{{ props.formInput.diabetes.gulaDarahPuasa.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Gula Darah 2 Jam PP</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.diabetes.gulaDarah2jamPP.hasil" />
                    </td>
                    <td>{{ props.formInput.diabetes.gulaDarah2jamPP.satuan }}</td>
                    <td>{{ props.formInput.diabetes.gulaDarah2jamPP.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Gula Darah Sewaktu</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.diabetes.gulaDarahSewaktu.hasil" />
                    </td>
                    <td>{{ props.formInput.diabetes.gulaDarahSewaktu.satuan }}</td>
                    <td>{{ props.formInput.diabetes.gulaDarahSewaktu.nilai_normal }}</td>
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
                <tr>
                    <td>Kolestrol</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.lipid.kolestrol.hasil" />
                    </td>
                    <td>{{ props.formInput.lipid.kolestrol.satuan }}</td>
                    <td>{{ props.formInput.lipid.kolestrol.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>HDL Kolestrol</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.lipid.hdlKolestrol.hasil" />
                    </td>
                    <td>{{ props.formInput.lipid.hdlKolestrol.satuan }}</td>
                    <td>{{ props.formInput.lipid.hdlKolestrol.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>LDL Kolestrol</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.lipid.ldlKolestrol.hasil" />
                    </td>
                    <td>{{ props.formInput.lipid.ldlKolestrol.satuan }}</td>
                    <td>{{ props.formInput.lipid.ldlKolestrol.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Trigliserida</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.lipid.trigliserida.hasil" />
                    </td>
                    <td>{{ props.formInput.lipid.trigliserida.satuan }}</td>
                    <td>{{ props.formInput.lipid.trigliserida.nilai_normal }}</td>
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
                <tr>
                    <td>Ureum</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.fungsiGinjal.ureum.hasil" />
                    </td>
                    <td>{{ props.formInput.fungsiGinjal.ureum.satuan }}</td>
                    <td>{{ props.formInput.fungsiGinjal.ureum.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Creatinin</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.fungsiGinjal.creatinin.hasil" />
                    </td>
                    <td>{{ props.formInput.fungsiGinjal.creatinin.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.fungsiGinjal.creatinin.nilai_normal.laki }}</span>
                        <span v-else>{{ props.formInput.fungsiGinjal.creatinin.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Asam Urat</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.fungsiGinjal.asamUrat.hasil" />
                    </td>
                    <td>{{ props.formInput.fungsiGinjal.asamUrat.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.fungsiGinjal.asamUrat.nilai_normal.laki }}</span>
                        <span v-else>{{ props.formInput.fungsiGinjal.asamUrat.nilai_normal.perempuan }}</span>
                    </td>
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
                <tr>
                    <td>SGOT</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.fungsiHati.sgot.hasil" />
                    </td>
                    <td>{{ props.formInput.fungsiHati.sgot.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.fungsiHati.sgot.nilai_normal.laki }}</span>
                        <span v-else>{{ props.formInput.fungsiHati.sgot.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
                <tr>
                    <td>SGPT</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="props.formInput.fungsiHati.sgpt.hasil" />
                    </td>
                    <td>{{ props.formInput.fungsiHati.sgpt.satuan }}</td>
                    <td>
                        <span v-if="props.formDataPatient.gender === 'L'">{{ props.formInput.fungsiHati.sgpt.nilai_normal.laki }}</span>
                        <span v-else>{{ props.formInput.fungsiHati.sgpt.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>