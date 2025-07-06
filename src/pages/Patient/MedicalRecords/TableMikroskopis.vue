<script setup>
const props = defineProps({
    medicalRecord: Object,
});
</script>

<template>
    <tbody>
        <tr>
            <th colspan="4">Mikroskopis</th>
        </tr>
        <tr>
            <th colspan="4">Feses</th>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('makroskopis') && props.medicalRecord.makroskopis !== null">
        <tr><th colspan="4">Makroskopis</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.makroskopis" :key="`makroskopis-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('mikroskopis') && props.medicalRecord.mikroskopis !== null">
        <tr><th colspan="4">Mikroskopis</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.mikroskopis" :key="`mikroskopis-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('bta') && props.medicalRecord.bta.hasil !== null">
        <tr>
            <th>BTA</th>
            <td>{{ props.medicalRecord.bta.hasil }}</td>
            <td>{{ props.medicalRecord.bta.satuan }}</td>
            <td>{{ props.medicalRecord.bta.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('ims') && props.medicalRecord.ims !== null">
        <tr><th colspan="4">IMS</th></tr>
        <tr v-if="props.medicalRecord.ims.hasOwnProperty('laki') && props.medicalRecord.ims.laki !== null" v-for="(column, index) in props.medicalRecord.ims.laki" :key="`ims-laki-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>

        <tr v-if="props.medicalRecord.ims.hasOwnProperty('perempuan') && props.medicalRecord.ims.perempuan !== null" v-for="(column, index) in props.medicalRecord.ims.perempuan" :key="`ims-perempuan-${index}`">
            <td>{{ column.label }}</td>
            <td>{{ column.hasil }}</td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>