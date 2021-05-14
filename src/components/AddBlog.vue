<template>
  <div class="addBlog">
      <div class="addMain">
          <div class="row">
              <div class="text">博客标题:</div>
              <div class="iptBox">
                  <input type="text" v-model="myObj.title">
              </div>
          </div>

          <div class="row rowAuthor">
              <div class="text">作者:</div>
              <div class="iptBox">
                  <input type="text" v-model="myObj.author">
              </div>
          </div>

          <div class="row">
              <div class="text">分类:</div>
              <div class="iptBox">
                  <select v-model="myObj.classify">
                      <option v-for="item in classifyList" :key="item.id">{{item.classname}}</option>
                  </select>
              </div>
          </div>

          <div class="row rowArea">
              <div class="text">博客内容:</div>
              <div class="iptBox">
                  <textarea name="" id="" cols="30" rows="10" v-model="myObj.content"></textarea>
              </div>
          </div>

          <div class="row">
              <div class="text"></div>
              <div class="iptBox">
                  <button @click="onSubmit">发表博客</button>
              </div>
          </div>
      </div>

    <h1 class="blShowBox">博客预览</h1>
    <BlogItem :itemObj="myObj"></BlogItem>

      

  </div>
</template>

<script>
import axios from 'axios';
import BlogItem from "./BlogItem"
export default {
    data(){
        return {
            myObj:{
                title:"",
                posttime:new Date().getTime()/1000,
                classify:"",
                author:"",
                content:""
            },
            classifyList:[]
        }
    },
    components:{
        BlogItem
    },
    created(){
        this.getClassify();
    },
    methods:{
        // 获取分类列表
        getClassify(){
            axios({
                url:"https://ku.qingnian8.com/dataApi/blog/classBlog.php"
            }).then(res=>{
                console.log(res);
                this.classifyList = res.data
            })
        },
        addDate(){
            axios({
                url:"https://ku.qingnian8.com/dataApi/blog/addBlog.php",
                params:this.myObj
            }).then(res=>{
                if(res.data.code == 200){
                    alert(res.data.msg);
                }else{
                    alert(res.data.msg);
                    return;
                }
            })
        },
        // 点击提交数据
        onSubmit(){
            if(this.myObj.title == "" || this.myObj.author == "" || this.myObj.classify == "" || this.myObj.content == ""){
                alert("请按照要求填写");
                return;
            }else{
                this.addDate();
            }
        }

    }
}
</script>

<style lang="less" scoped>
    .addBlog{
       padding: 50px 30px;
       min-height: 600px;
    
    }
    .addMain{
        padding: 0 80px;
        font-size: 18px;
        color: #333;
        .row{
            padding: 10px 0;
            display: flex;
            align-items: center;
            .text{
                width: 20%;
                text-align: right;
                padding-right: 10px;
            }
            .iptBox{
                width: 80%;
                display: flex;
                input{
                    width: 100%;
                    height: 38px;
                    outline: none;
                    border: 1px solid #ccc;
	                border-radius: 3px;
	                padding-left: 10px;
                    transition: .3s;
                    &:focus{
                        border-color: #41b883;
                        box-shadow:  0 0 10px #41b88360;
                    }
                }
                select{
                    width: 40%;
                    height: 38px;
                    border: 1px solid #ccc;
	                border-radius: 3px;
                    padding-left: 10px;
                }
                textarea{
                    width: 100%;
                    height: 150px;
                    outline: none;
                    border-radius: 3px;
                    border: 1px solid #ccc;
	                border-radius: 3px;
	                padding-left: 10px;
                    padding-top: 10px;
                    transition: .3s;
                    &:focus{
                        border-color: #41b883;
                        box-shadow:  0 0 10px #41b88360;
                    }
                }
                button{
                    width: 50%;
                    height: 38px;
                    background: #41b883;
                    color: #fff;
                    border: none;
                    border-radius: 3px;
                    cursor: pointer;
                    transition: .5s;
                    &:hover{
                        background: #2F6F52;
                    } 
                }
            }
        }   
    }
    .blShowBox{
            font-size: 22px; color: #555; padding:50px 0 30px; text-align: center;
            border-top: 1px solid #4e4d4d; margin-top: 30px;
        }
</style>