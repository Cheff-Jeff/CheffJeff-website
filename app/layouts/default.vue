<script setup lang="ts">
import HeaderLink from "~/components/HeaderLink.vue";
</script>

<template>
  <div class="page-wrapper">
    <slot />

    <header class="main-header">
      <nav>
        <ul>
          <header-link destination="/" text="Home" />
          <header-link destination="/skills" text="My Skills" />
          <header-link destination="/about" text="About me" />
          <header-link destination="/" text="My prodjects" />
        </ul>
      </nav>
    </header>
  </div>
</template>
