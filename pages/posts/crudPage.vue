<template>
<div>
    <h1><u>My First Table Project</u></h1>
    <table border="10pc" align="center">
        <thead>
            <th scope="col">##</th>
            <th scope="col">Sno</th>
            <th scope="col">Name</th>
            <th scope="col">Place</th>
            <th scope="col">Company</th>
        </thead>
        <tr v-for="(user, k) in users" :key="k">
            <td scope="row" class="trashIconContainer">
                <i class="far fa-trash-alt" @click="deleteRow(k,user)"></i>
            </td>
            <td>
                <input type="number" v-model="user.Sno" />
            </td>
            <td>
                <input type="text" v-model="user.Name" />
            </td>
            <td>
                <input type="text" v-model="user.Place" />
            </td>
            <td>
                <input type="text" v-model="user.Company" />
            </td>
        </tr>
    </table>
    <button type='button' class="btn btn-info" @click="addNewRow">
        <i class="fas fa-plus-circle"></i>
        Add
    </button>
</div>
</template>
<script>
export default {
    data() {
        return {
            users: [{
                Sno: '',
                Name: '',
                Place: '',
                Company: '',
            }]
        }
    },
    methods: {
        addNewRow() {
            this.users.push({
                Sno: '',
                Name: '',
                Place: '',
                Company: '',
            });
        },
        deleteRow(index, invoice_product) {
            var idx = this.invoice_products.indexOf(invoice_product);
            console.log(idx, index);
            if (idx > -1) {
                this.invoice_products.splice(idx, 1);
            }
            this.calculateTotal();
        },
    }
}
</script>
<style scoped>
div {
    background-color: aqua;
    text-align: center;
    height: 500px;
}
</style>