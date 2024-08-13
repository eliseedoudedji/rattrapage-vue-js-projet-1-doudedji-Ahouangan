<script setup>
import { useToDoStore } from '@/stores/ToDoStore'

import { ref } from 'vue'
const userStore = useToDoStore()

defineProps({
  isDisplay: Boolean,
  show: Function
})

var title = ref('')
var describ = ref('')
var dateUp = ref('')
var dateDown = ref('')
var priority = ref('')
var tache = ref('')
var isTitle = ref('')
var isDescrib = ref('')
var isDateUp = ref('')
var isDateDown = ref('')
var isPriority = ref('')
var istrue = ref('')
function addTache() {
  if (title.value == null || title.value.trim() == '') {
    isTitle.value = 'Veuillez remplire le champs'
    return false
  } else {
    isTitle.value = ''
  }
  if (describ.value == null || describ.value.trim() == '') {
    isDescrib.value = 'Veuillez remplire le champs'
    return false
  } else {
    isDescrib.value = ''
  }
  if (dateUp.value == null || dateUp.value.trim() == '') {
    isDateUp.value = 'Veuillez choisir une date de début'
    return false
  } else {
    isDateUp.value = ''
  }
  if (dateDown.value == null || dateDown.value.trim() == '') {
    isDateDown.value = 'Veuillez choisir une date de fin'
    return false
  } else {
    isDateDown.value = ''
  }
  if (Date.parse(dateDown.value) - Date.parse(dateUp.value) < 0) {
    istrue.value = "Oups ...! Période d'échéance ne marche pas"
    return false
  } else {
    istrue.value = ''
  }
  if (priority.value == null || priority.value.trim() == '') {
    isPriority.value = 'Veuillez choisir une priorité'
    return false
  } else {
    isPriority.value = ''
  }
  tache.value = {
    creater: JSON.parse(localStorage.getItem('activeUser')),
    theTitle: title.value,
    TheDescrib: describ.value,
    TheDateUp: dateUp.value,
    TheDateDown: dateDown.value,
    ThePriority: priority.value
  }

  userStore.addToDo(tache.value)
}
</script>
<template>
  <div
    class="font-[sans-serif]"
    v-if="isDisplay"
    style="
      z-index: 999;
      position: absolute;
      top: 2px;
      left: 0%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.696);
    "
  >
    <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div class="max-w-md w-full">
        <div class="p-8 rounded-2xl bg-white shadow">
          <button>
            <span
              style="
                border: 1px solid red;
                padding: 3px;
                border-radius: 3px;
                color: white;
                background-color: red;
              "
              @click="show"
              >Fermer</span
            >
          </button>

          <h2 class="text-gray-800 text-center text-2xl font-bold">Creer votre tâche</h2>
          <form class="mt-8 space-y-4">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Titre de la tâche</label>
              <span style="color: red">{{ isTitle }}</span>
              <div class="relative flex items-center">
                <input
                  name="username"
                  type="text"
                  required
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Enter user name"
                  v-model="title"
                />
              </div>
            </div>

            <div>
              <label class="text-gray-800 text-sm mb-2 block">Description de la tâche</label>
              <span style="color: red">{{ isDescrib }}</span>
              <div class="relative flex items-center">
                <textarea
                  required
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  placeholder="Entrer votre description"
                  style="max-height: 150px"
                  v-model="describ"
                ></textarea>
              </div>
            </div>
            <span style="color: red">{{ isDateUp }}</span>
            <span style="color: red">{{ isDateDown }}</span>
            <span style="color: red">{{ istrue }}</span>

            <div class="flex" style="margin-left: 40px">
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Départ</label>
                <div class="relative flex items-center">
                  <input
                    name="date"
                    type="date"
                    required
                    class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter date"
                    v-model="dateUp"
                  />
                </div>
              </div>
              <div style="margin-left: 5px"></div>
              <div>
                <label class="text-gray-800 text-sm mb-2 block">Echéance</label>
                <div class="relative flex items-center">
                  <input
                    name="date"
                    type="date"
                    required
                    class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter date"
                    v-model="dateDown"
                  />
                </div>
              </div>
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Priorité de la tâche</label>
              <span style="color: red">{{ isPriority }}</span>

              <div class="relative flex items-center">
                <select
                  v-model="priority"
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Choisir une priorité</option>
                  <option value="lessImportante">moins important</option>
                  <option value="importante">important</option>
                  <option value="veryImportante">Très important</option>
                </select>
              </div>
            </div>

            <div class="!mt-8">
              <button
                type="button"
                class="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                @click="addTache"
              >
                Creer
              </button>
            </div>
            <!-- <p class="text-gray-800 text-sm !mt-8 text-center">
              Don't have an account?
              <a
                href="javascript:void(0);"
                class="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >Register here</a
              >
            </p> -->
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
