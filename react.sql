/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : react

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-17 16:35:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `imgurl` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `readqty` varchar(11) DEFAULT NULL,
  `zan` varchar(11) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('0000000001', './src/img/jj1.png', 'RUOSAI帮你甩掉一身的肥膘,打造凶猛的肌肉野兽', '散步更有利于保持健康 每日健康:美国足科医学会提出了一种很棒的运动——散步,这种运动不需要特别的技能和特殊的设', '12302122', '7945', '/article');
INSERT INTO `article` VALUES ('0000000002', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000003', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000004', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000005', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000006', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000007', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000008', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000009', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000010', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000011', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000012', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000013', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000014', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000015', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000016', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000017', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000018', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000019', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000020', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000021', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000022', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000023', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000024', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000025', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');
INSERT INTO `article` VALUES ('0000000026', './src/img/jj2.png', '肌肉与汗水的最佳伴侣，运动健身不可或缺的另一半', '如今，很多人都喜欢在下班后，到健身旁去锻炼身体', '1222122', '5245', '/article');
INSERT INTO `article` VALUES ('0000000027', './src/img/jj3.png', '脱颖而出的欧美帅气范儿，迷妹不把自来', '这两天毒编的一位程序员朋友又在不停地约我喝酒，不用问，他肯定是又失恋了', '422122', '4545', '/article');
INSERT INTO `article` VALUES ('0000000028', './src/img/jj4.png', '皇室贵族的身份象征，也能成为笔尖上的精致点缀', '- 绝对的身份象征!实力的体现!融资必备法宝!一经拥有别无它求! 私人财卡(黑钻)推荐费:10000元; 靓号钻石卡推荐费:5000元', '5232122', '4245', '/article');

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `goodsid` int(10) DEFAULT NULL COMMENT 'goods表的商品id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `number` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('0000000050', '2', '付玲', '9', '咖啡色', '27', '2017-11-17 16:23:49');
INSERT INTO `carlist` VALUES ('0000000051', '4', '付玲', '8', '抢灰色', '27', '2017-11-17 16:23:47');
INSERT INTO `carlist` VALUES ('0000000052', '24', '付玲', '2', '抢灰色', '27', '2017-11-17 15:43:59');
INSERT INTO `carlist` VALUES ('0000000053', '6', '张三', '1', '抢灰色', '26', '2017-11-17 15:59:46');
INSERT INTO `carlist` VALUES ('0000000054', '6', '张三', '2', '咖啡色', '27', '2017-11-17 16:01:23');
INSERT INTO `carlist` VALUES ('0000000038', '13', '付玲', '8', '抢灰色', '27', '2017-11-17 10:30:20');
INSERT INTO `carlist` VALUES ('0000000045', '13', '付玲', '8', '咖啡色', '28', '2017-11-17 10:16:08');
INSERT INTO `carlist` VALUES ('0000000046', '13', '付玲', '5', '咖啡色', '26', '2017-11-17 10:11:51');
INSERT INTO `carlist` VALUES ('0000000047', '13', '付玲', '9', '咖啡色', '27', '2017-11-17 10:14:57');
INSERT INTO `carlist` VALUES ('0000000048', '2', '付玲', '9', '咖啡色', '28', '2017-11-17 16:23:49');
INSERT INTO `carlist` VALUES ('0000000049', '2', '付玲', '9', '抢灰色', '27', '2017-11-17 16:23:49');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT '名称',
  `img` varchar(255) DEFAULT NULL COMMENT '图片',
  `price` decimal(10,2) DEFAULT NULL COMMENT '价格',
  `number` int(11) DEFAULT NULL COMMENT '数量',
  `type` varchar(255) DEFAULT NULL COMMENT '类型',
  `decorations` varchar(255) DEFAULT NULL COMMENT '描述',
  `color` varchar(255) DEFAULT NULL COMMENT '颜色',
  `size` varchar(255) DEFAULT NULL COMMENT '尺寸',
  `addTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '添加时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('0000000001', '风格派钻石迷你暖手宝', './src/img/j1.png', '198.00', '10', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000002', 'FLEXWARM暖宫腹带', './src/img/j2.png', '328.00', '8', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000003', '智能控温充电暖手宝', './src/img/j3.png', '298.00', '2', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000004', '真空保温杯', './src/img/j4.png', '329.00', '1', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000005', 'CC衣服粘毛器', './src/img/j5.png', '79.00', '1', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000006', '小黄鸭充电暖手宝', './src/img/j6.png', '188.00', '12', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000007', '瑞典可折叠电水壶', './src/img/j7.png', '199.00', '1', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000008', '天气预报瓶', './src/img/j8.png', '168.00', '1', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000009', '沙漏伴睡小夜灯', './src/img/j9.png', '168.00', '4', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000010', '磁吸平衡灯', './src/img/j10.png', '269.00', '1', '1', '家居', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000011', '小恶魔发油', './src/img/l1.png', '138.00', '10', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000012', '男士沐浴皂', './src/img/l2.png', '118.00', '1', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000013', '参天高浓度眼药水', './src/img/l3.png', '138.00', '2', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000014', '小猪鼻头贴', './src/img/l4.png', '99.00', '1', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000015', '沐浴魔法天然手工皂', './src/img/l5.png', '168.00', '1', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000016', '玻尿酸泡泡沐浴露', './src/img/l6.png', '134.00', '12', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000017', '水基发油发蜡', './src/img/l7.png', '185.00', '1', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000018', '无硅油洗发水', './src/img/l8.png', '118.00', '1', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000019', '瘦身沐浴露', './src/img/l9.png', '198.00', '4', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000020', '复古洗发水', './src/img/l10.png', '135.00', '1', '2', '理容', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000021', 'iPhone X透明外壳', './src/img/g1.png', '148.00', '10', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000022', '信用卡式安全折叠刀', './src/img/g2.png', '158.00', '1', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000023', '多口高速充电器', './src/img/g3.png', '168.00', '2', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000024', 'iPhone X全包围外壳', './src/img/g4.png', '168.00', '1', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000025', 'TRU VIRTU铝制钱包', './src/img/g5.png', '398.00', '1', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000026', '可折叠骑行头盔', './src/img/g6.png', '888.00', '12', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000027', '求生救援刀', './src/img/g7.png', '189.00', '1', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000028', '感应报警器', './src/img/g8.png', '178.00', '1', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000029', '金属鼠标垫', './src/img/g9.png', '199.00', '4', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000030', '金刚球多功能车载充电器', './src/img/g10.png', '399.00', '1', '3', '工具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000031', '可吸入式咖啡因能量棒', './src/img/w1.png', '198.00', '10', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000032', '可吸入式咖啡因能量棒', './src/img/w2.png', '220.00', '1', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000033', '奶蓟草解酒棒', './src/img/w3.png', '198.00', '2', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000034', '联名打火机', './src/img/w4.png', '498.00', '1', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000035', '可吸入式咖啡因能量棒', './src/img/w5.png', '245.00', '1', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000036', '精工指尖陀螺', './src/img/w6.png', '248.00', '12', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000037', 'Vivarise口袋魔方', './src/img/w7.png', '198.00', '1', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000038', '美国原装进口减脂棒', './src/img/w8.png', '198.00', '1', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000039', '大烟雾蒸汽电子烟', './src/img/w9.png', '498.00', '4', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000040', '创业万能遥控器', './src/img/w10.png', '698.00', '1', '4', '玩物', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000041', '可伸缩水杯', './src/img/y1.png', '198.00', '10', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000042', '肌肉训练仪腹肌贴', './src/img/y2.png', '286.00', '1', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000043', '腹肌健身器材', './src/img/y3.png', '299.00', '2', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000044', '健身吸汗加长全棉毛巾', './src/img/y4.png', '288.00', '1', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000045', '收腹肌滚轮', './src/img/y5.png', '328.00', '1', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000046', '游泳包干湿分离装备', './src/img/y6.png', '799.00', '12', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000047', '户外战术攻击双肩包', './src/img/y7.png', '1260.00', '1', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000048', '健腹器', './src/img/y8.png', '585.00', '1', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000049', '肌肉训练仪', './src/img/y9.png', '299.00', '4', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000050', '智能折叠迷你代步电动车', './src/img/y10.png', '2800.00', '1', '5', '运动', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000051', '日本兔系手机壳', './src/img/c1.png', '259.00', '10', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000052', '球鞋防水防尘喷雾', './src/img/c2.png', '176.00', '1', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000053', '弹性创意鞋扣', './src/img/c3.png', '88.00', '2', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000054', '儿童净化器口罩', './src/img/c4.png', '299.00', '1', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000055', '洗鞋套装 泡沫清洁剂', './src/img/c5.png', '88.00', '1', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000056', '日本猫系手机壳', './src/img/c6.png', '259.00', '12', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000057', '运动背包', './src/img/c7.png', '698.00', '1', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000058', '联名特别款哑铃项链', './src/img/c8.png', '599.00', '1', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000059', '绽放系列吊坠', './src/img/c9.png', '1398.00', '4', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000060', '球鞋清洁液', './src/img/c10.png', '99.00', '1', '6', '穿搭', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000061', '复古机械键盘', './src/img/yy1.png', '499.00', '10', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000062', '钢铁侠头盔蓝牙音箱', './src/img/yy2.png', '2580.00', '1', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000063', '复古创意音箱', './src/img/yy3.png', '499.00', '2', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000064', '创意无线蓝牙音箱', './src/img/yy4.png', '699.00', '1', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000065', '外语翻译神器', './src/img/yy5.png', '1199.00', '1', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000066', '猫王蓝牙音箱', './src/img/yy6.png', '599.00', '12', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000067', 'AR镂空耳机', './src/img/yy7.png', '389.00', '1', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000068', 'mini威震天蓝牙音箱', './src/img/yy8.png', '599.00', '1', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000069', '发烧胆机功放机', './src/img/yy9.png', '1299.00', '4', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000070', 'CD机蓝牙音箱', './src/img/yy10.png', '1399.00', '1', '7', '影音', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000071', '瞳孔系列机械腕表', './src/img/m1.png', '6999.00', '10', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000072', '新会七月小青柑', './src/img/m2.png', '218.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000073', '限量款曲奇', './src/img/m3.png', '216.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000074', '高浓缩咖啡', './src/img/m4.png', '432.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000075', '四层无糖薄荷口香糖', './src/img/m5.png', '116.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000076', '曼莎莉牛轧糖礼盒', './src/img/m6.png', '268.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000077', '疯狂的鳄鱼高浓缩咖啡', './src/img/m7.png', '145.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000078', '卡瓦安神糖', './src/img/m8.png', '192.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000079', '蜂蜜玫瑰花茶', './src/img/m9.png', '89.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000080', '暗示薄荷糖', './src/img/m10.png', '118.00', '1', '8', '美食', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000081', '永恒系列触控笔', './src/img/wj1.png', '108.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000082', '帝王手抄心经', './src/img/wj2.png', '128.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000083', '伶动圆珠笔', './src/img/wj3.png', '785.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000084', '智能笔记本套装', './src/img/wj4.png', '1998.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000085', '内置万宝龙笔芯', './src/img/wj5.png', '680.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000086', '书签灯', './src/img/wj6.png', '258.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000087', '活页笔记本会议通用', './src/img/wj7.png', '128.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000088', '涂鸦模版式书签', './src/img/wj8.png', '118.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000089', '黄铜制复古笔盒', './src/img/wj9.png', '428.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000090', '磨砂钢杆宝珠笔', './src/img/wj10.png', '980.00', '1', '9', '文具', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000091', '调制酒2号3号4号', './src/img/mj1.png', '168.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000092', '澄杯组合款手工冬酿', './src/img/mj2.png', '388.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000093', '澄杯常规款手工冬酿', './src/img/mj3.png', '628.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000094', '玫瑰花酒果酒', './src/img/mj4.png', '199.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000095', '桃花酒 西柏酒 柠檬酒', './src/img/mj5.png', '239.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000096', '魔色葡萄酒', './src/img/mj6.png', '128.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000097', '美式精酿啤酒组合装', './src/img/mj7.png', '316.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000098', '比利时进口精酿小麦白啤酒', './src/img/mj8.png', '178.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000099', '精酿啤酒 6种口味', './src/img/mj9.png', '178.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000100', '澄杯初酒手工冬酿', './src/img/mj10.png', '2888.00', '1', '10', '美酒', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000101', '瞳孔系列机械腕表', './src/img/wb1.png', '6999.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000102', '意大利机械腕表', './src/img/wb2.png', '1880.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000103', '意大利机械腕表表带', './src/img/wb3.png', '198.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000104', '弧面水滴屏智能腕表', './src/img/wb4.png', '1590.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000105', '极致镂空自动机械手表', './src/img/wb5.png', '2380.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000106', '时尚潮流超薄石英表', './src/img/wb6.png', '799.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000107', '玺佳星辰爱情系列情侣款', './src/img/wb7.png', '699.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000108', '个性双针创意概念情侣表', './src/img/wb8.png', '799.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000109', '触感磁力钢带腕表', './src/img/wb9.png', '3880.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');
INSERT INTO `goods` VALUES ('0000000110', '瞳孔系列机械腕表', './src/img/wb1.png', '6999.00', '1', '11', '腕表', '抢灰色,咖啡色', '26,27,28', '2017-11-15 19:40:17');

-- ----------------------------
-- Table structure for history
-- ----------------------------
DROP TABLE IF EXISTS `history`;
CREATE TABLE `history` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `keyword` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=170 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of history
-- ----------------------------

-- ----------------------------
-- Table structure for list
-- ----------------------------
DROP TABLE IF EXISTS `list`;
CREATE TABLE `list` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `ordernumber` int(11) DEFAULT NULL COMMENT '订单号',
  `goodsid` int(11) DEFAULT NULL COMMENT '商品id',
  `username` varchar(255) DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `status` varchar(255) DEFAULT '1',
  `addTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of list
