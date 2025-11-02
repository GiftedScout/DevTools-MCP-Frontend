# DevFest — Chrome DevTools MCP Workshop (静态站点)

这是一个静态活动官网风格的示例，用来记录千里伯乐在 DevFest Workshop（主题：Chrome DevTools MCP Server）中的内容。

文件列表：
- `index.html` — 主页（活动概览与快速链接）
- `gdg.html` — 介绍 GDG 与 DevFest
- `devtools.html` — 介绍 DevTools MCP 的核心概念
- `about.html` — 关于我（千里伯乐）的个人信息与联系方式
- `styles.css` — 全站样式（科幻 + 童真 风格）

本地预览：

1. 进入目录：

```bash
cd /home/pushuai/Documents/program/Python/mcp-Frontend
```

2. 启动临时静态服务器（Python 3）：

```bash
python3 -m http.server 8000
```

3. 在浏览器打开：

http://localhost:8000/index.html

注意：目前使用了 Google Fonts（Orbitron 与 Baloo 2）。如果需要加入图片或替换字体，请把资源放入该目录并修改 HTML 引用。

后续建议：
- 添加活动日期、日程以及演示代码片段
- 准备一组主题插图或徽章可以放在 `assets/` 目录
- 如需部署：可推送到 GitHub Pages / Netlify / Vercel

外部图片说明（NASA）
- 本站 hero 区支持引用外部 NASA 图片以获得更强烈的星云视觉效果。当前样例使用了 NASA 官网的一些图片（可通过 CSS 变量 `--nasa-hero` 指定），这些图片已下载并放置于 `assets/` 以便离线预览与部署。

NASA 图片来源与版权说明
- `assets/nasa_tarantula.png` — "Webb Tarantula Nebula"，来源：NASA 官网（https://www.nasa.gov/）。许多 NASA 天文图像被标注为公共领域（public domain），通常可用于展示与教学，但请在公开部署时保留来源链接与说明。
- `assets/nasa_pillars.jpg` — 示例缩略图，来源：NASA 官网（https://www.nasa.gov/）。在使用前请检查单张图片的具体版权声明（个别图片可能含有版权或使用限制）。

头像来源
- `assets/avatar.png` — 用户头像文件，已保存到本地以避免外部链接失效。如需替换、裁剪或生成一致风格的头像，请告诉我期望尺寸与样式。

使用与部署小贴士
- 本仓库将这些图片作为示例素材并保存在 `assets/`。在部署到公共站点（如 GitHub Pages）前，建议核验每张图片的版权与使用条款，并在 README 中引用相应的官方页面作为来源。

参考样式
- 我从你提供的示例站（https://sanaapk-jpg.github.io/my-website/index.html）汲取了“探索地图 / 大型卡片链接”的展示方式，并把类似的 Tile 风格应用到首页以增强导航可视性。
