<template>
  <q-page>
    <h5 class="q-my-xs q-pt-sm q-ml-md text-black">Department</h5>
    <div class="row q-col-gutter-sm q-ma-xs q-mr-sm">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <q-card flat bordered class="">
          <q-card-section class="row">
            <div class="text-h6 col-12">Account
            </div>
          </q-card-section>

          <q-separator inset></q-separator>

          <q-card-section>
            <q-table
              :rows="account_data"
              :columns="columns"
              row-key="name"
              
            >
              <template v-slot:body-cell-action="props">
                <q-td :props="props">
                  <div class="q-gutter-sm">
                    <q-btn dense color="primary" icon="edit"/>
                    <q-btn dense color="red" icon="delete"/>
                  </div>
                </q-td>
              </template>
            </q-table>
          </q-card-section>
        </q-card>
        <p v-text="ertexto"></p>
        <p v-text="miclave.elvalor"></p>
        <a :href="miclave.linea" v-text="miclave.llevar"></a>
        <p v-html="miclave.negra"></p>
      </div>
     
    </div>
  </q-page>
</template>

<script>
    export default {
        data() {
          const ertexto = "Algodon"
            return {
                columns: [
                    {
                        name: "serial_no",
                        align: "left",
                        label: "Serial No.",
                        field: "serial_no",
                        sortable: true
                    },
                    {
                        name: "designation",
                        align: "left",
                        label: "Designation",
                        field: "designation",
                        sortable: true
                    },
                    {
                        name: "action",
                        align: "left",
                        label: "Action",
                        field: "action",
                        sortable: true
                    }
                ],
                finance_data: [
                    {
                        serial_no: "01",
                        designation: "Admin",
                    },
                    {
                        serial_no: "02",
                        designation: "Staff",
                    },
                    {
                        serial_no: "03",
                        designation: "Admin",
                    }
                ],
                account_data: [
                    {
                        serial_no: "01",
                        designation: "Senior Account",
                    },
                    {
                        serial_no: "02",
                        designation: "Manager Account",
                    },
                    {
                        serial_no: "03",
                        designation: "Manager",
                    }
                ],
                hr_data: [
                    {
                        serial_no: "01",
                        designation: "Manager",
                    },
                    {
                        serial_no: "02",
                        designation: "Department Head",
                    },
                    {
                        serial_no: "03",
                        designation: "assistant",
                    }
                ],
                it_data: [
                    {
                        serial_no: "01",
                        designation: "Software developer",
                    },
                    {
                        serial_no: "02",
                        designation: "Grapics designer",
                    },
                    {
                        serial_no: "03",
                        designation: "Tester",
                    }
                ],
                pagination: {
                    rowsPerPage: 5
                },
                ertexto,
                miclave: {
                  elvalor: 'parangari',
                  linea: 'http://www.google.com',
                  llevar: 'Este link te llevara a google',
                  negra: '<b>Soy un text en negrita</b>'
                }
            }
        }
    }
</script>
