<script setup>
const props = defineProps({
    formDataPatient: Object,
    formInput: Object,
});

function onHandleAddMoreValues() {
    props.formInput.sedimen.other_values.push({
        nama: '',
        value: '',
    });
}

function onHandleRemoveMoreValues(index) {
    props.formInput.sedimen.other_values.splice(index, 1);
}
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
                <tr>
                    <td>Warna</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.warna.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.warna.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.warna.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Kejernihan</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.kejernihan.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.kejernihan.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.kejernihan.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Berat Jenis</td>
                    <td>
                        <input type="number" class="uk-width-1-1 uk-input form-input form-input-small" v-model="props.formInput.makroskopis_kimia.beratJenis.hasil" />
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.beratJenis.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>pH</td>
                    <td>
                        <input type="number" class="uk-width-1-1 uk-input form-input form-input-small" v-model="props.formInput.makroskopis_kimia.ph.hasil" />
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.ph.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Glucosa</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.glucosa.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.glucosa.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.glucosa.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Protein</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.protein.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.protein.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.protein.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Bilirubin</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.bilirubin.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.bilirubin.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.bilirubin.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Urobilinogen</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.urobilinogen.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.urobilinogen.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.urobilinogen.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Nitrit</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.nitrit.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.nitrit.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.nitrit.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Keton</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.keton.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.keton.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.keton.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Eritrosit</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.eritrosit.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.eritrosit.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.eritrosit.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Leukosit</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.makroskopis_kimia.leukosit.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.makroskopis_kimia.leukosit.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.makroskopis_kimia.leukosit.nilai_normal }}</td>
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
                <tr>
                    <td>Leukosit</td>
                    <td>
                        <input type="number" class="uk-width-1-1 uk-input form-input form-input-small" v-model="props.formInput.sedimen.leukosit.hasil" />
                    </td>
                    <td>{{ props.formInput.sedimen.leukosit.satuan }}</td>
                    <td>{{ props.formInput.sedimen.leukosit.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Eritrosit</td>
                    <td>
                        <input type="number" class="uk-width-1-1 uk-input form-input form-input-small" v-model="props.formInput.sedimen.eritrosit.hasil" />
                    </td>
                    <td>{{ props.formInput.sedimen.eritrosit.satuan }}</td>
                    <td>{{ props.formInput.sedimen.eritrosit.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Epitel</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.sedimen.epitel.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.sedimen.epitel.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.sedimen.epitel.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Silinder</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.sedimen.silinder.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.sedimen.silinder.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.sedimen.silinder.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Kristal</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.sedimen.kristal.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.sedimen.kristal.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.sedimen.kristal.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Bakteri</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.sedimen.bakteri.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.sedimen.bakteri.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.sedimen.bakteri.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Jamur</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.sedimen.jamur.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.sedimen.jamur.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.sedimen.jamur.nilai_normal }}</td>
                </tr>

                <tr v-for="(item, index) in props.formInput.sedimen.other_values" :key="`lainnya_${index}`">
                    <td colspan="1">
                        Lainnya
                    </td>
                    <td colspan="3">
                        <input type="number" class="uk-width-1-1 uk-input form-input form-input-small" v-model="item.hasil" placeholder="Masukkan nilai" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>