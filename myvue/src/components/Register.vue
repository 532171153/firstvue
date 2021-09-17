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
        <el-form-item label="确认密码：" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
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
      return {
        ruleForm: {
          username: '',
          password: '',
          checkPassword: '',
        },
      };
    },
    methods: {
      register() {
        console.log("register");
      },
      goToLogin() {
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
  }

</style>
