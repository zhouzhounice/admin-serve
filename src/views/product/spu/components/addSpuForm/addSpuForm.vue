<template>
  <el-form ref="form" :model="spuList" label-width="80px">
    <!-- SPU名称 -->
    <el-form-item label="SPU名称">
      <el-input v-model="spuList.spuName"></el-input>
    </el-form-item>
    <!-- SPU品牌 -->
    <el-form-item label="SPU品牌">
      <el-select v-model="spuList.tmId" placeholder="请选择品牌">
        <el-option
          :label="tm.tmName"
          :value="tm.id"
          v-for="tm in tradeMarkList"
          :key="tm.id"
        ></el-option>
      </el-select>
    </el-form-item>
    <!-- 品牌描述 -->
    <el-form-item label="品牌描述">
      <el-input
        type="textarea"
        v-model="spuList.description"
        rows="4"
      ></el-input>
    </el-form-item>
    <!-- SPU图片 -->
    <el-form-item label="SPU图片">
      <el-upload
        action="/dev-api/admin/product/fileUpload"
        list-type="picture-card"
        :on-success="handleImgSuccess"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="spuImgList"
      >
        <i class="el-icon-plus"></i>
        <div class="el-upload__tip" slot="tip">
          只能上传jpg/png文件，且不超过500kb
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </el-form-item>
    <!-- 销售属性 -->
    <el-form-item label="销售属性">
      <el-select
        v-model="spuSaleArrts"
        :placeholder="
          unUseAttr.length
            ? `还剩${unUseAttr.length}个销售属性`
            : `没有可添加的销售属性`
        "
      >
        <el-option
          :label="item.name"
          :value="`${item.name}:${item.id}`"
          v-for="item in unUseAttr"
          :key="item.id"
        ></el-option>
      </el-select>
      <el-button
        type="primary"
        icon="el-icon-plus"
        @click="addAttrSale"
        :disabled="!spuSaleArrts"
        >添加销售属性</el-button
      >
      <el-table
        style="width: 100%;margin:20px 0"
        border
        :data="spuList.spuSaleAttrList"
      >
        <el-table-column label="序号" width="80" type="index" align="center">
        </el-table-column>
        <el-table-column
          label="属性名"
          width="180"
          align="center"
          prop="saleAttrName"
        >
        </el-table-column>
        <el-table-column label="属性值列表">
          <template slot-scope="{ row }">
            <div slot="reference" class="name-wrapper">
              <el-tag
                style="margin:0 5px"
                closable
                size="medium"
                v-for="item in row.spuSaleAttrValueList"
                :key="item.id"
                >{{ item.saleAttrValueName }}</el-tag
              >
              <el-input
                class="input-new-tag"
                v-if="row.inputVisible"
                v-model="row.inputValue"
                ref="saveTagInput"
                size="small"
                @blur="handleInput(row)"
              >
              </el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="showInput(row)"
                >+ 添加</el-button
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="{ row, $index }">
            <el-popconfirm
              :title="`确定删除${row.saleAttrName}吗？`"
              @onConfirm="deleteAttr($index)"
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
      <el-button type="primary">确定</el-button>
      <el-button plain @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'SPuForm',
  props: ['visible'],
  data() {
    return {
      spuList: {
        category3Id: '',
        description: '',
        spuName: '',
        tmId: '',
        spuImageList: [],
        spuSaleAttrList: []
      },
      spuSaleArrts: '',
      spuImgList: [],
      spuSaleBaseList: [],
      tradeMarkList: [],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    // 关于图片上传的三个函数
    handleRemove(file, fileList) {
      this.spuList.spuImageList = fileList
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleImgSuccess(response, file, fileList) {
      this.spuList.spuImageList = fileList
    },
    // 动态渲染添加spu列表页面 初始化添加spu页面
    initAddSpuForm() {
      this.spuSaleList()
      this.getTrademarkList()
    },
    // 动态渲染更新spu列表页面 初始化添加spu页面
    initUpdateSpuForm(row) {
      // 1.获取整个spu列表
      // 2.获取整个spu品牌管理
      // 3.获取图片列表
      // 4.获取销售列表
      const { id } = row
      this.getAllSpuList(id)
      this.spuImageList(id)
      this.spuSaleList()
      this.getTrademarkList()
    },
    // 发送请求，请求被点击商品的信息
    async getAllSpuList(id) {
      const { data } = await this.$API.SPU.reqGetSpuInfo(id)
      this.spuList = data
    },
    // 请求图片列表
    async spuImageList(id) {
      const { data: list } = await this.$API.SPU.reqGetSpuImageList(id)
      list.forEach(imgObj => {
        imgObj.name = imgObj.imgName
        imgObj.url = imgObj.imgUrl
      })
      this.spuImgList = list
    },
    // 请求销售列表
    async spuSaleList() {
      const { data: list } = await this.$API.SPU.reqGetBaseSaleAttrList()
      this.spuSaleBaseList = list
    },
    // 请求品牌列表
    async getTrademarkList() {
      const { data: list } = await this.$API.trademark.getTrademarkList()
      this.tradeMarkList = list
    },
    showInput(row) {
      // this.inputVisible = true
      this.$set(row, 'inputVisible', true)
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    // 添加标签相关函数
    handleInput(row) {
      // 收集数据
      const { inputValue, baseSaleAttrId } = row
      // 判断属性值是否为空并且添加在页面
      if (inputValue) {
        const repetition = row.spuSaleAttrValueList.some(item => {
          return item.saleAttrValueName === inputValue
        })
        if (repetition) {
          this.$message.error('属性值不能重复！')
          row.inputVisible = false
          row.inputValue = ''
          return
        }
        row.spuSaleAttrValueList.push({
          baseSaleAttrId,
          saleAttrValueName: inputValue
        })
      }
      row.inputVisible = false

      row.inputValue = ''
      // 判断属性值是否重复
    },
    // 添加销售属性按钮事件
    addAttrSale() {
      // 收集数据
      // 整理数据
      const [saleAttrName, baseSaleAttrId] = this.spuSaleArrts.split(':')
      // 将数据展示在表格中
      this.spuList.spuSaleAttrList.unshift({
        baseSaleAttrId,
        saleAttrName,
        spuSaleAttrValueList: []
      })
      this.spuSaleArrts = ''
    },
    deleteAttr($index) {
      this.spuList.spuSaleAttrList.splice($index, 1)
    },
    cancel() {
      this.$emit('update:visible', false)
      this.resetData()
    },
    resetData() {
      Object.assign(this.$data, this.$options.data())
    }
  },
  computed: {
    // 通过计算属性对比没有使用过的销售属性
    unUseAttr() {
      const { spuList, spuSaleBaseList } = this
      const { spuSaleAttrList } = spuList
      // 总共有的销售属性 spuSaleBaseList 已使用的销售属性 spuSaleAttrList
      // 思路：
      /*
    1.将已使用的销售属性放在一个对象中并且给它属性值为true
    2.将总共的销售属性遍历筛选，筛选出的值为false的属性就是未使用的销售属性
    */
      const baseObj = {}
      spuSaleAttrList.forEach(item => {
        baseObj[item.baseSaleAttrId] = true
      })
      const unUseList = spuSaleBaseList.filter(item => {
        return !baseObj[item.id]
      })
      return unUseList
    }
  }
}
</script>
<style>
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
