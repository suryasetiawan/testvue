<template>
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Company Table</h3>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Perusahaan</th>
                                <th>Pengeluaran</th>
                                <th>Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- MELAKUKAN LOOPING DARI COMPUTED PROPERTY perusahaan() -->
                            <tr v-for="(row, index) in perusahaan" :key="index">
                                <td>{{ index+1 }}</td>
                                <td>{{ row.nama }}</td>
                                <td>{{ row.pengeluaran }}</td>
                                <td>{{ row.notes }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'CompanyTable',
        computed: {
            perusahaan() {
                return this.$store.state.listPerusahaan
            }
        }
    }
</script>
