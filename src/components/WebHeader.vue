<script setup lang="ts">
import { NIcon } from 'naive-ui';
import { SunnyOutline, MoonSharp } from '@vicons/ionicons5';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'body',
  attribute: 'class',
  valueDark: 'dark-mode',
  valueLight: 'light',
})

const toggleDark = useToggle(isDark)

const doToogle = () => {
  toggleDark()
}
</script>

<template>
  <div class="flex justify-between items-center rounded-bl-4 rounded-br-4 b-0.5 b-solid px-4 b-t-0"
    :class="{ 'b-black': !isDark, 'b-gray': isDark }">
    <label class="fw-900 text-10">WebX</label>
    <NIcon class="cursor-pointer" :component="isDark ? MoonSharp : SunnyOutline" @click="doToogle"
      :color="isDark ? 'gold' : 'black'" size="large">
    </NIcon>
  </div>
</template>

<style scoped></style>
