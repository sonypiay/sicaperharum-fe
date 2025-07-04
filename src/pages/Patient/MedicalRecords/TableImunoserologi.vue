<script setup>
const props = defineProps({
    medicalRecord: Object,
});
</script>

<template>
    <tbody>
        <tr><th colspan="4">Imunoserologi</th></tr>
    </tbody>
    <tbody v-if="props.medicalRecord.golongan_darah !== null">
        <tr>
            <td>Golongan Darah</td>
            <td>{{ props.medicalRecord.golongan_darah }}</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.rhesus !== null">
        <tr>
            <td>Rhesus</td>
            <td>{{ props.medicalRecord.rhesus }}</td>
            <td></td>
            <td></td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('hiv') && props.medicalRecord.hiv !== null">
        <tr><th colspan="4">HIV</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.hiv" :key="`hiv-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('widal') && props.medicalRecord.widal !== null">
        <tr><th colspan="4">Widal</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.widal" :key="`widal-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>