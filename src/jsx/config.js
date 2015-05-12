module.exports = {
    platforms: [
    {
        key: 'recommend',
        title: '推荐平台',
        url: 'recommend/index.html',
        menus: [
        {
           key: 'link1',
           title: '链接1',
           url: 'index.html',
           subMenus: []
        }
        ,{
           key: 'link2',
           title: '链接2',
           url: 'link2.html',
           subMenus: []
        }
        ,{
           key: 'folder1',
           title: '一级目录',
           subMenus: [{
                key: 'link3',
                title: '链接3',
                url: 'link3.html',
                subMenus: []
           },
           {
                key: 'link4',
                title: '链接4',
                url: 'link4.html',
                subMenus: []
           }]
        }]
    }]
};
