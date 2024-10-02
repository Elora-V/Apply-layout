<template>
  <div class="app-container">
    <!-- Navigation Bar -->
    <div class="nav-bar">
      <button v-on:click="rescale(svgProperties)">Rescale</button>

      <input
        type="file"
        accept=".json, .xml"
        label="File input"
        v-on:change="loadFile"
        class="margin"
      />

      <button v-on:click="layout()" class="styled-button">Layout</button>
    </div>

    <!-- Network Component Container -->
    <div class="network-container">
      <NetworkComponent
        v-on:contextmenu.prevent
        :network="network"
        :graphStyleProperties="networkStyle"
        @nodeRightClickEvent="openContextMenu"
      ></NetworkComponent>

      <ContextMenu
        v-if="menuProps.showMenu"
        :actions="menuProps.contextMenuActions"
        @action-clicked="UseContextMenu.handleActionClick"
        @closeMenu="UseContextMenu.closeContextMenu"
        :x="menuProps.menuX"
        :y="menuProps.menuY"
      ></ContextMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { importNetworkFromFile, initZoom, rescale } from '@metabohub/viz-core'
import type { Network } from '@metabohub/viz-core/src/types/Network'
import type { GraphStyleProperties } from '@metabohub/viz-core/src/types/GraphStyleProperties'
import { NetworkComponent } from '@metabohub/viz-core'
import { UseContextMenu } from '@metabohub/viz-context-menu'

let svgProperties = reactive({})
let network = ref<Network>({ id: '', nodes: {}, links: [] })
const networkStyle = ref<GraphStyleProperties>({
  nodeStyles: {},
  linkStyles: {}
})
import {
  layoutOnNetwork,
  PathType,
  defaultParameters
} from '/home/elora/Documents/Apply-layout/dist/index'

import type { Node } from '/home/elora/Documents/Apply-layout/dist/index'
const menuProps = UseContextMenu.defineMenuProps([{ label: 'test', action: test }])

onMounted(() => {
  console.log('mounted')
  svgProperties = initZoom()
})

function loadFile(event: Event) {
  const target = event.target as HTMLInputElement
  const files = target.files as FileList
  const file = files[0]
  importNetworkFromFile(file, network, networkStyle, callbackFunction)
}

function openContextMenu(Event: MouseEvent, nodeId: string) {
  // to DEBUG
  console.log('event !')
  UseContextMenu.showContextMenu(Event, nodeId)
}

function callbackFunction() {
  const param = defaultParameters

  console.log(param)
  const testNode: Node = { id: 'node', x: 0, y: 0 }
  console.log(testNode)
  const testPath: PathType = PathType.ALL
  console.log(testPath)
}

function test() {
  console.log('test')
}
async function layout() {
  console.log('layout')
  const result = await layoutOnNetwork(network.value, networkStyle.value)
  network.value = result
}
</script>

<style scoped>
@import '@metabohub/viz-core/dist/style.css';
/* Flex container */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh; /* Full viewport height */
}

/* Navigation bar */
.nav-bar {
  background-color: #f8f9fa; /* Adjust as needed */
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds a shadow */
}

/* Network component container takes the remaining space */
/* .network-container {
  flex: 1;
  display: flex;
  justify-content: center; 
  align-items: center; 
  overflow: hidden; 
  position: relative;
} */
</style>
