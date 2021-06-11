(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{393:function(t,_,v){"use strict";v.r(_);var A=v(44),r=Object(A.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"如何解决-gta-线上模式中与严格-strict-nat-类型相关的错误"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#如何解决-gta-线上模式中与严格-strict-nat-类型相关的错误"}},[t._v("#")]),t._v(" 如何解决 GTA 线上模式中与严格（Strict） NAT 类型相关的错误")]),t._v(" "),v("p",[t._v("**问：**我看到一则错误讯息，说我的 NAT 类型是「严格」(Strict)。这是什么意思？我要如何变更我的 NAT 类型？")]),t._v(" "),v("p",[t._v("**答：**NAT 的意思是「网路位址转译」(Network Address Translation)。这是一种路由器或网际网路闸道装置的功能，可以将您 PC 的私人 IP 和连接埠转译成公开 IP 和连接埠。您的 NAT 类型会说明 NAT 装置用来执行这种转译的方式，以及装置如何筛选连入的封包。")]),t._v(" "),v("blockquote",[v("p",[v("strong",[t._v("本质上，您的 NAT 类型会决定游戏透过网际网路与其他玩家连线的流畅度。")])])]),t._v(" "),v("p",[v("strong",[t._v("NAT 类型有 3 种一般分类方式：")])]),t._v(" "),v("ul",[v("li",[t._v("开放：您可以与使用任何 NAT 类型的对象一起进行游戏。")]),t._v(" "),v("li",[t._v("中等：您可以与 NAT 类型设定为开放或中等的玩家进行游戏。")]),t._v(" "),v("li",[t._v("严格：仅能与 NAT 类型设定为开放的玩家进行游戏。")])]),t._v(" "),v("p",[t._v("如果您的 NAT 类型是「严格」，您将无法与大多数的玩家直接连线。这样会导致许多问题发生，例如延迟(lag) 较长、可加入战局的人数较少、等候时间较长，而且连线中断的情况会更频繁。如果发生连线冲突，游戏可能会选择强制让 NAT 类型最严格的玩家退出。")]),t._v(" "),v("p",[v("strong",[t._v("我该如何变更自己的 NAT 类型？")])]),t._v(" "),v("p",[t._v("部分路由器会有「游戏模式（Gaming Mode）」。启用此模式后，您的 NAT 类型通常会更适合游戏。请参阅路由器使用说明，或进行线上搜寻，了解您的路由器是否支援此模式。")]),t._v(" "),v("p",[t._v("如果您的 NAT 类型为「严格」，游戏可能就会无法使用连接埠，路由器也可能会在传送封包至您战局中每个不同玩家时，将您的私人连接埠转译成不确定的公开连接埠。这样其他玩家就无法决定要使用哪个连接埠来连线。如果要修正此问题，您可以启用 uPnP，或在您的路由器上设定连接埠转送规则。大多数路由器可支援某些连接埠转送格式。如果设定正确，系统会指示路由器将来自特定连接埠的连入流量，转送至您网路中的特定装置。您可能也需要为自己的 PC 指定一个专用的静态 IP (请注意，您不需要网际网路服务提供商的静态 IP，只需要您的 PC 在您内部网路使用的静态私人 IP 即可)。GTA 线上模式的多人游戏流量，使用的是 UDP 连接埠 6672。当您的 PC 有静态 IP 时，请将 UDP 连接埠 6672 转送至该 IP。")]),t._v(" "),v("p",[t._v("GTA 线上模式的其他连接埠转接：")]),t._v(" "),v("p",[t._v("TCP 连接埠：80，443\nUDP 连接埠：6672、61455、61456、61457 和 61458")]),t._v(" "),v("p",[v("strong",[t._v("其他您可以尝试改善连线品质的方式：")])]),t._v(" "),v("ol",[v("li",[t._v("确认您的路由器韧体已更新为最新版本(这点非常重要)。 2.拔除路由器上的网路线十分钟，然后再插回去。有些较旧的路由器和电脑一样，其效能会随着使用时间而衰减，需要重新启动。")]),t._v(" "),v("li",[t._v("进行游戏时，停用所有防火墙或其他网路过滤器，或开启上述的连接埠。")]),t._v(" "),v("li",[t._v("启用或停用路由器中的 uPnP (通用随插即用) 功能。")]),t._v(" "),v("li",[t._v("不要使用路由器，直接使用有线乙太网路缆线连接您的 PC 与数据机(不用无线网路)。")]),t._v(" "),v("li",[t._v("如果路由器已连接至闸道器(闸道器就是数据机和路由器二合一)，这两种装置可能同时执行 NAT。若要解决此问题，请将闸道器设为「桥接模式」，这样就只有您的路由器会执行 NAT。请参阅闸道器的使用手册，或联络您的网际网路服务供应商（ISP）取得如何将闸道器设定为桥接模式的说明，或者，如果您有 ADSL，请取得 PPPoE 资讯。")]),t._v(" "),v("li",[t._v("如果您使用 ADSL 连线，请尝试透过 PC 连接 PPPoE 连线，看看能否改善 NAT 类型。请参阅装置的使用手册，或是联络网际网路服务供应商（ISP）取得说明指示。")])]),t._v(" "),v("blockquote",[v("p",[v("a",{attrs:{href:"https://support.rockstargames.com/tw/articles/206210548/%E5%A6%82%E4%BD%95%E8%A7%A3%E6%B1%BA-GTA-%E7%B7%9A%E4%B8%8A%E6%A8%A1%E5%BC%8F%E4%B8%AD%E8%88%87%E5%9A%B4%E6%A0%BC-Strict-NAT-%E9%A1%9E%E5%9E%8B%E7%9B%B8%E9%97%9C%E7%9A%84%E9%8C%AF%E8%AA%A4",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考网址"),v("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=r.exports}}]);