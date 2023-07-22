# WebRTC 

## 什么是 WebRTC ？

WebRTC 是由一家名为 Gobal IP Solutions，简称 GIPS 的瑞典公司开发的。Google 在 2011 年收购了 GIPS，并将其源代码开源。

简单来说，WebRTC 是一个可以在 Web 应用程序中实现音频，视频和数据的实时通信的开源项目。在实时通信中，音视频的采集和处理是一个很复杂的过程。比如音视频流的编解码、降噪和回声消除等，但是在 WebRTC 中，这一切都交由浏览器的底层封装来完成。我们可以直接拿到优化后的媒体流，然后将其输出到本地屏幕和扬声器，或者转发给其对等端。

我们可以在不需要任何第三方插件的情况下，实现一个浏览器到浏览器的点对点（P2P）连接，从而进行音视频实时通信。

### WebRTC API

WebRTC 提供了一些 API 供我们使用，在实时音视频通信的过程中，我们主要用到以下：

- mediaDevices
- getUserMedia：获取音频和视频流（MediaStream）
- RTCPeerConnection：点对点通信
- RTCDataChannel：数据通信
- MediaStream API：媒体流

### MediaDevices 媒体设备

**`MediaDevices`** 接口提供访问连接媒体输入的设备，如照相机和麦克风，以及屏幕共享等。它可以使你取得任何硬件资源的媒体数据。

| 事件         |                                        |
| ------------ | -------------------------------------- |
| devicechange | 每当媒体设备连接到系统或从系统中移除时 |

| 方法                      |                                        |
| ------------------------- | -------------------------------------- |
| enumerateDevices()        |                                        |
| getSupportedConstraints() | 返回一个对象，指明设备支持那些配置参数 |
| getDisplayMedia()         | 获取显示器或者窗口                     |
| getUserMedia()            | 获取摄像头，麦克风，屏幕共享           |

`MediaDevices.getUserMedia()` 会提示用户给予使用媒体输入的许可，媒体输入会产生一个[`MediaStream`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaStream)，里面包含了请求的媒体类型的轨道。返回一个`Promise`对象，由于用户不是必须选择所以可能既不会`resolve`也不会`reject`。

```js
var video = document.querySelector('video');
var constraints = { audio: false, video: { width: 1280, height: 720 } };
navigator.mediaDevices.getUserMedia(constraints).then(stream => {
    video.srcObject = stream;
}).catch(err => {
    console.log(err);
});
```

### MediaStream 媒体流

MediaStream表示一个媒体流对象，一个流包含几个*轨道*，比如视频和音频轨道

| 属性   |         |                        |
| ------ | ------- | ---------------------- |
| active | boolean | 这个流是否处于活动状态 |
| ended  | boolean | 这个流是否被完全读取   |
| id     | string  | 这个流对象的唯一标识符 |

| 事件          |                                        |
| ------------- | -------------------------------------- |
| onaddtrack    | 一个MediaStreamTrack对象添加到这个流时 |
| onended       | 当流终止时                             |
| onremovetrack | 当一个MediaStreamTrack从这个流上移除时 |

| 其他方法                     |                                     |
| ---------------------------- | ----------------------------------- |
| MediaStream.addTrack()       | 添加一个Track                       |
| MediaStream.removeTrack()    | 删除一个Track                       |
| MediaStream.clone()          | 克隆一个MediaStream，会有一个新的ID |
| MediaStream.getTracks()      | 返回一个列表，所有Track             |
| MediaStream.getAudioTracks() | 返回一个列表，所有AudioTrack        |
| MediaStream.getVideoTracks() | 返回一个列表，所有VideoTrack        |
| MediaStream.getTrackById()   | 按ID查找Track                       |

### MediaStreamTrack

MediaStreamTrack接口在User Agent中表示一段媒体源，比如音轨或视频

| 属性       |             |                              |
| ---------- | ----------- | ---------------------------- |
| enabled    | boolean     | 表示轨道是否有效             |
| id         | string      | 唯一标识符                   |
| kind       | video/audio | 表示轨道类型                 |
| label      | string      | 用户指定的标签               |
| muted      | boolean     | 表示轨道是否为静音           |
| readonly   | boolean     | 表示轨道是否只读，不能被修改 |
| readyState | live/ended  | 表示轨道的当前状态           |
| remote     | boolean     | 表示数据是否时RTC提供的      |

| 事件              |         |          |
| ----------------- | ------- | -------- |
| onstarted         | onmute  | onunmete |
| onoversonstrained | onended |          |

| 方法              |                    |               |
| ----------------- | ------------------ | ------------- |
| getConstraints()  | applyConstraints() | getSettings() |
| getCapabilities() | clone              | stop()        |



### RTCPeerConnection

RTCPeerConnection 接口代表一个由本地计算机到远端的 WebRTC 连接。该接口提供了创建，保持，监控，关闭连接的方法的实现。、

