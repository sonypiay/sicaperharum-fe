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
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
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
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>HIV R1</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.r1.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.r1.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.r1.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>HIV R2</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.r2.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.r2.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.r2.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>HIV R3</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.r3.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.r3.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.r3.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>TPHA</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.tpha.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.tpha.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.tpha.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>VDRL</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.vdrl.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.vdrl.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.vdrl.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>HBsAG</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.hbsag.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.hbsag.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.hbsag.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>Anti HBs</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.antiHbs.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.antiHbs.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.antiHbs.nilai_normal }}</td>
                </tr>

                <tr>
                    <td>HCV</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.hiv.hcv.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.hiv.hcv.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.hiv.hcv.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>

        <hr class="form-section-divider">

        <!-- input widal -->
        <table class="uk-table uk-table-small uk-table-divider table-input-lab">
            <thead>
                <tr>
                    <th class="uk-width-medium">Widal</th>
                    <th class="uk-width-small">Nilai</th>
                    <th class="uk-width-small">Satuan</th>
                    <th>Nilai Normal</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Salmonella Typhi O</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.widal.salmonella.typhi_O.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.widal.salmonella.typhi_O.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.widal.salmonella.typhi_O.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Salmonella Typhi H</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.widal.salmonella.typhi_H.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.widal.salmonella.typhi_H.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.widal.salmonella.typhi_H.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Salmonella Typhi AO</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.widal.salmonella.paratyphi_AO.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.widal.salmonella.paratyphi_AO.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.widal.salmonella.paratyphi_AO.nilai_normal }}</td>
                </tr>
                <tr>
                    <td>Salmonella Typhi AH</td>
                    <td>
                        <select class="uk-width-1-1 uk-select form-select form-select-small" v-model="props.formInput.widal.salmonella.paratyphi_AH.hasil">
                            <option value="">Pilih Nilai</option>
                            <option v-for="item in props.formInput.widal.salmonella.paratyphi_AH.option" :key="item" :value="item">{{ item }}</option>
                        </select>
                    </td>
                    <td></td>
                    <td>{{ props.formInput.widal.salmonella.paratyphi_AH.nilai_normal }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

</style>