<script setup>
const props = defineProps({
    medicalRecord: Object,
    dataPatient: Object,
});
</script>

<template>
    <tbody v-if="props.medicalRecord.hasOwnProperty('hematologi_rutin') && props.medicalRecord.hematologi_rutin !== null">
        <tr>
            <th colspan="4">Hematologi</th>
        </tr>
        <tr>
            <th colspan="4">Hematologi Rutin</th>
        </tr>
        <tr v-for="(column, index) in props.medicalRecord.hematologi_rutin" :key="`hematologi-rutin-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td v-if="column.label === 'Leukosit'">
                <span v-if="props.dataPatient.category === 'adult'">
                    <span>{{ column.nilai_normal.dewasa }}</span>
                </span>
                <span v-else>{{ column.nilai_normal.anak }}</span>
            </td>
            <td v-else-if="column.label === 'Trombosit'">{{ column.nilai_normal }}</td>
            <td v-else>
                <span v-if="props.dataPatient.category === 'adult'">
                    <span v-if="props.dataPatient.gender.value === 'L'">{{ column.nilai_normal.laki }}</span>
                    <span v-else>{{ column.nilai_normal.perempuan }}</span>
                </span>
                <span v-else>{{ column.nilai_normal.anak }}</span>
            </td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('index_eritrosit') && props.medicalRecord.index_eritrosit !== null">
        <tr v-if="props.medicalRecord.index_eritrosit">
            <th colspan="4">Index Eritrosit</th>
        </tr>
        <tr v-if="props.medicalRecord.index_eritrosit" v-for="(column, index) in props.medicalRecord.index_eritrosit" :key="`index-eritrosit-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('laju_endap_darah') && props.medicalRecord.laju_endap_darah !== null">
        <tr>
            <th>Laju Endap Darah</th>
            <td>{{ props.medicalRecord.laju_endap_darah.hasil }}</td>
            <td>{{ props.medicalRecord.laju_endap_darah.satuan }}</td>
            <td>
                <span v-if="props.dataPatient.gender.value === 'P'">{{ props.medicalRecord.laju_endap_darah.perempuan }}</span>
                <span v-else>{{ props.medicalRecord.laju_endap_darah.laki }}</span>
            </td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('jenis_leukosit') && props.medicalRecord.jenis_leukosit !== null">
        <tr v-if="props.medicalRecord.index_eritrosit">
            <th colspan="4">Index Eritrosit</th>
        </tr>
        <tr v-if="props.medicalRecord.jenis_leukosit" v-for="(column, index) in props.medicalRecord.jenis_leukosit" :key="`jenis-leukosit-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>