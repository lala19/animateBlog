/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.20-log : Database - animateblog
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`animateblog` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `animateblog`;

/*Table structure for table `comment` */

DROP TABLE IF EXISTS `comment`;

CREATE TABLE `comment` (
  `c_id` int(11) NOT NULL AUTO_INCREMENT,
  `c_con` varchar(200) DEFAULT NULL,
  `c_name` varchar(50) DEFAULT NULL,
  `c_email` varchar(200) DEFAULT NULL,
  `e_id` int(11) DEFAULT NULL,
  `c_time` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`c_id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

/*Data for the table `comment` */

insert  into `comment`(`c_id`,`c_con`,`c_name`,`c_email`,`e_id`,`c_time`) values (1,'不错','刘处长','aw@qq.com',87,'2018/03/22'),(2,'可以','刘处长','liu@wq.com',95,'2018/3/22'),(3,'111','liuchuzhang','66@a.s',95,'2018/3/22'),(4,'sadaasd','皇天赐','ass@asa.com',95,'2018/3/22'),(5,'asd','asd','asd@as.asd',95,'2018/3/22'),(6,'asdasda','asd','asd@as.asd',95,'2018/3/22'),(7,'asdasda','asd','asd@as.asd',95,'2018/3/22'),(8,'asdasda','asd','asd@as.asd',95,'2018/3/22'),(9,'daad','asdasd','asd@as.ads',95,'2018/3/22'),(10,'assda','asdas','asa@asda.as',95,'2018/3/22'),(11,'asdasd','asdas','asda@sda.com',95,'2018/3/22'),(12,'asdad','asda','sdasd@asd.asa',95,'2018/3/22'),(13,'asdad','asda','sdasd@asd.asa',95,'2018/3/22'),(14,'sadas','asdasd','asdasd@asda.sad',95,'2018/3/22'),(15,'asdasd','卢本伟','666@66a.sa',95,'2018/3/22'),(16,'asdsada','鹿哥','sas@as.com',95,'2018/3/22'),(17,'这文章写得好','刘处长','liuchuzhang@mail.com',88,'2018/3/22'),(18,'这文章写得好','刘处长','liuchuzhang@mail.com',88,'2018/3/22'),(19,'这文章写得好','刘处长','liuchuzhang@mail.com',88,'2018/3/22'),(20,'这文章写得好','刘处长','liuchuzhang@mail.com',88,'2018/3/22'),(21,'不错写得好','刘处长','hello@world.com',88,'2018/3/22'),(22,'马老师好帅啊,作为电竞吴亦凡表示李时珍的皮','卢本伟','lubenwei@mail.com',106,'2018/3/23'),(23,'帅的嘛,就不谈了','大司马','dasima@mail.com',106,'2018/3/23'),(24,'骚猪发来贺电,大司马是真滴帅','PDD','dasima@mail.com',106,'2018/3/23'),(25,'马老C好帅啊','德云色','de@mail.com',106,'2018/3/23'),(26,'马老C,充钱你就能变强','马化腾','ma@mail.com',106,'2018/3/23'),(27,'怎么说,马老C这么帅,多捞啊','韦神','we@mail.com',106,'2018/3/23'),(28,'大家好我是黄天赐,英文名叫yellow day ci,法文名叫dayci,马老c很帅','yellow day ci','ye@mail.com',106,'2018/3/23'),(31,'asdasd','asddasda','asdasd@qq.com',106,'2018/3/29');

/*Table structure for table `essayinfo` */

DROP TABLE IF EXISTS `essayinfo`;

CREATE TABLE `essayinfo` (
  `e_id` int(11) NOT NULL AUTO_INCREMENT,
  `e_title` varchar(100) NOT NULL,
  `e_describe` varchar(500) NOT NULL,
  `e_content` varchar(100) NOT NULL,
  `e_img` varchar(200) DEFAULT NULL,
  `u_name` varchar(50) DEFAULT NULL,
  `e_time` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`e_id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8;

/*Data for the table `essayinfo` */

insert  into `essayinfo`(`e_id`,`e_title`,`e_describe`,`e_content`,`e_img`,`u_name`,`e_time`) values (88,'dfds','dsfdsf','1521530064682.txt','images/essayimg/1521530064533-liuchuzhang.cn_cert.jpg','liuchuzhang','2018/03/20'),(89,'sadas','asdasd','1521530146865.txt','images/essayimg/1521530146758-liuchuzhang.cn_cert.jpg','liuchuzhang','2018/03/20'),(94,'卢本伟牛逼','卢本伟是真的牛逼','1521530146865.txt','images/essayimg/1521530146758-liuchuzhang.cn_cert.jpg','liuchuzhang','2017/02/20'),(95,'卢本伟牛逼','卢本伟是真的牛逼','1521530146865.txt','images/essayimg/1521530146758-liuchuzhang.cn_cert.jpg','liuchuzhang','2017/03/20'),(106,'大司马真滴帅','大司马是真滴帅,大司马是真滴帅,大司马是真滴帅,大司马是真滴帅.','1521767188018.txt','images/essayimg/1521767187895-dsm.jpg','liuweimin','2018/3/23'),(107,'芜湖大司马','芜湖大司马，本名韩金龙，安徽芜湖人 ，前CC战队教练  ，2013年G级联赛带领CC战队打败OMG战队后名声大噪 ，现为游戏主播。','1521768120345.txt','images/essayimg/1521768120215-dsm.jpg','liuweimin','2018/3/23'),(108,'刘谋 (PDD) 电子竞技选手','刘谋，1991年4月17日出生，英雄联盟项目电子竞技选手，游戏ID为PDD，前NGG、EHOME战队LOL分部队长，后转会并退役于Invictus Gaming.LOL分部，IG战队上单选手。','1521768501042.txt','images/essayimg/1521768500944-pdd.jpg','liuweimin','2018/3/23'),(109,'test','tse','1521768821725.txt','images/essayimg/1521768821605-dsm.jpg','liuweimin','2018/3/23'),(110,'sadasd','sadasd','1521768847167.txt','images/essayimg/1521768847074-dsm.jpg','liuweimin','2018/3/23'),(111,'as','asd','1521768892810.txt','images/essayimg/1521768892669-pdd.jpg','liuweimin','2018/3/23'),(112,'wef','ewf','1521769126841.txt','images/essayimg/1521769126730-dsm.jpg','liuweimin','2018/3/23');

/*Table structure for table `userinfo` */

DROP TABLE IF EXISTS `userinfo`;

CREATE TABLE `userinfo` (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_name` varchar(30) NOT NULL,
  `u_pwd` varchar(20) NOT NULL,
  `u_email` varchar(50) NOT NULL,
  `u_head` varchar(300) DEFAULT NULL,
  `u_introduce` varchar(400) DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

/*Data for the table `userinfo` */

insert  into `userinfo`(`u_id`,`u_name`,`u_pwd`,`u_email`,`u_head`,`u_introduce`) values (1,'liuchuzhang','liuchuzhang','qq@qq.com','images/userimg/1522303875834-IMG_6092.JPG','大家好,我是刘处长，我不想成为一个庸俗的人。十年百年后，当我们死去，质疑我们的人同样死去，后人看到的是裹足不前、原地打转的你，还是一直奔跑、走到远方的我啊？aaa'),(2,'username','liuweimin','username@as.com',NULL,NULL),(3,'liuweimin','liuweimin','liuweimin@mail.com','images/userimg/1521766942008-dsm.jpg','大家好我是刘处长'),(4,'lisi1234','12345678','123@qq.com',NULL,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
