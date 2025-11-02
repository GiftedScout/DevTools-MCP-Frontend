# DevFest — Chrome DevTools MCP Workshop (静态站点)

静态演示站点，记录千里伯乐在 DevFest Workshop（主题：Chrome DevTools MCP Server）中的材料与示例。

站点在线地址
- https://giftedscout.github.io/DevTools-MCP-Frontend/

重要文件
- `index.html` — 主页：活动概览、快速链接与日程
- `gdg.html` — 介绍 GDG 与 DevFest
- `devtools.html` — MCP 与 DevTools 的核心概念与示例
- `about.html` — 关于作者与联系方式
- `styles.css` — 全站样式（科幻 + 童真）

本地预览（快速）
1) 进入项目目录：

```bash
cd /home/pushuai/Documents/program/Python/mcp-Frontend
```

2) 启动临时静态服务器（Python 3）：

```bash
python3 -m http.server 8000
```

3) 在浏览器打开：

http://localhost:8000/index.html

部署（GitHub Pages）
- 已在仓库启用 GitHub Pages（`gh-pages` 分支）；也可通过 Settings → Pages 手动调整 Source。部署一般在 push 后几分钟内生效。

版权与图片来源
- `assets/nasa_tarantula.png` — "Webb Tarantula Nebula"，来源：NASA（https://www.nasa.gov/）。许多 NASA 天文图像属于公共领域，但请在发布时保留来源与说明。
- `assets/nasa_pillars.jpg` — 示例图片，来源：NASA（https://www.nasa.gov/）。
- `assets/avatar.png` — 本地化的用户头像（避免外链失效）。

开发与修改建议
- 若需替换 hero 背景，可通过页面右下角的齿轮（背景设置）在运行时替换 `--nasa-hero` CSS 变量；修改静态资源请放入 `assets/` 并更新 HTML 引用。

致谢与参考
- 视觉灵感来自 NASA 图像与你提供的示例站点（https://sanaapk-jpg.github.io/my-website/index.html）。

如需我把 README 再本地化为更正式的项目文档（增加许可证、部署脚本、贡献指南等），我可以继续完善。
使用与部署小贴士
