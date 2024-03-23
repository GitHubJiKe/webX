<script setup lang="ts">
import { NTag, NTooltip } from 'naive-ui'
import { WebXItem } from '../types'
defineProps<{ data: WebXItem, showType?: 'card' | 'list' }>()
const emit = defineEmits<{
    (e: 'click', data: WebXItem): void
}>()
</script>

<template>
    <div class="flex-1 h-50 rounded-4 b-solid b-gray b-0.5 pb-3 web-card" v-if="showType !== 'list'">
        <div :style="`background-image:url(${data.pictures[0]})`" :alt="data.title"
            class="h-30 rounded-tl-4 rounded-tr-4 pic bg-center cursor-pointer" @click="emit('click', data)"></div>
        <div class="px-3">
            <NTooltip placement="top">
                <template #trigger>
                    <div class="whitespace-nowrap overflow-hidden text-ellipsis py-1">{{ data.desc }}</div>
                </template>
                {{ data.desc }}
            </NTooltip>
            <div class="py-1 flex gap-1">
                <NTag type="success" size="small" round v-for="tag in data.tags" :key="tag">{{ tag }}</NTag>
            </div>
            <div class="flex justify-between items-center py-1 text-3 text-bluegray">
                <label>
                    {{ data.createDate }}
                </label>
                <label>
                    {{ data.author }}
                </label>
            </div>

        </div>
    </div>
    <div v-else class="flex flex-col rounded-4 b-solid b-gray b-0.1 cursor-pointer web-card"
        @click="emit('click', data)">
        <div class="flex gap-2">
            <div :style="`background-image:url(${data.pictures[0]})`" :alt="data.title"
                class="rounded-tl-4 rounded-bl-4 w-20 h-auto bg-cover bg-center">
            </div>
            <div class="flex-1 pt-1 p-r-2">
                <label>
                    {{ data.desc }}
                </label>

                <div class="flex justify-between items-center py-1 text-3 text-bluegray p-r-2">
                    <label>
                        {{ data.createDate }}
                    </label>
                    <label>
                        {{ data.author }}
                    </label>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
.web-card:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);
}

.pic {
    background-size: 100%;
    transition: background-size 0.5s ease-in-out;
}

.pic:hover {
    background-size: 130%;
}
</style>