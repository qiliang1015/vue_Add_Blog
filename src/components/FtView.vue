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
        background: #2F6f52;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        div{
          opacity: 0.8;
          a{
            color: white;
            &:hover{
              text-decoration: underline;
            }
          }
        }
    }
</style>