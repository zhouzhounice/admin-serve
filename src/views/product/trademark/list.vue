<template>
  <div>
    <!-- 添加按钮 -->
    <el-button
      type="primary"
      icon="el-icon-plus"
      @click="showDialog"
    >添加</el-button>
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
          <img :src="row.logoUrl" style="width:100px;height:80px">
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row }">
          <div>
            <el-button
              type="warning"
              size="mini"
              icon="el-icon-edit"
              @click="showDialog(row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deleteTardeMark(row)"
            >删除</el-button>
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
      :page-sizes="[2, 4, 6]"
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
    <el-dialog
      :title="tmForm.id ? '修改品牌' : '添加品牌'"
      :visible.sync="dialogFormVisible"
    >
      <el-form ref="ruleForm" :model="tmForm" :rules="rules">
        <el-form-item
          label="品牌名称"
          :label-width="formLabelWidth"
          prop="tmName"
        >
          <el-input v-model="tmForm.tmName" autocomplete="off" />
        </el-form-item>
        <el-form-item
          label="品牌LOGO"
          :label-width="formLabelWidth"
          prop="logoUrl"
        >
          <el-upload
            class="avatar-uploader"
            action="/dev-api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon" />
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过200kb
            </div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="save">确 定</el-button>
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
      limit: 2,
      total: 3,
      trademarkList: [],
      dialogFormVisible: false,
      tmForm: {
        tmName: '',
        logoUrl: ''
      },
      formLabelWidth: '100px',
      imageUrl: '',
      rules: {
        tmName: [
          { required: true, message: '请输入品牌名称', trigger: 'blur' },
          { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
        ],
        logoUrl: [{ required: true, message: '请上传logo', trigger: 'blur' }]
      }
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
    },
    // 图片上传成功需要做的事
    handleAvatarSuccess(res, file) {
      // 收集到了图片地址
      this.tmForm.logoUrl = res.data
    },
    // 判断上传图片的格式和大小
    beforeAvatarUpload(file) {
      // 判断图片格式
      const types = ['image/jpeg', 'image/jpg', 'image/png']
      const isJPG = types.includes(file.type)
      // 判断图片大小
      const isLt2M = file.size / 1024 / 1024 < 20

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 当点击模态框确定按钮时的事件
    save() {
      this.$refs.ruleForm.validate(async valid => {
        if (valid) {
          // 1.将收集到tmForm中的数据发送请求添加到服务器中
          await this.$API.trademark.addTardeMark(this.tmForm)
          // 2.如果成功了，则重新查寻一次商品数据
          this.getTradeMark()
          // 并且出现一个添加成功的弹窗
          this.$message({
            showClose: true,
            message: '商品添加成功！',
            type: 'success'
          })
          // 并且关闭模态框
          this.dialogFormVisible = false
          // 清空遗留在组件中的数据
          this.tmForm = {
            tmName: '',
            logoUrl: ''
          }
        } else {
          this.$message.error('保存失败！')
        }
      })
    },
    // 让模态框显示的事件
    showDialog(row) {
      // 判断 如果row中有id说明是要修改商品
      if (row.id) {
        this.tmForm = row
      }
      // 点击添加按钮使得模态框展示
      this.dialogFormVisible = true
    },
    // 删除商品的事件
    deleteTardeMark(row) {
      const { id } = row
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async() => {
          await this.$API.trademark.deleteTradeMark(id)
          // 重新渲染商品列表
          this.getTradeMark()
          // 如果成功则显示商品删除成功
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    }
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
