<template>
  <button v-on:click="rescale(svgProperties)">Rescale</button>

  <input
    type="file"
    accept=".json, .xml"
    label="File input"
    v-on:change="loadFile"
    class="margin"
  />

  <button v-on:click="layout()" class="styled-button">Layout</button>

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
  defaultParameters,
  Node
} from '/home/elora/Documents/apply-layout/dist/index'

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
</style>
