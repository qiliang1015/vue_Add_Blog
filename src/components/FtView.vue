<template>
  <div class="footer">
    <div>
      ©版权所有：<a href="http://qiliang1015.github.io">qiliang1015.github.io</a>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .footer{
        height: 70px;
        background: #BEFFDB;
        color: rgb(83, 81, 81);
        display: flex;
        justify-content: center;
        align-items: center;
        div{
          opacity: 0.8;
          a{
            color: rgb(83, 81, 81);
            &:hover{
              text-decoration: underline;
            }
          }
        }
    }
</style>