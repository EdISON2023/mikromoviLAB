import { createRouter, createWebHistory } from "vue-router";
import dashboard from '@/pages/master/dashboard.vue';
import home from '@/pages/home.vue';
import usuarios from "@/pages/PlantillaUsuariosGestor.vue";
import estaciones from "@/pages/estaciones.vue";
import bicicletas from "@/pages/bicicletas.vue";
import mantenimiento from "@/pages/mantenimiento.vue";
import alquiler from "@/pages/alquiler.vue";
import estadisticas from "@/pages/estadisticas.vue";
import viajes from "@/pages/ViajesUs.vue";
import CrudPlantilla from "@/pages/CrudPlantilla.vue";

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: dashboard
  },
  {
    name: 'Home',
    path: '/home',
    component: home
  },
  {
    name: 'Usuarios',
    path: '/usuarios',
    component: usuarios
  },
  {
    name: 'Estaciones',
    path: '/estaciones',
    component: estaciones
  },
  {
    name: 'Bicicletas',
    path: '/bicicletas',
    component: bicicletas
  },
  {
    name: 'Mantenimiento',
    path: '/mantenimiento',
    component: mantenimiento
  },
  {
    name: 'Alquiler',
    path: '/alquiler',
    component: alquiler
  },
  {
    name: 'Estadisticas',
    path: '/estadisticas',
    component: estadisticas
  },
  {
    name: 'V',
    path: '/estadisticas',
    component: estadisticas
  },
  {
    name: 'Viajes',
    path: '/viajes',
    component: viajes
  },
  {
    name: 'CrudPlantilla ',
    path: '/CrudPlantilla',
    component: CrudPlantilla
  },


];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
