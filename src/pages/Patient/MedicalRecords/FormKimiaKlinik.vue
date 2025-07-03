<script setup>
defineProps({
    formDataPatient: Object,
    formInput: Object,
});
</script>

<template>
    <hr class="form-section-divider">
    <h3>Kimia Klinik</h3>

    <div v-if="formDataPatient">
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
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.diabetes.gulaDarahPuasa.hasil" />
                    </td>
                    <td>{{ formInput.diabetes.gulaDarahPuasa.satuan }}</td>
                    <td>{{ formInput.diabetes.gulaDarahPuasa.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Gula Darah 2 Jam PP</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.diabetes.gulaDarah2jamPP.hasil" />
                    </td>
                    <td>{{ formInput.diabetes.gulaDarah2jamPP.satuan }}</td>
                    <td>{{ formInput.diabetes.gulaDarah2jamPP.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Gula Darah Sewaktu</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.diabetes.gulaDarahSewaktu.hasil" />
                    </td>
                    <td>{{ formInput.diabetes.gulaDarahSewaktu.satuan }}</td>
                    <td>{{ formInput.diabetes.gulaDarahSewaktu.nilai_normal }}</td>
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
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.lipid.kolestrol.hasil" />
                    </td>
                    <td>{{ formInput.lipid.kolestrol.satuan }}</td>
                    <td>{{ formInput.lipid.kolestrol.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>HDL Kolestrol</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.lipid.hdlKolestrol.hasil" />
                    </td>
                    <td>{{ formInput.lipid.hdlKolestrol.satuan }}</td>
                    <td>{{ formInput.lipid.hdlKolestrol.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>LDL Kolestrol</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.lipid.ldlKolestrol.hasil" />
                    </td>
                    <td>{{ formInput.lipid.ldlKolestrol.satuan }}</td>
                    <td>{{ formInput.lipid.ldlKolestrol.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Trigliserida</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.lipid.trigliserida.hasil" />
                    </td>
                    <td>{{ formInput.lipid.trigliserida.satuan }}</td>
                    <td>{{ formInput.lipid.trigliserida.nilai_normal }}</td>
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
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.fungsiGinjal.ureum.hasil" />
                    </td>
                    <td>{{ formInput.fungsiGinjal.ureum.satuan }}</td>
                    <td>{{ formInput.fungsiGinjal.ureum.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Creatinin</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.fungsiGinjal.creatinin.hasil" />
                    </td>
                    <td>{{ formInput.fungsiGinjal.creatinin.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.gender === 'L'">{{ formInput.fungsiGinjal.creatinin.nilai_normal.laki }}</span>
                        <span v-else>{{ formInput.fungsiGinjal.creatinin.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
                <tr>
                    <td>Asam Urat</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.fungsiGinjal.asamUrat.hasil" />
                    </td>
                    <td>{{ formInput.fungsiGinjal.asamUrat.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.gender === 'L'">{{ formInput.fungsiGinjal.asamUrat.nilai_normal.laki }}</span>
                        <span v-else>{{ formInput.fungsiGinjal.asamUrat.nilai_normal.perempuan }}</span>
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
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.fungsiHati.sgot.hasil" />
                    </td>
                    <td>{{ formInput.fungsiHati.sgot.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.gender === 'L'">{{ formInput.fungsiHati.sgot.nilai_normal.laki }}</span>
                        <span v-else>{{ formInput.fungsiHati.sgot.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
                <tr>
                    <td>SGPT</td>
                    <td>
                        <input type="number" class="uk-input form-input form-input-small" v-model="formInput.fungsiHati.sgpt.hasil" />
                    </td>
                    <td>{{ formInput.fungsiHati.sgpt.satuan }}</td>
                    <td>
                        <span v-if="formDataPatient.gender === 'L'">{{ formInput.fungsiHati.sgpt.nilai_normal.laki }}</span>
                        <span v-else>{{ formInput.fungsiHati.sgpt.nilai_normal.perempuan }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>