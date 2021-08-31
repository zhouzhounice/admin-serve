<template>
  <div>
    <el-card class="box-card" style="margin:0 20px">
      <CategorySelector @categoryChange="categoryChange"></CategorySelector>
    </el-card>
    <el-card class="box-card" style="margin:10px 20px">
      <div v-show="isShow">
        <!-- 添加按钮 -->
        <el-button type="primary" icon="el-icon-plus" @click="showAddAttr"
          >添加属性</el-button
        >
        <!-- 商品显示列表 -->
        <el-table border style="width: 100%;margin:20px 0" :data="attrList">
          <el-table-column
            label="序号"
            width="80"
            align="center"
            type="index"
          />
          <el-table-column
            label="属性名称"
            width="200"
            align="center"
            prop="attrName"
          />
          <el-table-column label="属性描述">
            <template slot-scope="{ row }">
              <el-tag
                v-for="attrValue in row.attrValueList"
                :key="attrValue.id"
                style="margin:0 3px"
                >{{ attrValue.valueName }}</el-tag
              >
            </template>
          </el-table-column>
          <el-table-column label="操作" width="300">
            <template slot-scope="{ row }">
              <div>
                <HintButton
                  title="修改属性"
                  type="warning"
                  icon="el-icon-edit"
                  @click="showAddAttr(row)"
                />
                <HintButton
                  title="删除属性"
                  type="danger"
                  icon="el-icon-delete"
                />
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div v-show="!isShow">
        <el-form ref="form" :model="attrForm" label-width="55px">
          <el-form-item label="属性名">
            <el-input
              v-model="attrForm.attrName"
              style="width:200px"
            ></el-input>
          </el-form-item>
        </el-form>
        <!-- 添加按钮 -->
        <el-button
          type="primary"
          icon="el-icon-plus"
          :disabled="!attrForm.attrName"
          @click="addAttrValue"
          >添加属性值</el-button
        >
        <!-- 添加表格 -->
        <el-table
          style="width: 100%;margin:20px 0"
          border
          :data="attrForm.attrValueList"
        >
          <el-table-column type="index" label="序号" width="80" align="center">
          </el-table-column>
          <el-table-column prop="name" label="属性值名称" align="center">
            <template slot-scope="{ row }">
              <el-input
                v-model="row.valueName"
                placeholder="请输入属性值"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <HintButton title="删除属性" type="danger" icon="el-icon-delete" />
          </el-table-column>
        </el-table>
        <el-button type="primary">确定</el-button>
        <el-button plain @click="isShow = true">取消</el-button>
      </div>
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
      attrList: [],
      isShow: true,
      attrForm: {
        attrName: '',
        attrValueList: [
          /* {
            attrId: 0,
            // id: 0,
            valueName: ''
          } */
        ],
        categoryId: 0,
        categoryLevel: 3
        // id: 0
      }
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
    },
    showAddAttr(row) {
      if (row.id) {
        this.attrForm = row
      }
      this.isShow = false
    },
    addAttrValue() {
      this.attrForm.attrValueList.push({
        attrId: this.attrForm.id,
        // id: 0,
        valueName: ''
      })
    }
  }
}
</script>
<style lang=""></style>
