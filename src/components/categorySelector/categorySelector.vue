<template>
  <div>
    <el-form :inline="true" class="demo-form-inline" :model="cForm">
      <el-form-item label="一级分类" value="first">
        <el-select
          placeholder="请选择"
          v-model="cForm.category1"
          @change="c1Change"
        >
          <el-option
            :label="item.name"
            :value="item.id"
            v-for="item in category1List"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类" value="first">
        <el-select
          placeholder="请选择"
          v-model="cForm.category2"
          @change="c2Change"
        >
          <el-option
            :label="item.name"
            :value="item.id"
            v-for="item in category2List"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="三级分类" value="first">
        <el-select placeholder="请选择" v-model="cForm.category3">
          <el-option
            :label="item.name"
            :value="item.id"
            v-for="item in category3List"
            :key="item.id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'CategorySelector',
  data() {
    return {
      cForm: {
        category1: '',
        category2: '',
        category3: ''
      },
      category1List: [],
      category2List: [],
      category3List: []
    }
  },
  methods: {
    async getcategory1() {
      const { data } = await this.$API.category.getCategory1()
      this.category1List = data
    },
    async getcategory2() {
      const { data } = await this.$API.category.getCategory2(
        this.cForm.category1
      )
      this.category2List = data
    },
    async getcategory3() {
      const { data } = await this.$API.category.getCategory3(
        this.cForm.category2
      )
      this.category3List = data
    },
    // 当用户点击一级菜单时
    c1Change() {
      this.getcategory2()
      this.cForm.category2 = ''
      this.cForm.category3 = ''
      this.category2List = []
      this.category3List = []
    },
    c2Change() {
      this.getcategory3()
      this.cForm.category3 = ''
      this.category3List = []
    }
  },
  mounted() {
    this.getcategory1()
  }
}
</script>
<style></style>
