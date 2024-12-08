const routes = [
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "/", redirect: "/login" },
      { path: "login", component: () => import("src/pages/LoginPage.vue") },
    ],
    meta: { auth: false },
  },
  {
    path: "/app",
    component: () => import("layouts/AdminLayout.vue"),
    children: [
      {
        path: "home",
        name: "nameHomePage",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "pedidos",
        name: "namePedidos",
        component: () => import("pages/PedidosPage.vue"),
      },
      {
        path: "Usuarios",
        name: "nameUsuarios",
        component: () => import("pages/UsuariosPage.vue"),
      },
      {
        path: "Verlinea",
        name: "nameVerlinea",
        component: () => import("src/pages/VerlineaPage.vue"),
      },
      {
        path: "Facturas",
        name: "nameSalesFactura",
        component: () => import("pages/SalesFactura.vue"),
      },
      {
        path: "Tabla2",
        name: "nameTablaPage2",
        component: () => import("pages/TablaPage2.vue"),
      },
      {
        path: "Tabla3",
        name: "nameTablaPage3",
        component: () => import("pages/TablaPage3.vue"),
      },
      {
        path: "FlexPage",
        name: "nameFlexPage",
        component: () => import("pages/FlexPage.vue"),
      },
      {
        path: "PiniaPage",
        name: "namePiniaPage",
        component: () => import("pages/PiniaPage.vue"),
      },
      {
        path: "StorePage",
        name: "nameStorePage",
        component: () => import("pages/StorePage.vue"),
      },
      {
        path: "CicloVida",
        name: "nameCicloVida",
        component: () => import("pages/CicloVida.vue"),
      },
    ],
  },
  {
    path: "/vdd",
    component: () => import("layouts/VendorLayout.vue"),
    children: [
      {
        path: "pedidos",
        name: "namePedidosVendor",
        component: () => import("pages/PedidosVendor.vue"),
      },
      {
        path: "clientes",
        name: "nameClientes",
        component: () => import("pages/ClientesPage.vue"),
      },
      {
        path: "articulos",
        name: "nameArticulos",
        component: () => import("pages/ArticulosPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
