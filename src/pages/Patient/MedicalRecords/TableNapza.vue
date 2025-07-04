<script setup>
const props = defineProps({
    medicalRecord: Object,
});
</script>

<template>
    <tbody v-if="props.medicalRecord.napza !== null">
        <tr><th colspan="4">Napza</th></tr>
        <tr v-for="(column, index) in props.medicalRecord" :key="`napza-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>