<template>
  <div class="">
    <el-card class="card">
      <div slot="header">
        注 册
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="form">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密 码：" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPassword">
          <el-input type="checkPassword" v-model="ruleForm.checkPassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register()">注册</el-button>
          <el-button type="primary" @click="goToLogin()">去登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "Register",
    components: {},
    data() {
      var validateUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        } else {
          if (this.usernameRules(value)) {
            return callback(new Error('用户名已存在'));
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
      }
      var validateCheckPass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请再次输入密码'));
        }
        if (value != this.ruleForm.password) {
          return callback(new Error('确认密码与密码不一致'));
        } else {
          callback();
        }
      }
      return {
        ruleForm: {
          username: '',
          password: '',
          checkPassword: '',
        },
        rules: {
          username: [{
            validator: validateUser,
            trigger: 'blur'
          }],
          password: [{
            validator: validatePass,
            trigger: 'blur'
          }],
          checkPassword: [{
            validator: validateCheckPass,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      usernameRules(value) {
        if (value == 'admin') {
          return true;
        } else {
          return false;
        }
      },
      register() {
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            this.$message({
              message: '注册成功',
              type: 'success'
            });
          } else {
            console.log('error submit!!');
          }
        });
      },
      goToLogin() {
        // console.log()
        this.$router.push('/login');
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
    margin-top: 200px;
  }

</style>
