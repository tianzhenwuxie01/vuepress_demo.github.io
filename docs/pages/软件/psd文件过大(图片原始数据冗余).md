

> 看看文件中的这些多余元数据是什么了，可以使用 PhotoShop 中的“文件简介 Alt+Shift+Ctrl+I”来查看，挨着翻一遍，切换到“原始数据”标签页时，这一大堆东西什么鬼就特别显眼，没有什么语义一看就很异常冗余。

![](https://i.loli.net/2019/08/24/4ZNQYyLb9oMPWri.png)

### 这些都是什么呢？

于是又到了求助 Google 的环节， 这是什么东西？从 Adobe 的 XMP 官方文档可以找到如下说明（第 32 页）：

> photoshop:DocumentAncestors

> If the source document for a copy-and-paste or place operation has a document ID, that ID is added to this list in the destination document’s XMP.

> 当你进行复制粘贴、拖入、导入新文件等操作时，如果这些内容来源有文档 ID，就会被记录到当前文档的 XMP 数据中，并且这些记录是不断累加的，所以特别是那些反复编辑的文档，就会慢慢累计越来越多的“文档来源”数据。

官方解释比较模糊，其它帖子也没说明白“文档 ID”到底是怎么记录的，有什么用途。文件的 XMP 数据可以导出，上面示例文件就包含了 11 万多条的“文档来源”数据，里面又分为几种不同的标签内容，这么海量的来源数据真不知道都它在记录些什么（导出的 XMP 数据在文末可下载）。

### 该怎么办？

遗憾的是这些数据完全是软件自动记录，没办法禁用这种记录行为。因为 XMP 数据的开放性与可编辑性，需要想办法直接清理掉文件中的冗余数据，而不是导出图片的时候再清理，不然还会继续存在于 PSD 文件中。

当然，这么浅显的解决思路一定有大神已经实现了，利用 PhotoShop 的脚本事件功能，就能自动清理文件中的“文档来源”数据：

- 将下面这段代码存为 .jsx 格式（也有现成的在文末可下载）

``` json
function deleteDocumentAncestorsMetadata() {
  whatApp = String(app.name);
  if (whatApp.search("Photoshop") > 0) {
    if (!documents.length) {
      alert(
        "There are no open documents. Please open a file to run this script."
      );
      return;
    }
    if (ExternalObject.AdobeXMPScript == undefined)
      ExternalObject.AdobeXMPScript = new ExternalObject("lib:AdobeXMPScript");
    var xmp = new XMPMeta(activeDocument.xmpMetadata.rawData);
    xmp.deleteProperty(XMPConst.NS_PHOTOSHOP, "DocumentAncestors");
    app.activeDocument.xmpMetadata.rawData = xmp.serialize();
  }
}
deleteDocumentAncestorsMetadata();
```

- 在 PhotoShop 中打开“文件 > 脚本 > 脚本事件管理器”窗口，照着下图设置
  ![](https://i.loli.net/2019/08/24/jsCUwN1KGSERLAQ.png)
  这种方法的效果就是，PhotoShop 每次打开文件，都会先自动清理掉冗余的“文档来源”数据，然后你就可以开心地随意保存图片了，并且对应的 PSD 文件都不会大得离谱。如果文件依然很大，那就是它本来就应该那么大，

最后提醒一下，以上方法仅解决元数据造成的文件过大和 PS 运行缓慢，如果文件本身尺寸或图层造成的问题，请参考以下情况对症解决：

- 清理空图层
- 清理未使用的样式
- 合理使用“智能对象”
- 适量的栅格化图层
- 保存时隐藏全部图层
- 发送文件时先压缩打包

注意分辨率，小尺寸的图，分辨率可以大一点。大尺寸的图，应该小一点，以下参数仅供参考：名片 600-800dpi、宣传单、画册 300dpi、海报印刷 260dpi、喷绘精喷 140DPI、喷布或超大尺寸 23.5-72dpi.假设，喷布建了一块 10 米 ×5 米的图，分辨率一般 30-45 即可，如果建到了 300，什么电脑都不行的
