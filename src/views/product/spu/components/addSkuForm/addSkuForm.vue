<template>
  <el-form ref="form" :model="skuList" label-width="80px">
    <!-- SPU名称 -->
    <el-form-item label="SPU名称">
      <div>周杰伦</div>
    </el-form-item>
    <!-- SKU名称 -->
    <el-form-item label="SKU名称">
      <el-input v-model="skuList.skuName" />
    </el-form-item>
    <!-- 价格-->
    <el-form-item label="价格">
      <el-input v-model="skuList.price" />
    </el-form-item>
    <!-- 重量 -->
    <el-form-item label="重量">
      <el-input v-model="skuList.weight" />
    </el-form-item>
    <!-- SKU描述 -->
    <el-form-item label="SKU描述">
      <el-input v-model="skuList.skuDesc" type="textarea" rows="4" />
    </el-form-item>
    <!-- 平台属性 -->
    <el-form-item label="平台属性">
      <el-form ref="form" value="苹果" label-width="80px" :inline="true">
        <el-form-item label="苹果">
          <el-select value="" placeholder="请选择">
            <el-option value="11" />
            <el-option value="12" />
          </el-select>
        </el-form-item>
      </el-form>
    </el-form-item>
    <!-- 销售属性 -->
    <el-form-item label="销售属性">
      <el-form ref="form" value="苹果" label-width="80px" :inline="true">
        <el-form-item label="颜色">
          <el-select value="" placeholder="请选择">
            <el-option value="11" />
            <el-option value="12" />
          </el-select>
        </el-form-item>
        <el-form-item label="版本">
          <el-select value="" placeholder="请选择">
            <el-option value="11" />
            <el-option value="12" />
          </el-select>
        </el-form-item>
      </el-form>
    </el-form-item>
    <!-- SPU图片 -->
    <el-form-item label="SPU图片">
      <el-table
        ref="multipleTable"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column label="图片">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="名称" />
        <el-table-column label="操作" show-overflow-tooltip />
      </el-table>
    </el-form-item>
    <el-button type="primary">确定</el-button>
    <el-button plain>取消</el-button>
  </el-form>
</template>

<script>
export default {
  name: 'SkuForm',
  data() {
    return {
      skuList: {
        skuName: '',
        price: '',
        weight: '',
        skuDesc: ''
        //   category3Id: '',
        //   createTime: '2021-09-01T11:06:05.802Z',
        //   id: '',
        //   isSale: 0,
        //   skuDefaultImg: '',
        //   spuId: '',
        //   tmId: '',
        //   skuAttrValueList: [
        //     {
        //       attrId: 0,
        //       attrName: 'string',
        //       id: 0,
        //       skuId: 0,
        //       valueId: 0,
        //       valueName: 'string'
        //     }
        //   ],
        //   skuImageList: [
        //     {
        //       id: 0,
        //       imgName: 'string',
        //       imgUrl: 'string',
        //       isDefault: 'string',
        //       skuId: 0,
        //       spuImgId: 0
        //     }
        //   ],
        //   skuSaleAttrValueList: [
        //     {
        //       id: 0,
        //       saleAttrId: 0,
        //       saleAttrName: 'string',
        //       saleAttrValueId: 0,
        //       saleAttrValueName: 'string',
        //       skuId: 0,
        //       spuId: 0
        //     }
        //   ]
      }
    }
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    }
  }
}
</script>
<style></style>
