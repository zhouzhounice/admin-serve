<template lang="">
  <div>
    <el-card class="box-card" style="margin:0 20px">
      <CategorySelector @categoryChange="categoryChange"></CategorySelector>
    </el-card>
    <el-card class="box-card" style="margin:10px 20px">
      <!-- 添加按钮 -->
      <el-button type="primary" icon="el-icon-plus">添加属性</el-button>
      <!-- 商品显示列表 -->
      <el-table border style="width: 100%;margin:20px 0" :data="attrList">
        <el-table-column label="序号" width="80" align="center" type="index" />
        <el-table-column
          label="属性名称"
          width="200"
          align="center"
          prop="attrName"
        />
        <el-table-column label="属性描述" align="center">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.valueName }}</p>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <div>
              <el-button
                type="warning"
                size="mini"
                icon="el-icon-edit"
              ></el-button>
              <el-button
                size="mini"
                type="danger"
                icon="el-icon-delete"
                style="margin-left:0px"
              ></el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'Attr',
  data() {
    return {
      category1Id: '',
      category2Id: '',
      category3Id: '',
      attrList: []
    }
  },
  methods: {
    async categoryChange({ category1, category2, category3 }) {
      console.log(category1, category2, category3)
      this.category1Id = category1
      this.category2Id = category2
      this.category3Id = category3
      const { data } = await this.$API.attrCategory.getAttrCategoryList(
        category1,
        category2,
        category3
      )
      this.attrList = data
    }
  }
}
</script>
<style lang=""></style>