我们虽然把 WebRTC 称之为点对点的连接，但并不意味着，实现过程中不需要服务器的参与。因为在点对点的信道建立起来之前，二者之间是没有办法通信的。这也就意味着，在信令阶段，我们需要一个通信服务来帮助我们建立起这个连接。

```js
//兼容性处理
let PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
let iceServers= [
        { url: "stun:stun.l.google.com:19302"}, // 谷歌的公共服务
        {
          url: "turn:***",
          username: ***, // 用户名
          credential: *** // 密码
        }
      ]
let peer = new PeerConnection(iceServers)
```


| 事件                          |                                                      |
| ----------------------------- | ---------------------------------------------------- |
| **onaddstream**               | 当一个媒体流从远程对等体添加到PeerConnection连接中时 |
| **ondatachannel**             | 当一个RTC数据通道添加到连接中                        |
| **onicecandidate**            | 当一个ICE候选添加到备选池中                          |
| **oniceconnectionstatechang** | 当一个连接对象的状态发生改变时                       |
| onidentityresult              | 当身份断言生成时                                     |
| .onidpassertionerror          | 当身份断言关联的身份提供者遇到一个错误时             |
| onidpvalidation               | 当身份验证出错时                                     |
| onsignalingstatechange        | 当signalingstate更改的值时                           |
| **onremovestream**            | 当从此连接中删除mediastream时                        |

| 方法                       |                                                            |
| -------------------------- | ---------------------------------------------------------- |
| **RTCPeerConnection()**    | 构造函数，通过new，返回一个RTC对等体连接对象               |
| **createOffer()**          | 呼叫方发送一个offer请求（成功回调，失败回调，配置对象）    |
| **createAnswer()**         | 被呼叫方发送一个answer应答（成功回调，失败回调，配置对象） |
| **setLocalDesccription()** | 设置与连接相关的本地描述                                   |
| **setRemoteDescription()** | 设置与连接相关的远端描述                                   |
| getLocalStreams()          | 返回连接的本地媒体流数组                                   |
| **getRemoteStreams()**     | 返回连接的远端媒体流数组                                   |
| addStream()                | 添加一个媒体流                                             |
| removeStream()             | 移除一个媒体流                                             |
| close()                    | 关闭一个RTCPeerConnection实例                              |
| createDataChannel()        | 建立一个新的DC通道                                         |

基本用法

```js
var pc = new RTCPeerConnection();
pc.onaddstream = (event) {
  var vid = document.createElement("video");
  document.appendChild(vid);
  vid.srcObject = event.stream;
}
```

呼叫方

```js
let offerconf = {
    offerToReceiveAudio: 0,
    offerToReceiveVideo: 1,
    iceRestart: true,
}
navigator.getUserMedia({video: true}, function(stream) {
    pc.onaddstream({stream: stream});
    pc.addStream(stream);    
    pc.createOffer(offerconf).then((offer)=>{
        pc.setLocalDescription(offer).then(()=>{
            sendOffer()
        })
    }).catch(). 
})
```

应答方

```
pc.setRemoteDescription(offer).then(()=>{
	pc.createAnswer().then((answer)=>{
		pc.setLocalDescription(answer).then(()=>{
			sendAnswer()
		})
	})
})
```

