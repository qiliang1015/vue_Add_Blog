<template>
  <div class="itembox" >
            <div class="top">
                <h2>{{itemObj.title}}</h2>
                <div class="time">{{getMyDate(itemObj.posttime)}}</div>
            </div>
            <div class="center">
                {{itemObj.content}}
            </div>
            <div class="info">
                <div class="list">
                    所属分类:
                    <span>{{itemObj.classify}}</span>
                </div>
                <div class="author">
                    作者:
                    <span>{{itemObj.author}}</span>
                </div>
            </div>
        </div>
</template>

<script>
import common from "@/assets/js/common.js"

export default {
    props:{
        itemObj:{
            type:Object,
            // 接收的是对象的话，就需要定义方法，而不是直接写{}或""
            default:function () {
                return {}
            }
        }
    },
    methods:{
        getMyDate(time){
            return common.myDate(time,1);
        }
    }
}
</script>

<style lang="less" scoped>
    .itembox{
        padding: 30px 0;
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center; 
            padding-bottom: 10px;
            h2{
                font-size: 20px;
                color: #333;
                width: 750px;
                word-wrap: break-word;
                white-space: normal;
                word-break: break-all;
            }
            .time{
                font-size: 14px;
                color: #888;

            }
        }
        .center{
            background: #fff7f7;
            border-radius: 5px;
            padding: 15px 10px;
            font-size: 18px;
            line-height: 1.8em;
            color: #444;
            margin-bottom: 10px;
            // 字符换行相关的一些操作
            word-wrap: break-word;
            white-space: normal;
            word-break: break-all;
        }
        .info{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #888;
            span{
                font-size: 16px;
                color: #666;
            }
        }
    }
</style>