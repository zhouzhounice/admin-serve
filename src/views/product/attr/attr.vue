<template>
  <div>
    <el-card class="box-card" style="margin:0 20px">
      <CategorySelector
        @categoryChange="categoryChange"
        :isShow="isShow"
      ></CategorySelector>
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
                  @click="deleteAttr(row.id)"
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
                ref="getFocus"
                size="mini"
                v-if="row.isEdit"
                v-model="row.valueName"
                placeholder="请输入属性值"
                @blur="toLook(row)"
              ></el-input>
              <div v-else style="text-align:left" @click="toEdit(row)">
                {{ row.valueName }}
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="操作">
            <template slot-scope="{ row, $index }">
              <el-popconfirm
                :title="`确定删除${row.valueName}吗？`"
                @onConfirm="deleteAttrCategory($index)"
              >
                <HintButton
                  slot="reference"
                  title="删除属性值"
                  type="danger"
                  icon="el-icon-delete"
                />
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" @click="save">确定</el-button>
        <el-button plain @click="isShow = true">取消</el-button>
      </div>
    </el-card>
  </div>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
const reseForm = function() {
  return {
    attrName: '',
    attrValueList: [],
    categoryId: 0,
    categoryLevel: 3
  }
}
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
  mounted() {},
  methods: {
    // 将拿到的属性id存入父组件中
    categoryChange({ category1, category2, category3 }) {
      this.category1Id = category1
      this.category2Id = category2
      this.category3Id = category3
      this.getAttrCategory()
    },
    // 用于获取列表属性
    async getAttrCategory() {
      const { category1Id, category2Id, category3Id } = this
      const { data } = await this.$API.attrCategory.getAttrCategoryList(
        category1Id,
        category2Id,
        category3Id
      )
      this.attrList = data
      this.isShow = true
    },
    // 用于展示添加属性以及修改属性页面
    showAddAttr(row) {
      if (row.id) {
        this.attrForm = cloneDeep(row)
        this.attrForm.attrValueList.forEach(item => {
          this.$set(item, 'isEdit', false)
        })
      }
      this.isShow = false
    },
    // 点击添加属性按钮后的事件
    addAttrValue() {
      this.attrForm.attrValueList.unshift({
        attrId: this.attrForm.id,
        // id: 0,
        valueName: '',
        isEdit: true
      })
    },
    // 点击删除属性值按钮后的事件
    deleteAttrCategory($index) {
      this.attrForm.attrValueList.splice($index, 1)
    },
    // 点击删除属性按钮后
    async deleteAttr(attrId) {
      try {
        await this.$API.attrCategory.deleteAttrCategory(attrId)
        this.$message({
          message: '删除成功！',
          type: 'success'
        })
        this.getAttrCategory()
      } catch (error) {
        console.log(error)
        this.$message.error('删除失败！')
      }
    },
    // 输入框失去焦点后变为div展示状态
    toLook(row) {
      // 当用户输入属性名与前面属性名重复时
      const valueName = row.valueName
      const repetition = this.attrForm.attrValueList.some(item => {
        if (item !== row) {
          return item.valueName === valueName
        }
      })
      if (repetition) {
        this.$message.error('属性值不能重复')
        return
      }
      // 当输入属性名不为空时，失去焦点后切换为展示状态
      if (valueName) {
        row.isEdit = false
        return
      }
      this.$message.error('属性值不能为空')
    },
    toEdit(row) {
      row.isEdit = true
      // 进入编辑模式后立马获取焦点
      this.$nextTick(() => {
        this.$refs.getFocus.focus()
      })
    },
    async save() {
      // 发送请求前要做的事
      // 1.收集数据  5.失败后
      // 收集数据 数据就是attrForm
      const { attrForm, category3Id } = this
      attrForm.categoryId = category3Id
      // 2.判断是否添加了属性值
      if (attrForm.attrValueList.length === 0) {
        this.$message.error('属性值个数不能为0')
        return
      }
      //  3.让数据结构与接口对应
      attrForm.attrValueList.forEach(item => {
        item.attrId = category3Id
        delete item.isEdit
      })
      //  4.成功后
      try {
        await this.$API.attrCategory.saveAttrCategory(attrForm)
        this.$message.success('保存成功！')
        this.isShow = true
        this.getAttrCategory()
      } catch (error) {
        this.$message.error('保存失败！')
      }
    }
  },
  watch: {
    isShow(newValue) {
      if (newValue) {
        this.attrForm = reseForm()
      }
    }
  }
}
</script>
<style></style>
