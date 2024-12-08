// stores/counter.js
import { defineStore } from "pinia";

export const usePedidoStore = defineStore("pedido", {
  state: () => {
    return {
      count: 0,
      datoguardado: "",
      pedidos: [
        {
          Numped: "PE000002",
          Emision: "06/01/2024",
          Cliente: "J000312230",
          Nomcli: "Jesus Perez",
          Codven: "00034",
          Comen1: "Comentario xyz",
          Comen2: "Segundo comentario",
          Estatus: "PE",
          Entrega: "06/01/2024",
        },
        {
          Numped: "PE000002",
          Emision: "06/01/2024",
          Cliente: "J000312230",
          Nomcli: "Jesus Perez",
          Codven: "00034",
          Comen1: "Comentario xyz",
          Comen2: "Segundo comentario",
          Estatus: "PE",
          Entrega: "06/01/2024",
        },
      ],
      renped: [
        {
          Item: "7248",
          Unidad: "",
          Bulto: 1,
          Cantidad: 2,
          Descrip: "Sensor 3 Pines TPS-Fiesta",
          Numped: "PE0000002",
          Emision: "06/01/2024",
          Estatus: "PE",
          Despacho: 0,
          Desbulto: 1,
          Precio: 100,
          Desc: 35,
          Tot_ren: 0,
          Iva: "",
          Cliente: "J0000313230",
          Codven: "00034",
          Codsuc: "",
        },
        {
          Item: "7248",
          Unidad: "",
          Bulto: 1,
          Cantidad: 2,
          Descrip: "Sensor 3 Pines TPS-Fiesta",
          Numped: "PE0000002",
          Emision: "06/01/2024",
          Estatus: "PE",
          Despacho: 0,
          Desbulto: 1,
          Precio: 100,
          Desc: 35,
          Tot_ren: 0,
          Iva: "",
          Cliente: "J0000313230",
          Codven: "00034",
          Codsuc: "",
        },
      ],
      encpedtemp: {
        Numped: "",
        Emision: "",
        Cliente: "",
        Nomcli: "",
        Codven: "",
        Comen1: "",
        Comen2: "",
        Estatus: "",
        Entrega: "",
      },
      renpedtemp: [],
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++;
    },
  },
});
