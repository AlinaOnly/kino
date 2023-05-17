<script setup></script>

<template>
    <div class="footer">
        <ul class="nav">
            <li class="list">
                <NuxtLink class="button footer__logo-button" to="/">Logo</NuxtLink>
            </li>
            <li class="list">
                <NuxtLink class="button footer__menu-button" to="menu">Меню</NuxtLink>
            </li>
            <li class="list">
                <NuxtLink class="button footer__contacts-button" to="contacts">Соц.сети</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .footer {
        background-color: rgb(179, 90, 231);

      .nav {
          list-style-type: none;
          margin: 0;
          display: flex;
          justify-content: space-between;
          padding: 0;
          margin: 0 15px;
      }

      .list {
          display: flex;
          flex-direction: column-reverse;
          margin: 15px 0;
          text-align: center;
      }

      .button {
          width: 64px;
          height: 32px;
          border-radius: 16px;
          border: 0;
          padding: 0;
          color: white;
          text-decoration: none;
      }
    }
</style>
