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
          :label="tmName"
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
      <el-select v-model="spuList.tmId" placeholder="还剩2个销售属性">
        <el-option label="小米" value="1"></el-option>
        <el-option label="苹果" value="2"></el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-plus">添加销售属性</el-button>
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
            <div slot="reference" class="name-wrapper" @click="show(row)">
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
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button
                v-else
                class="button-new-tag"
                size="small"
                @click="showInput(row)"
                >+ New Tag</el-button
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="{ row }">
            <el-popconfirm :title="`确定删除${row.saleAttrValueName}吗？`">
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
      <el-button plain>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'SPuForm',
  data() {
    return {
      spuList: {
        category3Id: '',
        description: '',
        spuName: '',
        tmId: '',
        spuImageList: []
      },
      spuImgList: [],
      spuSaleAttrList: [],
      tradeMarkList: [],
      dialogImageUrl: '',
      dialogVisible: false,
      inputVisible: false,
      inputValue: ''
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
      this.spuSaleAttrList = list
    },
    // 请求品牌列表
    async getTrademarkList() {
      const { data: list } = await this.$API.trademark.getTrademarkList()
      this.tradeMarkList = list
    },
    show(row) {
      console.log(row.spuSaleAttrValueList)
    },
    showInput(row) {
      this.inputVisible = true
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
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
