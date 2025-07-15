<script setup>
const props = defineProps({
    medicalRecord: Object,
})
</script>

<template>
    <tbody v-if="props.medicalRecord !== null">
        <tr><th colspan="4">Lainnya</th></tr>
        <tr v-for="(column, index) in props.medicalRecord" :key="`lainnya-${index}`">
            <td>{{ column.label }}</td>
            <td>
                {{ column.hasil }}
                <span v-if="column.hasOwnProperty('note') && column.note !== null">(Keterangan: {{ column.note }})</span>
            </td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>