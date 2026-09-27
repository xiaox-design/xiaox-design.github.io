# Project Videos — V4

三个产品视频现在都直接内嵌在对应的项目详情页中。

## 播放行为

- 页面打开时：视频默认暂停，不自动播放。
- 用户点击播放后：默认以有声音状态开始播放。
- 视频仍保留原生播放控制条。
- 首帧/海报图在暂停状态下显示。

## PDF 直达视频的链接

项目详情页的视频区都有独立的 URL 锚点，可以让 PDF 中的链接直接打开到“视频这一段”，而不是项目顶部。

- Apex Vitalis：`/project/apex-vitalis#video-apex`
- Moody：`/project/moody#video-moody`
- Gradient：`/project/gradient#video-gradient`

使用时，把你的 GitHub Pages 域名放在前面即可，例如：
`https://你的用户名.github.io/portfolio/#/project/apex-vitalis#video-apex`

> 注意：上面最后一个例子只是路径示意。实际使用时，由于项目使用 React Router，最稳妥的是使用当前网站实际打开后的地址格式，并在对应视频区保留 `#video-apex` / `#video-moody` / `#video-gradient` 锚点。
