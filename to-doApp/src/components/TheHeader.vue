<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { RouterLink } from 'vue-router'

import { ref } from 'vue'
var seeUser = ref(false)
var theUser = ref('')
if (localStorage.getItem('activeUser')) {
  seeUser.value = true
  theUser.value = JSON.parse(localStorage.getItem('activeUser'))
}
</script>
<template>
  <Disclosure as="nav" class="bg-black" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center mr-10">
            <img class="h-12 w-auto" src="../assets/images/todo.png" alt="Our logo" />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4 pt-2">
              <RouterLink to="/" class="text-dark px-3 py-2 text-sm font-medium theLink"
                >Acceuil</RouterLink
              >
              <a href="#" class="text-dark px-3 py-2 text-sm font-medium theLink">A propos</a>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="flex" v-if="!seeUser">
            <RouterLink
              to="/login"
              class="text-dark rounded-md px-3 py-2 text-sm font-medium theLinkConnexion"
            >
              Connexion</RouterLink
            >
          </div>
          <div class="flex" v-if="seeUser">
            <RouterLink
              to="/taches"
              class="text-dark rounded-md px-3 py-2 text-sm font-medium theLinkConnexion"
            >
              Votre dashborad</RouterLink
            >
          </div>
          <button
            v-if="seeUser"
            type="button"
            class="relative rounded-full bg-gray p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3" v-if="seeUser">
            <div>
              <MenuButton
                class="relative flex"
                style="
                  background-color: blue;
                  border-color: blue;
                  border: 1px solid blue;
                  border-radius: 100%;
                  height: 40px;
                  width: 40px;
                  justify-content: center;
                  align-items: center;
                "
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">Open user menu</span>
                <span
                  class="text-white"
                  style="font-size: 25px; font-weight: bold; text-transform: uppercase"
                  >{{ theUser.userName.slice(0, 1) }}</span
                >
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <RouterLink
                    to="/profile"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Profile</RouterLink
                  >
                </MenuItem>

                <MenuItem v-slot="{ active }">
                  <RouterLink
                    href="#"
                    :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
                    >Sign out</RouterLink
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          ><div class="flex space-x-4">
            <a href="#" class="text-white rounded-md px-3 py-2 text-sm font-medium theLink"
              >Acceuil</a
            >
            <a href="#" class="text-white rounded-md px-3 py-2 text-sm font-medium theLink"
              >Apropos</a
            >
          </div></DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<style scoped>
.theLink {
  color: white;
  font-size: 20px;
}
.theLinkConnexion {
  border: 1px solid blue;
  color: white;
  font-size: 20px;
  background-color: blue;
}
</style>
