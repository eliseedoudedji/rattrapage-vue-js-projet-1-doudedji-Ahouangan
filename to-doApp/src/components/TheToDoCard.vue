<script setup>
import { ref } from 'vue'
import { useToDoStore } from '@/stores/ToDoStore'
import { onBeforeMount } from 'vue'
import router from '@/router'

const userStore = useToDoStore()
onBeforeMount(() => {
  userStore.todos = JSON.parse(localStorage.getItem('allToDo'))
  router.push('/taches')
})
var edit = ref(true)
function change() {
  edit.value = !edit.value
}
</script>
<template>
  <div class="flex">
    <div
      class="flex flex-col flex-1 overflow-y-auto"
      v-for="card in userStore.toDoList"
      :key="card.id"
    >
      <div class="p-4">
        <div class="modal">
          <article class="modal-container">
            <header class="">
              <div class="flex" style="margin-top: 10px">
                <span
                  style="
                    border-radius: 3px 0px;
                    padding: 4px;
                    color: green;
                    margin-top: 5px;
                    margin-left: 20px;
                    margin-bottom: 10px;
                  "
                  >En cours</span
                >
              </div>

              <div
                style="margin-left: 40px; margin-bottom: 5px; font-size: 20px; font-weight: bold"
              >
                <div class="flex" v-if="edit">
                  <span style="margin-right: 30px">{{ card.theTitle }} </span>
                  <button @click="edit = !edit">
                    <img src="../assets/images/edit.png" alt="edit icon" />
                  </button>
                </div>
                <div class="flex" v-if="!edit">
                  <input
                    style="
                      border: 1px solid grey;
                      border-radius: 5px 0px;
                      padding: 2px;
                      max-width: 250px;
                      margin-right: 10px;
                    "
                    id="grid-first-name"
                    type="text"
                    :value="card.theTitle"
                  />

                  <button @click="change">
                    <span style="font-weight: normal; font-size: 15px; color: blue">valider</span>
                  </button>
                </div>
              </div>
            </header>

            <section class="modal-container-body rtf">
              <p v-if="edit">
                {{ card.TheDescrib }}
              </p>
              <div class="flex" v-if="!edit">
                <textarea
                  required
                  class="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                  :value="card.TheDescrib"
                  style="min-height: 300px"
                ></textarea>
              </div>
            </section>

            <footer class="modal-container-footer">
              <div class="flex">
                <div v-if="edit" style="font-size: 12px">{{ card.TheDateDown }}</div>
                <div v-if="!edit" class="flex">
                  <div style="font-size: 12px">Début : {{ card.TheDateDown }}</div>
                  <div style="margin-left: 20px"></div>
                  <input type="date" style="font-size: 12px" />
                </div>
              </div>
              <button v-if="edit" class="button is-ghost">Modifier</button>
              <button v-if="edit" class="button is-primary">Supprimer</button>
            </footer>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* From Uiverse.io by Admin12121 */
.button,
.input,
.select,
.textarea {
  font: inherit;
}

a {
  color: inherit;
}

.modal-container {
  max-height: 400px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.25);
}

@media (max-width: 600px) {
  .modal-container {
    width: 90%;
  }
}

.modal-container-header {
  padding: 16px 32px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-container-title {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-weight: 700;
  font-size: 1.125;
}

.modal-container-title svg {
  width: 32px;
  height: 32px;
  color: #750550;
}

.modal-container-body {
  padding: 24px 32px 51px;
  overflow-y: auto;
}

.rtf h1,
.rtf h2,
.rtf h3,
.rtf h4,
.rtf h5,
.rtf h6 {
  font-weight: 700;
}

.rtf h1 {
  font-size: 1.5rem;
  line-height: 1.125;
}

.rtf h2 {
  font-size: 1.25rem;
  line-height: 1.25;
}

.rtf h3 {
  font-size: 1rem;
  line-height: 1.5;
}

.rtf > * + * {
  margin-top: 1em;
}

.rtf > * + :is(h1, h2, h3) {
  margin-top: 2em;
}

.rtf > :is(h1, h2, h3) + * {
  margin-top: 0.75em;
}

.rtf ul,
.rtf ol {
  margin-left: 20px;
  list-style-position: inside;
}

.rtf ol {
  list-style: numeric;
}

.rtf ul {
  list-style: disc;
}

.modal-container-footer {
  padding: 20px 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top: 1px solid #ddd;
  gap: 12px;
  position: relative;
}

.modal-container-footer:after {
  content: '';
  display: block;
  position: absolute;
  top: -51px;
  left: 24px;
  right: 24px;
  height: 50px;
  flex-shrink: 0;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.75), transparent);
  pointer-events: none;
}

.button {
  padding: 12px 20px;
  border-radius: 8px;
  background-color: transparent;
  border: 0;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s ease;
}

.button.is-ghost:hover,
.button.is-ghost:focus {
  background-color: #dfdad7;
}

.button.is-primary {
  background-color: #750550;
  color: #fff;
}

.button.is-primary:hover,
.button.is-primary:focus {
  background-color: #4a0433;
}

.icon-button {
  padding: 0;
  border: 0;
  background-color: transparent;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  cursor: pointer;
  border-radius: 8px;
  transition: 0.15s ease;
}

.icon-button svg {
  width: 24px;
  height: 24px;
}

.icon-button:hover,
.icon-button:focus {
  background-color: #dfdad7;
}
</style>
