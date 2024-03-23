<script setup lang="ts">
import { NAvatar, NIcon, useLoadingBar } from 'naive-ui';
import { DiamondOutline } from '@vicons/ionicons5';
import { ref } from 'vue';
import { useDark } from '@vueuse/core';
import { TabKey, tabs, } from '../constants';
import WebCard from './WebCard.vue';
import { WebXItem } from '../types';
import dayjs from 'dayjs'
import { useRouter } from "vue-router";

const activeTab = ref<TabKey>('website');
const className = ref('light-profile')
const loading = useLoadingBar()

const fetchList = () => {
    loading.start()
    setTimeout(() => {
        loading.finish()
    }, 1000);
}
const onTabClick = (key: string) => {
    activeTab.value = key;
    fetchList()
}


useDark({
    onChanged(dark) {
        if (dark) {
            className.value = 'light-profile';
        } else {
            className.value = 'dark-profile';
        }
    }
})

const mockData: WebXItem = {
    title: 'Github',
    type: 'website',
    author: 'Peter Yuan',
    link: 'https://github.com/peter-yuan',
    desc: 'Github是目前世界上最牛逼的代码托管平台！',
    email: 'ypf9319@gmail.com',
    createDate: dayjs().format('YYYY/MM/DD'),
    isVIP: false,
    pictures: [
        'https://images.unsplash.com/photo-1654277041218-84424c78f0ae?q=80&w=2362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    star: 5,
    tags: ['Git', 'Code', 'Platform'],
    id: '11111'
}
const router = useRouter();

const onCardClick = ({ id }: WebXItem) => {
    router.push({ name: 'preview', params: { id } })
}





</script>

<template>
    <div class="rounded-4 p-b-6 flex flex-col " :class="className">
        <div class="relative px-6 p-t-6 rounded-tl-4 rounded-tr-4 bg-colorful h-40">
            <NAvatar round :size="58" class="absolute top-36"
                src="https://avatars.githubusercontent.com/u/15058227?v=4" />
            <div class="flex absolute left-20 bottom--7" style="gap:24px">
                <div>
                    <label class="text-4 fw-600 text-color">1.25K</label>
                    <label class="text-coolGray fw-100 m-l-1">被关注</label>
                </div>
                <div>
                    <label class="text-4 fw-600 text-color">455</label>
                    <label class="text-coolGray fw-100 m-l-1">关注</label>
                </div>
            </div>
        </div>
        <div class="mt-10 px-6 bg-color">
            <div class="flex items-center">
                <label class="text-4 fw-800">
                    Peter Yuan
                </label>
                <NIcon :component="DiamondOutline" class="text-yellow m-l-2" />
            </div>
            <p>
                我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者我是一名独立开发者
            </p>
        </div>
        <div class="px-6 mt-4">
            <div class="rounded-2 p-1 flex items-center gap-2 justify-between bg-tab-container">
                <div class="py-1.5 px-1 cursor-pointer text-center flex-1"
                    :class="{ 'bg-tab rounded-2 tab-item-active': activeTab === item.value }" v-for="item in tabs"
                    :key="item.value" @click="onTabClick(item.value)">
                    {{ item.name }}
                </div>
            </div>
        </div>
        <div class="px-6 mt-1 flex-1 flex flex-wrap overflow-y-auto gap-4 overflow-x-hidden pb-6 mt-4 min-h-58">
            <WebCard :data="mockData" @click="onCardClick" />
            <WebCard :data="mockData" @click="onCardClick" />
            <WebCard :data="mockData" @click="onCardClick" />
            <WebCard :data="mockData" @click="onCardClick" />
        </div>
    </div>
</template>

<style lang="less" scoped>
.light-profile {
    .bg-colorful {
        background-image: linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100));
    }


    .tab-item-active {
        box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.1);
    }

    .text-color {
        color: #000;
    }

    .bg-color {
        background-color: #444;
    }

    .bg-color();

    .bg-tab {
        background-color: #555;
    }

    .bg-tab-container {
        background-color: #666;
    }
}

.dark-profile {
    .bg-colorful {
        background-image: linear-gradient(to right, rgb(198, 255, 221), rgb(251, 215, 134), rgb(247, 121, 125));
    }


    .tab-item-active {
        box-shadow: 0px 12px 16px 0px rgba(0, 0, 0, 0.1);
    }

    .text-color {
        color: #000;
    }

    .bg-color {
        background-color: #fff;
    }

    .bg-color();

    .bg-tab {
        background-color: #fff;
    }

    .bg-tab-container {
        background-color: #f5f5f5;
    }
}
</style>