// 注:process.env.XX是韦尔塞尔的环境变量,配置方式见:https://docs . tangly 1024 . com/zh/features/personality
常数 博客 = {
  //重要page_id！！！来自https://www . organization . so/tanghh/02 ab 3b 8678004 aa 69 e 9 e 415905 ef 32 a 5的重复模板
  概念_页面_ID:
过程。包封/包围（动词envelop的简写）.概念_页面_ID || 02ab 3b 8678004 aa 69e 9e 415905 ef 32 a 5 ',
  伪静态: 错误的, // 伪静态路径,开启后所有文章统一资源定位器都以。超文本标记语言结尾。
  下一个_重新验证_秒:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 更新内容缓存间隔 单位（秒);即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取概念数据；调大该值有助于节省韦尔塞尔资源、同时提升访问速率,但也会使文章更新有延迟。
  主题:流程。包封/包围（动词envelop的简写）.下一个_公共_主题 || 赫克索, // 主题,支持['next '，' hexo '，' fukasawa '，' medium '，' example '，' matery '，' gitbook '，' simple ']@参见https://preview.tangly1024.com
  主题_切换:流程。包封/包围（动词envelop的简写）.下一个_公共_主题_开关 || 错误的, // 是否显示切换主题按钮
  语言:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_LANG || zh-CN ', //例如' zh-CN '，' en-US '有关更多信息，请参见/lib/lang.js。
  因为: 2021, //例如，如果留空，将使用当前年份。
  出现:流程。包封/包围（动词envelop的简写）.下一次公开露面 || “光”, // ['亮'，'暗'，'自动']，//亮日间模式，黑暗夜间模式，自动根据时间和主题自动夜间模式
  外观_黑暗_时间:流程。包封/包围（动词envelop的简写）.NEXT _ PUBLIC _ APPEARANCE _ DARK _ TIME || [18, 6], // 夜间模式起至时间，假的时关闭根据时间自动切换夜间模式

  // 3.14.1版本后,欢迎语在此配置,英文逗号隔开,即可支持多个欢迎语打字效果。
  问候语_单词:流程。包封/包围（动词envelop的简写）.NEXT _ PUBLIC _问候语_单词 || 嗨，我是一个程序员，欢迎来到我的博客🎉',

  自定义菜单:流程。包封/包围（动词envelop的简写）.下一个_公共_自定义_菜单 || 错误的, // 支持菜单类型,从3.12.0版本起,各主题将逐步支持灵活的二级菜单配置,替代了原来的页类型,此配置是试验功能、默认关闭。

  作者:流程。包封/包围（动词envelop的简写）.下一个_公共_作者 || '沐子科技', // 您的昵称 例如tangly1024
  个人简历:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_BIO || 嗨，我是一个程序员,欢迎来到我的博客！🎉', // 作者简介
  环:流程。包封/包围（动词envelop的简写）.下一个_公共_链接 || ' http://muzi.sj3r.com/ ', // 网站地址
  关键词:流程。包封/包围（动词envelop的简写）.下一个公共关键字 || 观念，博客', // 网站关键词 英文逗号隔开
  // 社交链接,不需要可留空白,例如联系人_微博:“”
  联系人_电子邮件:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_CONTACT_EMAIL || '', // 邮箱地址 例如mail@tangly1024.com
  联系方式_微博:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  联系人_TWITTER:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_CONTACT_TWITTER || '', // 你的推特个人主页
  联系人_GITHUB:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_CONTACT_GITHUB || '', // 你的开源代码库个人主页 例如https://github.com/tangly1024
  联系人_电报:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的电报地址 例如https://t.me/tangly_1024
  联系人_LINKEDIN:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的商务化人际关系网首页
  联系人_INSTAGRAM:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // 您的instagram地址

  观念_主持人:流程。包封/包围（动词envelop的简写）.下一个公共概念主机 || ' https://www . opinion . so ', //概念域名,您可以选择用自己的域名进行反向代理,如果不懂得什么是反向代理,请勿修改此项

  // 网站字体
  字体样式:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_FONT_STYLE || '字体-衬线', // ['font-serif '，' font-sans']两种可选,分别是衬线和无衬线：参考https://www.jianshu.com/p/55e410bd2115
  FONT_URL: [
    // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  FONT_SANS: [
    // 无衬线字体 例如'LXGW WenKai'
    'Bitter',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Microsoft YaHei"',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  FONT_SERIF: [
    // 衬线字体 例如'LXGW WenKai'
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || '/css/all.min.css', // font-awesome 字体图标地址、默认读取本地; 可选 https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE: false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // PrismJs 代码相关
  PRISM_JS_AUTO_LOADER:
      'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_THEME_PATH:
      'https://npm.elemecdn.com/prism-themes/themes/prism-a11y-dark.min.css', // 代码样式主题 更多参考 https://github.com/PrismJS/prism-themes
  CODE_MAC_BAR: true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || 'false', // 是否显示行号

  // Mermaid 图表CDN
  MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdn.jsdelivr.net/npm/mermaid@10.2.2/dist/mermaid.min.js', // CDN

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径，使用场景： 希望文章前缀路径为 /post 的情况 支持多级
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_PPOST_LIST_STYLE || 'page', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: 12, // 预览博客行数
  POST_RECOMMEND_COUNT: 6, // 推荐文章数量
  POSTS_PER_PAGE: 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按时间,'notion'由notion控制

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false, // 开关

  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false, // 开关

  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 开关
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // 开关

  // 星空雨特效 黑夜模式才会生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false, // 开关

  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
      process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
      'https://cdn.jsdelivr.net/npm/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || true, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
      process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || true, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
      process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
      'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '风を共に舞う気持ち',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731419.mp3',
      cover:
          'https://p2.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    },
    {
      name: '王都グランセル',
      artist: 'Falcom Sound Team jdk',
      url: 'https://music.163.com/song/media/outer/url?id=731355.mp3',
      cover:
          'https://p1.music.126.net/kn6ugISTonvqJh3LHLaPtQ==/599233837187278.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
      process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
      process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '60198', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
      process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  // ----> 评论互动 可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '', // TWIKOO后端地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || 'https://cdn.staticfile.org/twikoo/1.6.16/twikoo.all.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
      process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名， 例如我是 'tangly1024/NotionNext'； 更多文档参考 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的Github仓库名 e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你的Github Repo ID e.g ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_CATEGORY_ID:
      process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
      process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github Discussions 使用哪種方式來標定文章, 預設 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
      process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否開啟文章表情符號 '1' 開啟 "0" 關閉 預設開啟
  COMMENT_GISCUS_EMIT_METADATA:
      process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取 Metadata '1' 開啟 '0' 關閉 預設關閉
  COMMENT_GISCUS_INPUT_POSITION:
      process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 發表留言位置 'bottom' 尾部 'top' 頂部, 預設 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 語言 e.g 'en', 'zh-TW', 'zh-CN', 預設 'en'
  COMMENT_GISCUS_LOADING:
      process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 載入是否漸進式載入, 預設 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
      process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨網域, 預設 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
      process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
      process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC ||
      'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github仓库名，例如 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 你的用户名 e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理员用户名、一般是自己 e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
      process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || 'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
COMMENT_VALINE_APP_KEY:过程。包封/包围（动词envelop的简写）.下一个_公共_缬氨酸_密钥 || '',
COMMENT _ VALINE _ SERVER _ URLS:process。包封/包围（动词envelop的简写）.下一个公共缬氨酸服务器网址 || '', // 该配置适用于国内自定义域名用户,海外版本会自动检测（无需手动填写)@见https://valine.js.org/configuration.html#serverURLs
COMMENT_VALINE_PLACEHOLDER:
过程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论https://github.com/DesertsP/Valine-Admin便于查看评论,以及邮件通知,垃圾评论过滤等功能

COMMENT _ WALINE _ SERVER _ URL:process。包封/包围（动词envelop的简写）.下一个公共网站服务器网址 || '', // 请配置完整的沃林评论地址 例如hhttps://preview-waline . tangly 1024 . com @看https://waline.js.org/guide/get-started.html
COMMENT_WALINE_RECENT:过程。包封/包围（动词envelop的简写）.下一个公共路线最近 || 错误的, // 最新评论

  // 此评论系统基于网络提及，细节可参考https://web reference . io
  // 它是一个基于IndieWeb理念的开放式评论系统,下方评论_网络提及包含的属性皆需配置：
  //启用:是否开启
  //AUTH:web reference使用的靛玉红，可使用推特或开源代码库个人页面连结
  //主机名:web提及绑定之网域,通常即为本站网址
  //TWITTER _用户名:评论显示区域需要的资讯
  //TOKEN:web reference的API令牌
评论_网络提及:{
启用:流程。包封/包围（动词envelop的简写）.下一个_公共_网站提及_启用 || 错误的,
授权:流程。包封/包围（动词envelop的简写）.下一个_公共_网络提及_认证 || '',
主机名:进程。包封/包围（动词envelop的简写）.下一个公共网站名称主机名 || '',
TWITTER_USERNAME:进程。包封/包围（动词envelop的简写）.NEXT _ PUBLIC _ TWITTER _用户名 || '',
令牌:进程。包封/包围（动词envelop的简写）.下一个_公共_网络提及_令牌 || ''
  },

  // < - 评论插件

  // - > 站点统计
ANALYTICS_VERCEL:过程.包封/包围（动词包围的简写).NEXT_PUBLIC_ANALYTICS_VERCEL|| 错误的,// vercel自带的统计https://vercel.com/docs/concepts/analytics/quickstart·https://github.com/tangly1024/NotionNext/issues/897
分析_ BUSUANZI _启用：真实的,// 展示网站阅读量、访问数参见http://busuanzi.ibruce.info/
分析_百度_ID:流程。包封/包围（动词包围的简写).然后_公共_分析_百度_ID ||'', //例如只需要填写百度统计的id，[百度_ id]-> https://hm.baidu.com/hm.js?[百度_id]
分析_CNZZ_ID:流程.包封/包围（动词包围的简写).NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id，[cnzz _ id]-> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
ANALYTICS_GOOGLE_ID: process .包封/包围（动词包围的简写).然后_ PUBLIC _ ANALYTICS _ GOOGLE _ ID ||'', // 谷歌分析学的例如:G-XXXXXXXXXX

