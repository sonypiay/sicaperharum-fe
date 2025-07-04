<script setup>
const props = defineProps({
    medicalRecord: Object,
    dataPatient: Object,
});
</script>

<template>
    <tbody v-if="props.medicalRecord.hasOwnProperty('diabetes') && props.medicalRecord.diabetes !== null">
        <tr><th colspan="4">Kimia Klinik</th></tr>
        <tr><th colspan="4">Diabetes</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.diabetes" :key="`diabetes-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('lipid') && props.medicalRecord.lipid !== null">
        <tr><th colspan="4">Lipid</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.lipid" :key="`lipid-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('fungsi_ginjal') && props.medicalRecord.fungsi_ginjal !== null">
        <tr><th colspan="4">Fungsi Ginjal</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.fungsi_ginjal" :key="`fungsi_ginjal-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td v-if="column.label === 'Creatinin' || column.label === 'Asam Urat'">
                <span v-if="props.dataPatient.gender === 'L'">{{ column.nilai_normal.laki }}</span>
                <span v-else>{{ column.nilai_normal.perempuan }}</span>
            </td>
            <td v-else>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('fungsi_hati') && props.medicalRecord.fungsi_hati !== null">
        <tr><th colspan="4">Fungsi Hati</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.fungsi_hati" :key="`fungsiHati-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>
                <span v-if="props.dataPatient.gender === 'L'">{{ column.nilai_normal.laki }}</span>
                <span v-else>{{ column.nilai_normal.perempuan }}</span>
            </td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>