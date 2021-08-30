<template>
  <div>
    <!-- 添加按钮 -->
    <el-button type="primary" icon="el-icon-plus">添加</el-button>
    <!-- 商品显示列表 -->
    <el-table border style="width: 100%;margin:20px 0" :data="trademarkList">
      <el-table-column label="序号" width="80" align="center" type="index" />
      <el-table-column
        label="品牌名称"
        width="200"
        align="center"
        prop="tmName"
      />
      <el-table-column label="品牌LOGO" align="center">
        <template slot-scope="{ row }">
          <img :src="row.logoUrl" style="width:100px;height:80px" />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <div>
            <el-button type="warning" size="mini" icon="el-icon-edit"
              >编辑</el-button
            >
            <el-button size="mini" type="danger" icon="el-icon-delete"
              >删除</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页模块 -->
    <el-pagination
      style="text-align:center"
      :total="total"
      :current-page="page"
      :page-size="limit"
      :page-sizes="[1, 2, 3]"
      layout="prev,pager,next,jumper,->,sizes,total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
    <!-- 商品添加模态框 -->
    <!--
      :visible.sync="dialogFormVisible"  用来控制模态框的展示和隐藏
      :label-width="formLabelWidth"  用来控制
      :model="form"  用来收集表单数据的对象
     -->
    <el-dialog title="添加品牌" :visible.sync="dialogFormVisible">
      <el-form :model="tmForm">
        <el-form-item
          label="品牌名称"
          :label-width="formLabelWidth"
          :label-height="formLabelHeight"
        >
          <el-input v-model="tmForm.tmName" autocomplete="off" />
        </el-form-item>
        <el-form-item label="品牌logo" :label-width="formLabelWidth">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__tip" slot="tip">
              只能上传jpg/png文件，且不超过500kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'TradeMark',
  data() {
    return {
      page: 1,
      limit: 1,
      total: 3,
      trademarkList: [],
      dialogFormVisible: true,
      tmForm: {
        tmName: '',
        logoUrl: ''
      },
      formLabelWidth: '100px',
      formLabelHeight: '300px'
    }
  },
  mounted() {
    this.getTradeMark()
  },
  methods: {
    // 定义一个获取数据的方法
    async getTradeMark() {
      const { page, limit } = this
      const result = await this.$API.trademark.getTradeMark(page, limit)
      // 拿到请求到的数据之后 先将分页器数据应用
      const {
        data: { records, total }
      } = result
      this.total = total
      this.trademarkList = records
    },
    // 点击分页器页码的操作
    handleCurrentChange(value) {
      this.page = value
      this.getTradeMark()
    },
    // 点击分页器 分页详情 的操作
    handleSizeChange(value) {
      this.limit = value
      this.getTradeMark()
    }
    // 限制图片格式与大小
    /*  handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 6

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 6MB!')
      }
      return isJPG && isLt6M
    } */
  }
}
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.dialog-footer {
  margin-top: -30px;
}
</style>