分析_ACKEE_TRACKER:
过程。包封/包围（动词包围的简写).然后_ PUBLIC _ ANALYTICS _ ACKEE _ TRACKER | |'', //例如" https://ackee。tangly 1024。网/追踪器。js "
分析_ ACKEE _数据_服务器：
过程。包封/包围（动词包围的简写).下一个_公共_分析_阿克里数据_服务器 ||'', //例如https://ackee.tangly1024.net，不要以斜线结尾
分析_ACKEE_DOMAIN_ID:
过程。包封/包围（动词包围的简写).然后_ PUBLIC _ ANALYTICS _ ACKEE _ DOMAIN _ ID | |'', //例如" 0e 2257 A8-54d 4-4847-91a 1-0311 ea 48 cc 7b "

SEO_GOOGLE_SITE_VERIFICATION:
过程。包封/包围（动词包围的简写).然后_ PUBLIC _ SEO _ GOOGLE _ SITE _ VERIFICATION | |'', //删除该值或用您自己的谷歌站点验证码替换它

  // < - 站点统计

  // 谷歌广告
ADSENSE_GOOGLE_ID: process .包封/包围（动词包围的简写).NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告例如ca-pub-xxxxxxxxxxxxxxxxxxxxxx
ADSENSE_GOOGLE_TEST:过程.包封/包围（动词包围的简写).然后_ PUBLIC _ ADSENSE _ GOOGLE _ TEST ||错误的,// 谷歌广告身份证明测试模式,这种模式获取假的测试广告,用于开发https://www.tangly1024.com/article/local-dev-google-adsense

  // 自定义配置概念数据库字段名
