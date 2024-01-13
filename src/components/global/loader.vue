<template>
  <div class="loader">
        <div class="loader-header">
            <div class="loader-row">
                <div class="loader-cell">
                    <span></span>
                    <span></span>
                </div>
                <div class="loader-cell" v-for="cell in 4" :key="cell">
                    <span></span>
                </div>
            </div>
        </div>
        <div class="loader-body">
            <div class="loader-row" v-for="row in 5" :key="row">
                <div class="loader-cell">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="loader-cell" v-for="cell in 4" :key="cell">
                    <span></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>