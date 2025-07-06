<script setup>

import {onMounted, reactive} from "vue";
import dashboardAPI from "../utils/api/DashboardAPI.js";
import {toastFailed} from "../utils/alerts.js";

const dataSummaryVisitor = reactive({
    total_harian: 0,
    total_bulanan: 0,
    total_tahunan: 0,
    total_all: 0,
    date: '',
});

async function fetchSummaryVisitor() {
    const fetchApi = await dashboardAPI.totalSummaryVisitor(dataSummaryVisitor.date);
    const responseBody = fetchApi.data;
    const statusCode = fetchApi.statusCode;

    if( statusCode === 200 ) {
        dataSummaryVisitor.total_harian = responseBody.total_harian;
        dataSummaryVisitor.total_bulanan = responseBody.total_bulanan;
        dataSummaryVisitor.total_tahunan = responseBody.total_tahunan;
        dataSummaryVisitor.total_all = responseBody.total_all;
    } else {
        toastFailed("Gagal mengambil data summary visitor.");
    }
}

onMounted(async () => {
    await fetchSummaryVisitor();
});
</script>

<template>
    <div class="dashboard-container">
        <div class="dashboard-header">
            <div class="title">Dashboard Overview</div>
            <div class="subtitle">Selamat datang di Sicaperharum</div>
        </div>

        <div class="card-summary-visitor">
            <div class="heading">Report Kunjungan</div>
            <div class="uk-grid-small uk-grid-divider" uk-grid>
                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Total</div>
                        <div class="desc">{{ dataSummaryVisitor.total_tahunan }}</div>
                    </div>
                </div>

                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Tahunan</div>
                        <div class="desc">{{ dataSummaryVisitor.total_tahunan }}</div>
                    </div>
                </div>

                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Bulanan</div>
                        <div class="desc">{{ dataSummaryVisitor.total_bulanan }}</div>
                    </div>
                </div>

                <div class="uk-width-1-4@m uk-width-1-2@s">
                    <div class="uk-card uk-card-body uk-card-small card-summary-item">
                        <div class="title">Harian</div>
                        <div class="desc">{{ dataSummaryVisitor.total_harian }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>