![img](https://static.bookstack.cn/projects/webrtc-book-cn/images/rcwr_0501.png)





### DataChannel

RTCDataChannel接口代表在两者之间建立一个双向数据的通道，用于发送非音视频的信息。

可以用createDataChannel()或者在现有的RTCPeerConnection实例上用ondatachannel事件接受，创建出RTCDataChannel类型的对象。

```js
var pc = new RTCPeerConnection();
var dc = pc.createDataChannel("my channel");
dc.onmessage = function (event) {
  console.log("received: " + event.data);
};
dc.onopen = function () {
  console.log("datachannel open");
};
dc.onclose = function () {
  console.log("datachannel close");
};
dc.onerror = function () {
  console.log("datachannel error");
};
```



| 属性       |                                                      |
| ---------- | ---------------------------------------------------- |
| label      | 描述通道名字的一个字符串，这个字段可以不唯一         |
| ordered    | 返回一个Boolean，表示传递信息的顺序是否有保证        |
| protocol   | 返回正在使用的子协议的名称，一个字符串，没有则返回“” |
| id         | 当RTCDdataChannel对象被创建时，作为通道的唯一标识    |
| readyState | 表示数据连接的状态                                   |

| 事件          |                          |
| ------------- | ------------------------ |
| onopen        | 当底层数据链路传输成功时 |
| **onmessage** | 当有数据被接受时         |
| onclose       | 当底层链路被关闭时       |
| onerror       | 当遇到错误时             |

| 方法    |                                                              |
| ------- | ------------------------------------------------------------ |
| close() | 关闭channel，不会立即生效，等消息队列的数据发送完毕之后，channe才会被关闭 |
| send()  | 将参数中的数据通过channel通道发送                            |



### SDP

WebRTC 使用 Offer-Answer 模型交换 SDP，Offer 中有 SDP，Answer 中也有。例如 Alice 和 Bob 通过 WebRTC 通信：

Alice Offer

```shell
// Session description
v=0
# version SDP 协议版本，值固定为 0
o=- 2397106153131073818 2 IN IP4 127.0.0.1
# origin 代表会话的发起者
s=-
# session name 会话的名称，每个 SDP 中有且仅能有一个 s 描述，其值不能为空
c=IN IP4 0.0.0.0
connection data 
// Time description
t=0 0 携带了会话的连接信息，其实就是 IP 地址
# timing 指定了会话的开始和结束时间，如果开始和结束时间都为 0，那么意味着这次会话是永久的

// Session Attribute
a=group:BUNDLE video
a=msid-semantic: WMS gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS

// Media description
m=video 9 UDP/TLS/RTP/SAVPF 96 97
# m=<media> <port> <proto> <fmt> ...
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:l5KU
a=ice-pwd:+Sxmm3PoJUERpeHYL0HW4/T9
a=ice-options:trickle
a=fingerprint:sha-256 7C:93:85:40:01:07:91:BE:DA:64:A0:37:7E:61:CB:9D:91:9B:44:F6:C9:AC:3B:37:1C:00:15:4C:5A:B5:67:74
a=setup:actpass
a=mid:video
a=sendrecv
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96

a=ssrc-group:FID 2527104241
a=ssrc:2527104241 cname:JPmKBgFHH5YVFyaJ
a=ssrc:2527104241 msid:gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS c7072509-df47-4828-ad03-7d0274585a56
a=ssrc:2527104241 mslabel:gLzQPGuagv3xXolwPiiGAULOwOLNItvl8LyS
a=ssrc:2527104241 label:c7072509-df47-4828-ad03-7d0274585a56
```

 Bob Answer

```shell
v=0
o=- 5443219974135798586 2 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE video
a=msid-semantic: WMS uiZ7cB0hsFDRGgTIMNp6TajUK9dOoHi43HVs
m=video 9 UDP/TLS/RTP/SAVPF 96 97
c=IN IP4 0.0.0.0
a=rtcp:9 IN IP4 0.0.0.0
a=ice-ufrag:MUZf
a=ice-pwd:4QhikLcmGXnCfAzHDB++ZjM5
a=ice-options:trickle
a=fingerprint:sha-256 2A:5A:B8:43:66:05:B3:6A:E9:46:36:DF:DF:20:11:6A:F6:11:EA:D9:4E:26:E3:CE:5A:3A:C6:8D:03:49:7B:DE
a=setup:active
a=mid:video
a=sendrecv
a=rtcp-mux
a=rtcp-rsize
a=rtpmap:96 VP8/90000
a=rtcp-fb:96 goog-remb
a=rtcp-fb:96 transport-cc
a=rtcp-fb:96 ccm fir
a=rtcp-fb:96 nack
a=rtcp-fb:96 nack pli
a=rtpmap:97 rtx/90000
a=fmtp:97 apt=96
a=ssrc-group:FID 3587783331
a=ssrc:3587783331 cname:INxZnBV2Sty1zlmN
a=ssrc:3587783331 msid:uiZ7cB0hsFDRGgTIMNp6TajUK9dOoHi43HVs a3b297e7-cdbe-464e-a32c-347465ace055
a=ssrc:3587783331 mslabel:uiZ7cB0hsFDRGgTIMNp6TajUK9dOoHi43HVs
a=ssrc:3587783331 label:a3b297e7-cdbe-464e-a32c-347465ace055
```

注意：SDP Line 是顺序相关的，比如 `a=rtpmap:96` 后面的都是它相关的设置，直到下一行是 `a=rtpmap`或者其他属性

交换完 SDP 后，会交换 Candidate：

```shell
// Alice Candidate
candidate: candidate:1912876010 1 udp 2122260223 30.2.220.94 52832 typ host generation 0 ufrag l5KU network-id 1 network-cost 10
candidate: candidate:1015535386 1 tcp 1518280447 30.2.220.94 9 typ host tcptype active generation 0 ufrag l5KU network-id 1 network-cost 10
// Bob Candidate
candidate:1912876010 1 udp 2122260223 30.2.220.94 51551 typ host generation 0 ufrag MUZf network-id 1 network-cost 10
```

### SFU

MediaSoup 这种 SFU，客户端先给一个 Offer 给 SFU，SFU 只是检查这个 Offer 中的媒体特性，然后 SFU 会生成 Offer（包含会议中的其他客户端的流，如果没有人则没有 SSRC）给客户端，客户端发送 Answer 给 SFU。这种方式的好处是其他客户端加入，以及流的变更（比如关闭视频打开视频时），都可以使用 Reoffer，也就是统一由 SFU 发起新的 Offer，客户端响应，SFU 和客户端的交互模式只有一种。