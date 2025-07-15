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
            <td>
                {{ column.hasil }}
                <span v-if="column.hasOwnProperty('note') && column.note !== null">
                    (Keterangan: {{ column.note }})
                </span>
            </td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('mikroskopis') && props.medicalRecord.mikroskopis !== null">
        <tr><th colspan="4">Mikroskopis</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.mikroskopis" :key="`mikroskopis-${index}`">
            <td>{{ column.label }}</td>
            <td>
                {{ column.hasil }}
                <span v-if="column.hasOwnProperty('note') && column.note !== null">
                    (Keterangan: {{ column.note }})
                </span>
            </td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.hasOwnProperty('bta') && props.medicalRecord.bta.hasil !== null">
        <tr>
            <th>BTA</th>
            <td>
                {{ props.medicalRecord.bta.hasil }}

                <span v-if="props.medicalRecord.bta.hasOwnProperty('note') && props.medicalRecord.bta.note !== null">
                    (Keterangan: {{ props.medicalRecord.bta.note }})
                </span>
            </td>
            <td>{{ props.medicalRecord.bta.satuan }}</td>
            <td>{{ props.medicalRecord.bta.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.ims.laki !== null">
        <tr><th colspan="4">IMS</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.ims.laki" :key="`ims-laki-${index}`">
            <td v-html="column.label"></td>
            <td>
                {{ column.hasil }}
                <span v-if="column.hasOwnProperty('note') && column.note !== null">
                    (Keterangan: {{ column.note }})
                </span>
            </td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>

    <tbody v-if="props.medicalRecord.ims.perempuan !== null">
        <tr><th colspan="4">IMS</th></tr>
        <tr v-for="(column, index) in props.medicalRecord.ims.perempuan" :key="`ims-perempuan-${index}`">
            <td v-html="column.label"></td>
            <td>
                {{ column.hasil }}
                <span v-if="column.hasOwnProperty('note') && column.note !== null">
                    (Keterangan: {{ column.note }})
                </span>
            </td>
            <td>{{ column.satuan }}</td>
            <td>{{ column.nilai_normal }}</td>
        </tr>
    </tbody>
</template>

<style scoped>

</style>