-- ----------------------------
INSERT INTO `list` VALUES ('0000000024', '639787', '2', '付玲', '9', '4', '2017-11-17 16:26:08');
INSERT INTO `list` VALUES ('0000000025', '910456', '4', '付玲', '8', '4', '2017-11-17 16:26:08');
INSERT INTO `list` VALUES ('0000000026', '40590', '13', '付玲', '2', '4', '2017-11-17 16:26:08');
INSERT INTO `list` VALUES ('0000000027', '524978', '24', '付玲', '8', '4', '2017-11-17 16:26:08');
INSERT INTO `list` VALUES ('0000000028', '392097', '6', '张三', '1', '3', '2017-11-17 16:04:24');

-- ----------------------------
-- Table structure for register
-- ----------------------------
DROP TABLE IF EXISTS `register`;
CREATE TABLE `register` (
  `id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `addTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of register
-- ----------------------------
INSERT INTO `register` VALUES ('0000000008', '张三', 'f123456', '0c78ac42a93368a7303bf8d8808d19ec', '2017-11-17 15:53:26');
INSERT INTO `register` VALUES ('0000000002', '徐翠', 'x123456', '', '2017-11-16 20:05:27');
INSERT INTO `register` VALUES ('0000000007', '付玲', 'f123456', 'd721f6cdef64480da5c3bea61bdc07d1', '2017-11-17 11:26:21');
SET FOREIGN_KEY_CHECKS=1;