概念_属性_名称：{
密码：流程。包封/包围（动词包围的简写).下一个公共概念属性密码 || '密码',
类型：流程。包封/包围（动词包围的简写).下一个公共概念属性类型 || '类型', // 文章类型,
type_post:流程。包封/包围（动词包围的简写).然后_ PUBLIC _ idea _ PROPERTY _ TYPE _ POST | |'发布', // 当类型文章类型与此值相同时,为博文。
类型_页面：流程。包封/包围（动词包围的简写).下一个公共概念属性类型页面 || '页面', // 当类型文章类型与此值相同时,为单页。
类型_通知：
过程。包封/包围（动词包围的简写).下一个公共概念属性类型通知 || '注意', // 当类型文章类型与此值相同时,为公告。
类型_菜单：流程。包封/包围（动词包围的简写).下一个公共概念属性类型菜单 || '菜单', // 当类型文章类型与此值相同时,为菜单。
类型_子_菜单：
过程。包封/包围（动词包围的简写).下一个公共概念属性类型子菜单 || '子菜单', // 当类型文章类型与此值相同时,为子菜单。
标题：流程。包封/包围（动词包围的简写).下一个_公共_概念_属性_标题 || '标题', // 文章标题
状态：流程。包封/包围（动词包围的简写).下一个公共概念属性状态 || '状态',
状态_发布：
过程。包封/包围（动词包围的简写).下一个_公共_概念_属性_状态_发布 || '已发布', // 当状态状态值与此相同时为发布,可以为中文
状态_不可见：
过程。包封/包围（动词包围的简写).下一个_公共_概念_属性_状态_不可见 || '隐形', // 当状态状态值与此相同时为隐藏发布,可以为中文,除此之外其他页面状态不会显示在博客上
摘要：流程。包封/包围（动词包围的简写).下一个_公共_概念_属性_摘要 || '摘要',
鼻涕虫：流程。包封/包围（动词包围的简写).然后_ PUBLIC _ idea _ PROPERTY _ SLUG ||鼻涕虫,
种类：流程。包封/包围（动词包围的简写).下一个_公共_概念_属性_类别 || '类别',
日期：流程。包封/包围（动词包围的简写).下一个公共概念属性日期|| 日期,
标签：流程。包封/包围（动词包围的简写).下一个公共概念属性标签 || '标签',
图标：流程。包封/包围（动词包围的简写).下一个公共概念属性图标 || '图标'
  },

  // RSS
