<template>
  <div class="">
    <el-card class="card">
      <div slot="header">
        登 录
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="70px" class="form">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码：" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="goToRegister()">去注册</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Login",
    components: {},
    data() {
      var validateUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        } else {
          if (this.usernameRules(value)) {
            return callback(new Error('用户名不存在'));
          }
          callback();
        }
      }
      var validatePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        } else {
          if (value.length < 6) {
            return callback(new Error('密码至少 6 位'));
          }
          callback();
        }
      };
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [{
            validator: validateUser,
            trigger: 'blur'
          }],
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      goToRegister() {
        this.$router.push('/register');
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
              message: '登录成功',
              type: 'success'
            });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      usernameRules(value) {
        if (value == 'admin') {
          this.$message({
            message: '用户名不存在',
            type: 'error'
          });
          return true;
        } else {
          return false;
        }
      }
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
  };

</script>

<style scoped>
  .form {
    width: 300px;
    margin: auto;
  }

  .card {
    width: 400px;
    margin: auto;
  }

</style>
