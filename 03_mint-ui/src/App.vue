<template>
    <div>   
        <mt-header title="34期开心"></mt-header>

        <mt-swipe :auto="4000">
          <mt-swipe-item>1</mt-swipe-item>
          <mt-swipe-item>2</mt-swipe-item>
          <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <mt-switch v-model="value"></mt-switch>

        <mt-button type="default">default</mt-button>
        <mt-button type="primary">primary</mt-button>
        <mt-button type="danger" @click="show">danger</mt-button>

        <br/>
        改变大小
        <mt-button size="small">small</mt-button>
        <mt-button size="large">large</mt-button>
        <mt-button size="normal">normal</mt-button>
        <br/>
        禁用按钮
        <mt-button disabled>disabled</mt-button>   <br/>
        幽灵按钮
        <mt-button plain type="danger">plain</mt-button>   <br/>
        带图标
        <mt-button icon="back">back</mt-button>
        <mt-button icon="more">更多</mt-button>


        <mt-tabbar v-model="selected">
          <mt-tab-item id="外卖">
            <img slot="icon" src="">
            外卖<mt-badge size="small" type="error">30</mt-badge>
          </mt-tab-item>
          <mt-tab-item id="订单">
            <img slot="icon" src="">
            订单
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" src="">
            发现
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" src="">
            我的
          </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
// import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';

    export default {
        methods:{
            show(){
                // Toast({
                //   message: '提示:哈哈',
                //   position: 'bottom',
                //   duration: 5000
                // });
                // this.$toast('嘿嘿');
                

                MessageBox('提示', '操作成功');

                // this.$messageBox('提示', '操作成功');


                // this.$indicator.open({
                //   text: '加载中...',
                //   spinnerType: 'fading-circle'
                // });

                // setTimeout(()=>{
                //     this.$indicator.close();
                // },2000);


            }
        },
        data(){
            return {
                selected:'',
                value:true
            }
        },
        watch:{
            selected:function(newV,oldV){
                console.log(newV);
            }
        }
    }
</script>
<style scoped>
    .mint-swipe{
        height: 50px;
    }
</style>