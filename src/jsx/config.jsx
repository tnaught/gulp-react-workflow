module.exports = {
    //接入的平台配置
    platforms: [
    {
        key: 'recommend',
        title: '推荐平台',
        url: 'recommend/index.html',
        menus: [
        {
           key: 'pushrate',
           title: '下发率',
           url: 'pushrate.html',
           subMenus: []
        }
        ,{
           key: 'pvAuv',
           title: 'pv和uv',
           url: 'pvAuv.html',
           subMenus: [] 
        }
        ,{
           key: 'robustOserver',
           title: '服务健壮性',
           url: 'robustOserver.html',
           subMenus: [] 
        }
        ,{
           key: 'robustOngnix',
           url: 'robustOngnix.html',
           title: 'ngnix健壮性',
           subMenus: []
        }]
    } 
    ,{
        key: 'rubbish',
        title: '垃圾管理平台',
        url: 'rubbish/index.html'
    }]
};
