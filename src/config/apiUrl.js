/*
 * @Description: 
 * @Date: 2020-12-01 15:49:24
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */
/*
 * @Description: 
 * @Date: 2020-11-30 11:26:53
 * @Author: Jsmond2016 <jsmond2016@gmail.com>
 * @Copyright: Copyright (c) 2020, Jsmond2016
 */


let ipUrl = 'http://localhost:7001/admin/'

let servicePath = {
  getTypeInfo: ipUrl + 'getTypeInfo',  //  获得文章类别信息
  checkLogin: ipUrl + 'checkLogin',  //  检查用户名密码是否正确
  addArticle:ipUrl + 'addArticle' ,  //  添加文章
  updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址

}
export default servicePath;