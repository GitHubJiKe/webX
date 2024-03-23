type TabObj = {
    name: string;
    value: string;
};
export type TabKey = TabObj["value"];

export const tabs: TabObj[] = [
    {
        name: "网站",
        value: "website",
    },
    {
        name: "工具",
        value: "tool",
    },
    {
        name: "硬件",
        value: "hardware",
    },
    {
        name: "软件",
        value: "software",
    },
    {
        name: "影视",
        value: "film",
    },
    {
        name: "音乐",
        value: "music",
    },
    {
        name: "艺术",
        value: "art",
    },
    {
        name: "书籍",
        value: "book",
    },
    {
        name: "观点",
        value: "opinion",
    },
];

export const showTypes = [
    {
        label: "卡片",
        key: "card",
    },
    {
        label: "列表",
        key: "list",
    },
];
