/*
Navicat MySQL Data Transfer

Source Server         : datebase
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : tm-data

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-03-01 11:20:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `datalist`
-- ----------------------------
DROP TABLE IF EXISTS `datalist`;
CREATE TABLE `datalist` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(200) NOT NULL,
  `title` varchar(100) NOT NULL,
  `price` float(8,2) unsigned NOT NULL,
  `picsurl` varchar(999) NOT NULL,
  `sailnumber` int(4) unsigned NOT NULL,
  `size` varchar(999) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of datalist
-- ----------------------------
INSERT INTO `datalist` VALUES ('1', 'https://img.alicdn.com/bao/uploaded/i1/2200580577324/O1CN01A4yIBG23yRHjuAlCy_!!2200580577324.jpg', '顺丰新品！索泰RTX2080Ti 11G 玩家力量至尊PGF OC14 电脑图灵星际战舰水冷', '10799.00', 'https://img.alicdn.com/imgextra/i3/2200580577324/O1CN01LQTkS123yRHkNYb0K_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i1/2200580577324/O1CN01A4yIBG23yRHjuAlCy_!!2200580577324.jpg,https://img.alicdn.com/imgextra/i4/2200580577324/O1CN01cycdcU23yRHK6u7zO_!!2200580577324.jpg,https://img.alicdn.com/imgextra/i3/2200580577324/O1CN01qL59av23yRHJ6475U_!!2200580577324.jpg', '18', 'https://img.alicdn.com/imgextra/i1/2200580577324/O1CN017rRDhL23yRHVkG1JN_!!2200580577324.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i1/2200580577324/O1CN017rRDhL23yRHVkG1JN_!!2200580577324.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i1/2200580577324/O1CN01o870MS23yRHORQM29_!!2200580577324.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i1/2200580577324/O1CN011QaO4N23yRHgqXApO_!!2200580577324.jpg_40x40q90.jpg');
INSERT INTO `datalist` VALUES ('2', 'https://gw.alicdn.com/bao/uploaded/i4/3644630972/O1CN01mXbgml1J3DTVgOuLg_!!0-item_pic.jpg', '回力回天之力鞋ow联名鸳鸯爆改鞋子男帆布鞋女小白鞋情侣运动板鞋', '129.00', 'https://img.alicdn.com/imgextra/i4/3644630972/O1CN01mXbgml1J3DTVgOuLg_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i2/3644630972/O1CN01DUJJuR1J3DTViJZ8j_!!3644630972.jpg,https://img.alicdn.com/imgextra/i1/3644630972/O1CN01ZEFKzE1J3DTUue14C_!!3644630972.jpg,https://img.alicdn.com/imgextra/i4/3644630972/O1CN01wuD6hZ1J3DTViD7Wb_!!3644630972.jpg,https://img.alicdn.com/imgextra/i1/3644630972/O1CN01PCkrOp1J3DTUJQ96n_!!3644630972.jpg', '710', 'https://img.alicdn.com/imgextra/i2/3644630972/O1CN01AXRnQd1J3DSjCEG8L_!!3644630972.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i4/3644630972/O1CN01QXq05A1J3DTViiTMH_!!3644630972.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i2/3644630972/O1CN01wp2VFL1J3DSmaTQuN_!!3644630972.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i2/3644630972/O1CN01wp2VFL1J3DSmaTQuN_!!3644630972.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i2/3644630972/O1CN01U1QCbP1J3DS4dqtBL_!!3644630972.jpg_40x40q90.jpg');
INSERT INTO `datalist` VALUES ('3', 'https://img.alicdn.com/bao/uploaded/bao/upload/TB1f8DDtkUmBKNjSZFOwu1b2XXa.png_400x400q60.jpg', '【极速发货】DJI 大疆 御Mavic 2 新一代便携可折叠4K无人机 航拍旗舰', '7888.00', 'https://img.alicdn.com/imgextra/i2/1773095659/O1CN01N5CL0x1rfrpam9fPL_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i3/1773095659/O1CN01kqrrjk1rfrpZWOb19_!!1773095659.jpg,https://img.alicdn.com/imgextra/i4/1773095659/TB28ezjsborBKNjSZFjXXc_SpXa_!!1773095659.jpg,https://img.alicdn.com/imgextra/i2/1773095659/O1CN012dikSB1rfroLN0KOp_!!1773095659.jpg,https://img.alicdn.com/imgextra/i2/1773095659/O1CN01VNqJjZ1rfrowo0KXS_!!1773095659.jpg', '471', 'https://img.alicdn.com/imgextra/i2/1773095659/O1CN01N5CL0x1rfrpam9fPL_!!0-item_pic.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i3/1773095659/O1CN01kqrrjk1rfrpZWOb19_!!1773095659.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i4/1773095659/TB28ezjsborBKNjSZFjXXc_SpXa_!!1773095659.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i2/1773095659/O1CN012dikSB1rfroLN0KOp_!!1773095659.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i2/1773095659/O1CN01VNqJjZ1rfrowo0KXS_!!1773095659.jpg_60x60q90.jpg');
INSERT INTO `datalist` VALUES ('4', 'https://img.alicdn.com/bao/uploaded/bao/upload/TB1aQicDGmWBuNjy1Xawu0CbXXa.png_400x400q60.jpg', '【极速发货】DJI 大疆 灵眸Osmo Mobile 2 防抖手持云台  手机稳定器', '899.00', 'https://img.alicdn.com/imgextra/i4/1773095659/O1CN01bA2Ynh1rfrpaU53eE_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i4/1773095659/O1CN01VeCe1B1rfrpaU5ar4_!!1773095659.jpg,https://img.alicdn.com/imgextra/i4/1773095659/O1CN01LP4jNh1rfrpalxAWA_!!1773095659.jpg,https://img.alicdn.com/imgextra/i1/1773095659/O1CN01FEornG1rfrp8zqv0S_!!1773095659.jpg,https://img.alicdn.com/imgextra/i2/1773095659/TB2M.p9bnlYBeNjSszcXXbwhFXa_!!1773095659.jpg', '3109', 'https://img.alicdn.com/imgextra/i4/1773095659/O1CN01bA2Ynh1rfrpaU53eE_!!0-item_pic.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i4/1773095659/O1CN01VeCe1B1rfrpaU5ar4_!!1773095659.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i4/1773095659/O1CN01LP4jNh1rfrpalxAWA_!!1773095659.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i1/1773095659/O1CN01FEornG1rfrp8zqv0S_!!1773095659.jpg_60x60q90.jpg');
INSERT INTO `datalist` VALUES ('5', 'https://img.alicdn.com/bao/uploaded/i2/654519625/O1CN015sxr9p2KyIdIVVtjw_!!654519625.jpg', 'Asus/华硕B450 AMD锐龙R5 2600 盒装处理器台式电脑游戏主板CPU套装 全新', '1679.00', 'https://img.alicdn.com/imgextra/i2/654519625/O1CN015ydMpY2KyIchjopKn_!!654519625.jpg,https://img.alicdn.com/imgextra/i2/654519625/O1CN015sxr9p2KyIdIVVtjw_!!654519625.jpg,https://img.alicdn.com/imgextra/i1/654519625/O1CN01jiEqhp2KyId7AhVfI_!!654519625.png,https://img.alicdn.com/imgextra/i2/654519625/O1CN01MAcfWe2KyId5dsGC7_!!654519625.jpg,https://img.alicdn.com/imgextra/i3/654519625/O1CN01Ge9aAF2KyId4Fg4hs_!!654519625.jpg', '175', 'https://img.alicdn.com/imgextra/i2/654519625/O1CN01wm1w9D2KyIch3GlzH_!!654519625.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i2/654519625/O1CN01T6DJT52KyIcj7hTSi_!!654519625.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i2/654519625/O1CN015ydMpY2KyIchjopKn_!!654519625.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i3/654519625/O1CN01YI9sPw2KyIch3IeMk_!!654519625.jpg_40x40q90.jpg');
INSERT INTO `datalist` VALUES ('6', 'https://img.alicdn.com/bao/uploaded/i4/1746864514/O1CN011jDSJNasHgMVApZ_!!1746864514.jpg', 'AMD 锐龙 Threadripper 2950X 锐龙 Threadripper 2950X', '6999.00', 'https://img.alicdn.com/imgextra/i3/4205584977/O1CN01CKZh8T1mdVi9L3Lg7_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i1/4205584977/O1CN01uiWXiN1mdViGBtGZK_!!4205584977.jpg,https://img.alicdn.com/imgextra/i3/4205584977/O1CN01aLbSrx1mdViEQxP9m_!!4205584977.jpg,https://img.alicdn.com/imgextra/i4/4205584977/O1CN01vmCTfq1mdViIHZvW1_!!4205584977.jpg,https://img.alicdn.com/imgextra/i4/4205584977/O1CN01peT5JU1mdViGop2J8_!!4205584977.jpg', '0', 'https://img.alicdn.com/imgextra/i1/4205584977/O1CN01J7VHPh1mdViHnVSlA_!!4205584977.jpg_40x40q90.jpg');
INSERT INTO `datalist` VALUES ('7', 'https://img.alicdn.com/bao/uploaded/i2/3971128232/TB2ftl9r0knBKNjSZKPXXX6OFXa_!!3971128232.jpg', 'AMD/锐龙撕裂者2990WX+技嘉X399 AORUS XTREME CPU套餐32核64线程', '18888.00', 'https://img.alicdn.com/imgextra/i4/3971128232/TB2KFpdsXooBKNjSZFPXXXa2XXa_!!3971128232-0-item_pic.jpg,https://img.alicdn.com/imgextra/i2/3971128232/TB2ftl9r0knBKNjSZKPXXX6OFXa_!!3971128232.jpg,https://img.alicdn.com/imgextra/i3/3971128232/TB24c0YrWQoBKNjSZJnXXaw9VXa_!!3971128232.jpg,https://img.alicdn.com/imgextra/i1/3971128232/TB22lB2rYwrBKNjSZPcXXXpapXa_!!3971128232.jpg,https://img.alicdn.com/imgextra/i4/3971128232/TB29p3_r77mBKNjSZFyXXbydFXa_!!3971128232.jpg', '0', 'https://img.alicdn.com/imgextra/i2/3971128232/TB2ftl9r0knBKNjSZKPXXX6OFXa_!!3971128232.jpg_60x60q90.jpg');
INSERT INTO `datalist` VALUES ('8', 'https://img.alicdn.com/bao/uploaded/bao/upload/TB1NOHVvXkoBKNjSZFEwu2rEVXa.png_400x400q60.jpg', '【三只松鼠_夏威夷果265gx2】休闲零食特产坚果炒货干果仁奶油味', '52.90', 'https://img.alicdn.com/imgextra/i3/880734502/O1CN01PrOfzv1j7xaVRBVYL_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i4/880734502/O1CN011j7xYeg398l0TLY_!!880734502.jpg,https://img.alicdn.com/imgextra/i2/880734502/TB2I0.kkTJYBeNjy1zeXXahzVXa_!!880734502.jpg,https://img.alicdn.com/imgextra/i4/880734502/TB2HDX.gFXXXXbRXpXXXXXXXXXX_!!880734502.jpg,https://img.alicdn.com/imgextra/i3/880734502/TB2O4kovoOWBKNjSZKzXXXfWFXa_!!880734502.jpg', '156235', 'https://img.alicdn.com/imgextra/i3/880734502/O1CN01PrOfzv1j7xaVRBVYL_!!0-item_pic.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i4/880734502/O1CN011j7xYeg398l0TLY_!!880734502.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i2/880734502/TB2I0.kkTJYBeNjy1zeXXahzVXa_!!880734502.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i4/880734502/TB2HDX.gFXXXXbRXpXXXXXXXXXX_!!880734502.jpg_60x60q90.jpg,https://img.alicdn.com/imgextra/i3/880734502/TB2O4kovoOWBKNjSZKzXXXfWFXa_!!880734502.jpg_60x60q90.jpg');
INSERT INTO `datalist` VALUES ('9', 'https://img.alicdn.com/bao/uploaded/i1/4147344602/O1CN01KyqTom1jrlAo0ibRt_!!4147344602.jpg', '阿斯加特Asgard 1TB M.2 NVME SSD台式机m.2笔记本硬盘固态硬盘256G  512G高品质固态硬盘', '898.00', 'https://img.alicdn.com/imgextra/i2/4147344602/O1CN01Tdk3mZ1jrlAfduePg_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i1/4147344602/O1CN01KyqTom1jrlAo0ibRt_!!4147344602.jpg,https://img.alicdn.com/imgextra/i3/4147344602/O1CN011jrlAFg4hmNCDku_!!4147344602.jpg,https://img.alicdn.com/imgextra/i1/4147344602/O1CN011jrlAFTEglAcWzG_!!4147344602.jpg,https://img.alicdn.com/imgextra/i3/4147344602/O1CN011jrlAEH6WYMvITR_!!4147344602.jpg', '5', 'https://img.alicdn.com/imgextra/i2/4147344602/O1CN01Tdk3mZ1jrlAfduePg_!!0-item_pic.jpg_60x60q90.jpg');
INSERT INTO `datalist` VALUES ('10', 'https://img.alicdn.com/bao/uploaded/i2/1714128138/O1CN01yxfrkO29zFgPloibo_!!1714128138.jpg', '【小米8指纹版到手价2499元起】Xiaomi/小米小米8年度旗舰全面屏骁龙845指纹版智能拍照游戏手机旗舰官方', '2599.00', 'https://img.alicdn.com/imgextra/i1/1714128138/O1CN01BUPxUI29zFgMiXBtt_!!0-item_pic.jpg,https://img.alicdn.com/imgextra/i2/1714128138/O1CN01yxfrkO29zFgPloibo_!!1714128138.jpg,https://img.alicdn.com/imgextra/i2/1714128138/O1CN01yxfrkO29zFgPloibo_!!1714128138.jpg,https://img.alicdn.com/imgextra/i4/1714128138/TB2YBWWoiOYBuNjSsD4XXbSkFXa_!!1714128138.jpg,https://img.alicdn.com/imgextra/i2/1714128138/O1CN01osN4mJ29zFfNezVui_!!1714128138.jpg', '28645', 'https://img.alicdn.com/imgextra/i7/TB1j_W3uN9YBuNjy0Ff0wpIsVXa_110610.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i8/TB10MDmX3TqK1RjSZPhuL0fOFXa_081922.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i4/1714128138/O1CN01CEWHmF29zFgHmtvSA_!!1714128138.jpg_40x40q90.jpg,https://img.alicdn.com/imgextra/i4/1714128138/O1CN016vamUC29zFgL517pE_!!1714128138.png_40x40q90.jpg');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(11) NOT NULL,
  `password` varchar(50) NOT NULL,
  `nickname` varchar(40) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('17730229430', '2fc70a0e46635f984df91893e9c10708f07d9a90', '测试用户', '2019-03-01 11:11:37');