启用_RSS:进程。包封/包围（动词包围的简写).NEXT_PUBLIC_ENABLE_RSS|| 真实的,// 是否开启简易资讯聚合订阅功能

  // 作废配置
头像：过程。包封/包围（动词包围的简写).NEXT_PUBLIC_AVATAR || /avatar.svg '，// 作者头像,被概念中的图标覆盖。若无图标则取公众的目录下的阿凡达。png
标题：过程。包封/包围（动词包围的简写).下一个_公共_标题 || '没有下一个博客', // 站点标题,被概念中的页面标题覆盖；此处请勿留空白,否则服务器无法编译
主页_横幅_图片：
过程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_HOME_BANNER_IMAGE || 。/bg_image.jpg ', // 首页背景大图,会被概念中的封面图覆盖,若无封面图则会使用代码中的/public/bg_image.jpg文件
描述:
过程。包封/包围（动词envelop的简写）.下一个_公共_描述 || '这是一个由沐子科技制作的站点', // 站点描述,被概念中的页面描述覆盖

  // 网站图片
IMG URL类型:流程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_IMG_TYPE || “观念”, // 此配置已失效,请勿使用；亚马逊河方案不再支持,仅支持概念方案. . .['观念'，'亚马逊']站点图片前缀 默认观念:(https://opinion . so/images/xx)、亚马逊(https://S3 . us-west-2 . AMAZON AWS . com/XXX)
IMG _影子:过程。包封/包围（动词envelop的简写）.下一个_公共_ IMG _影子 || 错误的, // 文章图片是否自动添加阴影

  // 开发相关
概念访问令牌:进程。包封/包围（动词envelop的简写）.概念_访问_令牌 || '', //如果您不想公开您的数据库，这很有用
调试:进程。包封/包围（动词envelop的简写）.NEXT_PUBLIC_DEBUG || 错误的, // 是否显示调试按钮
ENABLE_CACHE: process。包封/包围（动词envelop的简写）.启用_缓存 || 错误的, // 开启缓存会将概念数据缓存在内存中,通常在开发调试中使用,正式部署开启此功能意义不大。
伊斯普罗德:过程。包封/包围（动词envelop的简写）.韦尔塞尔_环境 === “生产”, //区分开发和生产环境(ref:https://vercel . com/docs/environment-variables # system-environment-variables)is prod:process . ENV . vercel _ ENV = = = ' production '//区分开发和生产环境(ref:https://vercel . com/docs/environment-variables # system-environment-variables)
版本:流程。包封/包围（动词envelop的简写）.下一个公共版本 // 版本号
}

模块。出口=博客
