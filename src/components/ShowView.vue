<template>
    <div class="ShowView">
        <BlogItem v-for="item in listArr" :key="item.id" :itemObj="item"></BlogItem>
        <div class="pageGroup">
            <div class="btn btnLeft" @click="pre"> &lt; 上一页</div>
            {{pagenum}}
            <div class="btn btnRight" @click="next">下一页 &gt;</div>
        </div>
    </div>
    
</template>

<script>
import BlogItem from "./BlogItem"
import axios from "axios"
export default {
    data(){
        return{
            pagenum:1,
            listArr:[  
            ]
        }
    },
    components:{
        BlogItem
    },
    methods:{
        // 点击左边按钮
        pre(){
            if(this.pagenum<=1){
                alert("第一页了");
                this.pagenum=1;
                return;
            }
            this.pagenum--;
            this.getDate();
            this.backTop();
        },
        // 点击右边的按钮
        next(){
            if(this.listArr.length<9 || this.listArr.length==0){
                alert("没有了")
                return;
            }else{
                this.pagenum++;
                this.getDate();
                this.backTop();
            }
        },
        // 获取请求
        getDate(){
            axios({
                url:"https://ku.qingnian8.com/dataApi/blog/showBlog.php",
                params:{
                    page:this.pagenum,
                }
            }).then(res=>{
                console.log(res);
                this.listArr=res.data;
            })
        },
        // 回到顶部，写判断是因为需要明确浏览器是否支持某种方法
        backTop(){
            if(document.body.scrollTop){
                document.body.scrollTop = 0;
            }else{
                document.documentElement.scrollTop = 0;
            }
        }
    },
    created(){
        this.getDate();
    }
}
</script>

<style lang="less" scoped>
    .ShowView{
        padding: 30px 30px;
    }
    .pageGroup{
        padding: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn{
            border: 1px solid #41b883;
            padding: 10px 20px;
            color: #41b883;
            font-size: 18px;
            margin: 0 10px;
            cursor: pointer;
            &:hover{
                color: white;
                background: #41b883;

            }
        }
    }
</style>