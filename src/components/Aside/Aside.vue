<template>
  <el-row class="tac">
    <el-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <el-menu
        &#x3C;!--
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        --
      >
        >
        <el-menu-item index="1">
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="2" disabled>
          <el-icon>
            <document />
          </el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon>
            <setting />
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
</script>
