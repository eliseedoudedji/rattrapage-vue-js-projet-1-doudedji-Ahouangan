<script setup>
import TheHeader from '@/components/TheHeader.vue'
import NavBottom from '@/components/NavBottom.vue'
import router from '@/router'
import { ref } from 'vue'
import { onBeforeMount } from 'vue'

// if (!localStorage.getItem('activeUser')) {
//   router.push('/login')
// }

var profile = ref('')
onBeforeMount(() => {
  profile.value = JSON.parse(localStorage.getItem('activeUser'))
})
var del = ref(false)
function delet() {
  del.value = !del.value
}
function sup() {
  localStorage.removeItem('activeUser')
  setTimeout(() => {
    profile.value = JSON.parse(localStorage.getItem('activeUser'))
    router.push('/login')
  }, 500)
}
</script>
<template>
  <div
    v-if="del"
    class="text-white"
    style="
      position: absolute;
      top: 30%;
      left: 40%;
      background-color: blue;
      width: 400px;
      height: 300px;
      text-align: center;
      justify-content: center;
      align-items: center;
      display: flex;
    "
  >
    Êtes - vous sûr? <br /><span style="width: 20px"></span>
    <button
      style="color: red; background-color: transparent; font-size: 20px"
      @click="sup(), (del = !del)"
    >
      oui
    </button>
    <span style="width: 20px"></span>
    <button
      style="color: white; background-color: transparent; font-size: 20px"
      @click="del = !del"
    >
      non
    </button>
  </div>
  <div class="py-5"></div>
  <TheHeader />

  <section class="main">
    <div>
      <div class="h-screen dark:bg-gray-700 bg-gray-200 pt-12">
        <!-- Card start -->
        <div
          class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
        >
          <div class="border-b px-4 pb-6">
            <div class="text-center my-4">
              <span
                class="text-white"
                style="
                  font-size: 25px;
                  font-weight: bold;
                  text-transform: uppercase;
                  background-color: blue;
                  width: 50px;
                  height: 50px;
                  display: block;
                  text-align: center;
                  border-radius: 100px;
                  justify-items: center;
                  align-items: center;
                  margin-left: 150px;
                "
                >{{ profile.userName.slice(0, 1) }}</span
              >
              <div class="py-2">
                <h3 class="font-bold text-2xl text-white dark:text-white mb-1">
                  {{ profile.userName }}
                </h3>
                <div class="inline-flex text-white dark:text-gray-300 items-center">
                  {{ profile.userMail }}
                </div>
              </div>
            </div>
            <div class="flex gap-2 px-2">
              <button
                class="flex-1 rounded-full dark:bg-blue text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2"
                style="border: 1px solid blue; background-color: blue"
              >
                Modifier
              </button>
              <button
                class="flex-1 rounded-full border-2 border-gray-400 dark:border-gray-700 font-semibold text-white dark:text-white px-4 py-2"
                style="border: 1px solid red; background-color: red"
                @click="delet"
              >
                Supprimer
              </button>
            </div>
          </div>
          <div class="px-4 py-4" style="text-align: center">
            <div
              class="flex gap-2 text-gray-800 dark:text-gray-300 mb-4"
              style="text-align: center"
            >
              <span class="text-center" style="text-align: center">Apercu de vos activités</span>
            </div>
          </div>
        </div>
        <div class="flex h-screen bg-gray-100">
          <NavBottom />
          <!-- Main content -->
          <div class="flex flex-col flex-1 overflow-y-auto">
            <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
              <div class="flex items-center px-4">
                <input
                  class="mx-4 w-full border rounded-md px-4 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
            <div class="p-4"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- The naviguation -->
  </section>
</template>
<style scoped>
* {
  background-color: black;
}
</style>
