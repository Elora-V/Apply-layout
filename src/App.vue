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
    <div class="networkViz">
      <NetworkComponent
        v-on:contextmenu.prevent
        :network="network"
        :graphStyleProperties="networkStyle"
        @nodeRightClickEvent="openContextMenu"
        @initZoom="getSvgPanZoomInstance"
      ></NetworkComponent>
    </div>
    <ContextMenu
      v-if="menuProps.showMenu"
      :actions="menuProps.contextMenuActions"
      @action-clicked="UseContextMenu.handleActionClick"
      @closeMenu="UseContextMenu.closeContextMenu"
      :x="menuProps.menuX"
      :y="menuProps.menuY"
    ></ContextMenu>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { importNetworkFromFile, rescale, svgPanZoom } from '@metabohub/viz-core'
import type { Network, GraphStyleProperties, Link, Node } from '@metabohub/viz-core/dist/types'
import { NetworkComponent } from '@metabohub/viz-core'
import type { ContextMenuItems } from '@metabohub/viz-context-menu/dist/types'
import { UseContextMenu } from '@metabohub/viz-context-menu'
import { layoutOnNetwork, PathType, getDefaultParam } from '/dist_layout/dist/index'
import { nodes, links } from '/public/HistidineMetabolism.ts'

let svgProperties = reactive({})
let network = ref<Network>({ id: '', nodes: {}, links: [] })
const networkStyle = ref<GraphStyleProperties>({
  nodeStyles: {},
  linkStyles: {}
})
const menuProps: ContextMenuItems = UseContextMenu.defineMenuProps([
  { label: 'test', action: test }
])

onMounted(() => {
  network.value.nodes = nodes
  network.value.links = links

  console.log(network.value)
  // console.log('mounted')
  // svgProperties = initZoom()
})

function getSvgPanZoomInstance(instance: typeof svgPanZoom) {
  svgProperties = instance
}

function loadFile(event: Event) {
  const target = event.target as HTMLInputElement
  const files = target.files as FileList
  const file = files[0]
  importNetworkFromFile(file, network, networkStyle, callbackFunction)
}

function openContextMenu(Event: MouseEvent, node: Node) {
  // to DEBUG
  console.log(Event)
  console.log(node)
  UseContextMenu.showContextMenu(Event, node.id)
}

function callbackFunction() {
  Object.values(network.value.nodes).forEach((value) => {
    const node = value as Node
    if (node.metadata && node.metadata.position) delete node.metadata.position
    if (node.metadata && node.metadata.classes) delete node.metadata.classes
    if (node.hidden) delete node.hidden
    if (node.metadata && Object.keys(node.metadata).length === 0) delete node.metadata
  })
  console.log(JSON.stringify(network.value.nodes))

  let links = ''
  Object.values(network.value.links).forEach((value) => {
    const link = value as Link
    if (link.metadata && link.metadata.classes) delete link.metadata.classes
    if (link.metadata && Object.keys(link.metadata).length === 0) delete link.metadata
    links =
      links +
      '{\n id: "' +
      link.id +
      '",\n source: nodes.' +
      link.source.id +
      ' ,\n  target: nodes.' +
      link.target.id +
      '},\n'
  })
  console.log(links)

  const testNode: Node = { id: 'node', x: 0, y: 0 }
  console.log(testNode)
  const testPath: PathType = PathType.ALL
  console.log(testPath)
}

function test() {
  console.log('test')
}
async function layout() {
  const parameters = getDefaultParam()
  parameters.shiftCoord = true
  parameters.numberNodeOnEdge = 3
  const result = await layoutOnNetwork(network.value, networkStyle.value, parameters)
  network.value = result
}
</script>

<style>
@import '@metabohub/viz-core/dist/style.css';
/* Flex container 
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;  Full viewport height 
}*/

/* Navigation bar */
.nav-bar {
  background-color: #f8f9fa; /* Adjust as needed */
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adds a shadow */
}

/* Network */
.networkViz {
  width: 100%;
  height: 100%;
  top: 10%;
  position: fixed;
}
</style>
