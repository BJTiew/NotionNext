const CONFIG = {
  HOME_BANNER_ENABLE: true,

  SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  NOTICE_BAR: [
    { title: '欢迎来到大熙燕窝', url: 'https://www.daxiyanwo.com' },
    { title: '点击查询优质燕窝产品', url: 'https://www.daxiyanwo.com/products' },
    { title: '了解燕窝挑毛加工生产', url: 'https://www.daxiyanwo.com/production' },
    { title: '联系大熙，咨询合作', url: 'https://www.daxiyanwo.com/about' }
  ],

  // 英雄区(首页顶部大卡)
  HERO_TITLE_1: '分享燕窝知识',
  HERO_TITLE_2: '滋补得明明白白',
  HERO_TITLE_3: '大熙燕窝',
  HERO_TITLE_4: '马来西亚',
  HERO_TITLE_5: '优质健康燕窝产品',
  HERO_TITLE_LINK: 'https://www.daxiyanwo.com/products',

  // 英雄区显示三个置顶分类
  HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HERO_CATEGORY_2: { title: '燕窝食谱', url: '/tag/燕窝食谱' },
  HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HERO_RECOMMEND_POST_TAG: '推荐',
  HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  INFOCARD_GREETINGS: [
    '你好！我是大熙燕窝',
    '🇲🇾 来自马来西亚半岛',
    '🏢 是家燕窝挑毛加工厂',
    '🪶 提供跨境批发零售',
    '🐣 提供毛燕以及净燕',
    '👩🏻‍🏭 提供挑毛代工服务'
  ],
  INFO_CARD_URL: 'https://www.daxiyanwo.com/products', // 个人资料底部按钮链接

  // 用户技能图标
  GROUP_ICONS: [
    {
      title_1: 'birdnest',
      img_1: '/images/heo/birdnest.webp',
      color_1: '#989bf8',
      title_2: 'peninsular',
      img_2: '/images/heo/peninsular.webp',
      color_2: '#FFA500'
    },
    {
      title_1: 'logo',
      img_1: '/images/heo/logo.webp',
      color_1: '#57b6e6',
      title_2: 'swiftlet',
      img_2: '/images/heo/swiftlet.webp',
      color_2: '#4082c3'
    },
     {
      title_1: 'birdnest',
      img_1: '/images/heo/birdnest.webp',
      color_1: '#eb6840',
      title_2: 'peninsular',
      img_2: '/images/heo/peninsular.webp',
      color_2: '#8f55ba'
    },
    {
      title_1: 'logo',
      img_1: '/images/heo/logo.webp',
      color_1: '#f29e39',
      title_2: 'swiftlet',
      img_2: '/images/heo/swiftlet.webp',
      color_2: '#2c51db'
    },
    {
      title_1: 'birdnest',
      img_1: '/images/heo/birdnest.webp',
      color_1: '#f7cb4f',
      title_2: 'peninsular',
      img_2: '/images/heo/peninsular.webp',
      color_2: '#e9572b'
    },
    {
      title_1: 'logo',
      img_1: '/images/heo/logo.webp',
      color_1: '#df5b40',
      title_2: 'swiftlet',
      img_2: '/images/heo/swiftlet.webp',
      color_2: '#1f1f1f'
    }
  ],

  SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  SOCIAL_CARD_TITLE_1: '微信号',
  SOCIAL_CARD_TITLE_2: '马上联系大熙燕窝',
  SOCIAL_CARD_TITLE_3: '请手动添加微信号：yanwo8688',
  SOCIAL_CARD_URL: 'https://www.daxiyanwo.com/about',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  MENU_INDEX: true, // 显示首页
  MENU_CATEGORY: true, // 显示分类
  MENU_TAG: true, // 显示标签
  MENU_ARCHIVE: true, // 显示归档
  MENU_SEARCH: true, // 显示搜索

  POST_LIST_COVER: true, // 列表显示文章封面
  POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  POST_LIST_SUMMARY: true, // 文章摘要
  POST_LIST_PREVIEW: false, // 读取文章预览
  POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  ARTICLE_RECOMMEND: true, // 文章关联推荐

  WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  WIDGET_ANALYTICS: false, // 显示统计卡
  WIDGET_TO_TOP: true,
  WIDGET_TO_COMMENT: true, // 跳到评论区
  WIDGET_DARK_MODE: true, // 夜间模式
  WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
