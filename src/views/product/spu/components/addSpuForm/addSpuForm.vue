<template>
  <el-form ref="form" :model="spuList" label-width="80px">
    <!-- SPU名称 -->
    <el-form-item label="SPU名称">
      <el-input v-model="spuList.spuName"></el-input>
    </el-form-item>
    <!-- SPU品牌 -->
    <el-form-item label="SPU品牌">
      <el-select v-model="spuList.tmId" placeholder="请选择活动区域">
        <el-option label="小米" value="1"></el-option>
        <el-option label="苹果" value="2"></el-option>
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
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
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
      <el-table style="width: 100%;margin:20px 0" border>
        <el-table-column label="序号" width="80" type="index" align="center">
        </el-table-column>
        <el-table-column label="属性名" width="180" align="center">
        </el-table-column>
        <el-table-column label="属性值列表"></el-table-column>
        <el-table-column label="操作" width="180">
          <HintButton
            slot="reference"
            title="删除属性值"
            type="danger"
            icon="el-icon-delete"
          />
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
        category3Id: '', // 商品分类3的id
        spuName: '', // 商品名称
        description: '', // 商品分类描述
        // id: 0, 添加商品用不到，修改商品用的到
        tmId: '', // 品牌id
        spuImageList: [
          // 商品图片列表
          /* {
            id: 0,
            imgName: 'string',
            imgUrl: 'string',
            spuId: 0
          } */
        ],
        spuSaleAttrList: [
          // 商品属性列表
          /* {
            baseSaleAttrId: 0,
            id: 0,
            saleAttrName: 'string',
            spuId: 0,
            spuSaleAttrValueList: [
              {
                baseSaleAttrId: 0,
                id: 0,
                isChecked: 'string',
                saleAttrName: 'string',
                saleAttrValueName: 'string',
                spuId: 0
              } */
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    // 图片上传的两个函数
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style></style>
