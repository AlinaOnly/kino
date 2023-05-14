<script setup></script>

<template>
    <div class="footer">
        <ul class="footer__nav">
            <li class="footer__list">
                <img class="footer__logo" src="" alt="logo"/>
            </li>
            <li class="footer__list">Меню
                <button class="footer__button footer__menu-button" onclick=""></button>
            </li>
            <li class="footer__list">Соц.сети
                <button class="footer__button footer__contacts-button" onclick=""></button>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
    .footer {
        background-color: rgb(179, 90, 231);
    }

    .footer__nav{
        list-style-type: none;
        margin: 0;
        display: flex;
        justify-content: space-between;
        padding: 0;
        margin: 0 15px;
    }

    .footer__list {
        display: flex;
        flex-direction: column-reverse;
        margin: 15px 0;
        text-align: center;
    }

    .footer__button{
        width: 64px;
        height: 32px;
        cursor: pointer;
        border-radius: 16px;
        border: 0;
        padding: 0;
    }
</style>
