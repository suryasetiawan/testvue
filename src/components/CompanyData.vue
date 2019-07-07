<template>

    <div class="col-md-4">
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Company Data</h3>
            </div>
            <div class="card-body">
                <div class="form-group">
                    <label for="">Perusahaan</label>
                    <input type="text" v-model="perusahaan.nama" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">Pengeluaran</label>
                    <input type="text" v-model="perusahaan.pengeluaran" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="">Notes</label>
                     <textarea v-model="perusahaan.notes" class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-danger btn-lg"
                        :disabled="isLoading"
                        @click.prevent="simpan">{{ isLoading ? 'Loading...':'Tambahkan' }}</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {
        name: 'CompanyData',
        data() {
            return {
                perusahaan: {
                    nama: '',
                    pengeluaran: '',
                    notes: ''
                }
            }
        },
        computed: {
            isLoading() {
                return this.$store.state.isLoading
            }
        },
        methods: {
            simpan() {
                this.$store.dispatch('simpanPerusahaan', this.perusahaan)
                this.perusahaan = {
                    nama: '',
                    pengeluaran: '',
                    notes: ''
                }
            }
        }
    }
</script>
