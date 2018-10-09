let list = [
  {
    title:"我想这周把vue学会",
    isCompleted:false
  },
  {
    title:"我想去嵩山少林寺学武功",
    isCompleted:true
  }
];

var app = new Vue({
  el:"#todolist",
  data:{
    //添加文本框的数据
    addInp:"",
    listItems:[]
  },
  methods:{
    //添加列表
    add:function(){
      this.listItems.push({title:this.addInp,isCompleted:false});
      this.addInp = "";
    },
    //删除列表
    del:function(index){
      this.listItems.splice(index,1);
    }
  }
})
