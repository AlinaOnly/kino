// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';
import { resolve } from 'path';

export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            },
            title: 'k-ino',
            meta: [
                { charset: 'utf-8' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'This is the page about arthouse.',
                }
            ],
            link: [
                { rel: 'shortcut icon', href: 'favicon.ico'  }
            ],
        },
    },
    alias: {
        assets: '/<rootDir>/assets',
    },
    css: [
        'normalize.css',
        '~/assets/main.scss',
    ],
    modules: [
        '@nuxt/content',
        //'nuxt-webfontloader',
    ],
    //webfontloader: {},
});
