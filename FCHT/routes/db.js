// 加载mongodb
var mongo=require("mongodb");
// 创建mongodb 的客户端
var MongoClient = mongo.MongoClient;
// 本机mongdb数据库的地址
var urls = "mongodb://127.0.0.1:27017/htData";
// 查询的方法
// 查询
var find=function (db,collection,selector,callback) {
    collection.find(selector).toArray(function (err, result) {
        if (err){
            console.log("查询失败");console.log(err);
        }else {
            callback(result)
        }
        db.close();// 释放链接
    })
};
// 删除
var  deletes=function (db,collection,selector,callback) {
    collection.deleteOne(selector,function (err, result) {
        if (err){
            console.log("删除失败");console.log(err)
        }else {
            callback(result)
        }
        db.close();
    })
};
// 添加
var add=function (db, collection, selector, callback) {
    collection.insert(selector,function (err,result) {
      if (err){// 操作失败
          console.log("写入数据失败");console.log(err);
      } else {// 操作成功
          callback(result)
      }
      db.close();//释放链接
    })
};
// 修改  操作数据 selector ==》 修改的条件和修改的内容
//             selector ===》 数组  [{修改的条件}，{修改的内容}]
var updates=function (db, collection, selector, callback) {
    //                    更新条件    更新的内容    更新后的回调
    collection.updateOne(selector[0],selector[1],function (err, result) {
        if (err){
            console.log("更新失败");console.log(err)
        }else {
            callback(result)
        }
        db.close();//释放链接
    })
}

// 方法类别
var methodType = {
    find:find,
    add:add,
    deletes:deletes,
    updates:updates,
    update:updates,
    delete:deletes
};
module.exports=function (method,collections,selector,callback) {
    MongoClient.connect(urls,function (err, db) {
        if (err){
            console.log("获取数据库的链接失败");console.log(err);
        }else {
            var collection=db.collection(collections);
            methodType[method](db,collection,selector,callback)
        }
    })
};
