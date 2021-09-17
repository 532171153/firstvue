<template>
  <div class="">
    <el-card class="card">
      <div slot="header">
        登 录
      </div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入用户名"
            class="inputDeep"
            prefix-icon="el-icon-user-solid"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-s-cooperation"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="goToRegister()"
          >去注册</el-button>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    var validateUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入用户名'))
      } else {
        if (this.usernameRules(value)) {
          return callback(new Error('用户名不存在'))
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入密码'))
      } else {
        if (!this.passwordRules(value)) {
          return callback(new Error('用户名或密码错误'))
        }
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          {
            validator: validateUser,
            trigger: 'blur',
          },
        ],
        password: [
          {
            validator: validatePass,
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    goToRegister() {
      this.$router.push('/register')
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: '登录成功',
            type: 'success',
          })
        } else {
          this.$message({
            message: '登录失败',
            type: 'error',
          })
        }
      })
    },
    usernameRules(value) {
      if (value == 'admin') {
        return true
      } else {
        return false
      }
    },
    passwordRules(value) {
      if (value == '123456') {
        return true
      } else {
        return false
      }
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
}
</script>

<style lang="less" scoped>
@import './login.less';
</style>
