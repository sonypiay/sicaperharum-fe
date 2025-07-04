<script setup>
const props = defineProps({
    medicalRecord: Object
});
</script>

<template>
    <tbody v-if="props.medicalRecord.hasOwnProperty('makroskopis_kimia') && props.medicalRecord.makroskopis_kimia !== null">
        <tr><th colspan="4">Urinalisa</th></tr>
        <tr><th colspan="4">Makroskopis / Kimia</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.makroskopis_kimia" :key="`makroskopis_kimia-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('sedimen') && props.medicalRecord.sedimen !== null">
        <tr><th colspan="4">Sedimen</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.sedimen" :key="`sedimen-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>