<script setup>
const props = defineProps({
    medicalRecord: Object,
});
</script>

<template>
    <tbody>
        <tr><th colspan="4">Imunoserologi</th></tr>
    </tbody>
    <tbody v-if="props.medicalRecord.golongan_darah.hasil !== null">
        <tr>
            <td>Golongan Darah</td>
            <td>{{ props.medicalRecord.golongan_darah.hasil }}</td>
            <td>{{ props.medicalRecord.golongan_darah.satuan }}</td>
            <td>{{ props.medicalRecord.golongan_darah.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.rhesus.hasil !== null">
        <tr>
            <td>Rhesus</td>
            <td>{{ props.medicalRecord.rhesus.hasil }}</td>
            <td>{{ props.medicalRecord.rhesus.satuan }}</td>
            <td>{{ props.medicalRecord.rhesus.nilai_normal }}</td>
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

    <tbody v-if="props.medicalRecord.hasOwnProperty('sifilis') && props.medicalRecord.sifilis !== null">
        <tr><th colspan="4">Sifilis</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.sifilis" :key="`sifilis-${index}`">
            <td>{{ column.label }}</td>
            <td>
                {{ column.hasil }}
                <span v-if="column.hasOwnProperty('titer') && column.titer !== null">(Titer: {{ column.titer }})</span>
            </td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('hepatitis') && props.medicalRecord.hepatitis !== null">
        <tr><th colspan="4">Hepatitis</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.hepatitis" :key="`hepatitis-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('widal') && props.medicalRecord.widal !== null">
        <tr><th colspan="4">Widal</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.widal" :key="`widal-${index}`">
            <td v-html="column.label"></td>
            <td>
                {{ column.hasil }}
                <span v-if="column.hasOwnProperty('titer') && column.titer !== null">(Titer: {{ column.titer }})</span>
            </td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>