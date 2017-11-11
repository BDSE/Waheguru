# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.13)
# Database: myDB
# Generation Time: 2017-07-25 03:22:00 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table createtableInsertIntoTest
# ------------------------------------------------------------

DROP TABLE IF EXISTS `createtableInsertIntoTest`;

CREATE TABLE `createtableInsertIntoTest` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL DEFAULT '',
  `ipAddress` varchar(20) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `createtableInsertIntoTest` WRITE;
/*!40000 ALTER TABLE `createtableInsertIntoTest` DISABLE KEYS */;

INSERT INTO `createtableInsertIntoTest` (`id`, `email`, `ipAddress`)
VALUES
	(1,'amar.sjsu@gmail.com','122.3.4.5'),
	(4,'afigurski38@disqus.com','31.158.211.91'),
	(5,'asallinger45@redcross.org','213.189.72.160'),
	(7,'jwilson3y@yellowbook.com','101.199.12.105'),
	(8,'callbut0@techcrunch.com','64.106.73.163');

/*!40000 ALTER TABLE `createtableInsertIntoTest` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table EmploymentHistory
# ------------------------------------------------------------

DROP TABLE IF EXISTS `EmploymentHistory`;

CREATE TABLE `EmploymentHistory` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `personId` int(5) NOT NULL,
  `jobTitle` varchar(50) NOT NULL,
  `company` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `personId` (`personId`),
  CONSTRAINT `employmenthistory_ibfk_1` FOREIGN KEY (`personId`) REFERENCES `Person` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `EmploymentHistory` WRITE;
/*!40000 ALTER TABLE `EmploymentHistory` DISABLE KEYS */;

INSERT INTO `EmploymentHistory` (`id`, `personId`, `jobTitle`, `company`)
VALUES
	(1,1,'web app developer','apple'),
	(2,1,'front end engg','travix'),
	(3,2,'Hr manager',NULL),
	(4,3,'Hr manager',NULL),
	(5,17,'Hr manager',NULL),
	(6,41,'Hr manager',NULL),
	(7,44,'Hr manager',NULL),
	(8,55,'Hr manager',NULL),
	(9,61,'Hr manager',NULL),
	(10,70,'Hr manager',NULL),
	(11,76,'Hr manager',NULL),
	(12,78,'Hr manager',NULL);

/*!40000 ALTER TABLE `EmploymentHistory` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table JavaTest
# ------------------------------------------------------------

DROP TABLE IF EXISTS `JavaTest`;

CREATE TABLE `JavaTest` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



# Dump of table Person
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Person`;

CREATE TABLE `Person` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ipaddress` tinytext NOT NULL,
  `gender` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Person` WRITE;
/*!40000 ALTER TABLE `Person` DISABLE KEYS */;

INSERT INTO `Person` (`id`, `first_name`, `last_name`, `email`, `ipaddress`, `gender`)
VALUES
	(1,'Amar','Sandhu','amar.sjsu@gmail.com','64.106.73.163','Male'),
	(2,'Zerk','Naisby','znaisby1@cafepress.com','92.78.27.162','Male'),
	(3,'Zorah','Laphorn','zlaphorn2@narod.ru','225.235.116.206','Female'),
	(4,'Dougy','Devany','ddevany3@photobucket.com','198.148.168.193','Male'),
	(5,'Trina','Galletly','tgalletly4@edublogs.org','192.231.134.120','Female'),
	(6,'Phillip','Rosenvasser','prosenvasser5@photobucket.com','76.20.56.239','Male'),
	(7,'Robinetta','Marritt','rmarritt6@hp.com','178.181.235.108','Female'),
	(8,'Godart','Simonnet','gsimonnet7@sphinn.com','250.108.26.32','Male'),
	(9,'De witt','Bathurst','dbathurst8@reuters.com','165.253.26.21','Male'),
	(10,'Trina','Guinery','tguinery9@illinois.edu','248.183.15.25','Female'),
	(11,'Shurwood','Ghilardini','sghilardinia@ifeng.com','11.230.105.66','Male'),
	(12,'Travers','Gaynesford','tgaynesfordb@ustream.tv','217.90.180.232','Male'),
	(13,'Cthrine','Patershall','cpatershallc@booking.com','164.61.167.122','Female'),
	(14,'Lennard','Goulding','lgouldingd@scientificamerican.com','245.111.169.176','Male'),
	(15,'Flynn','Yabsley','fyabsleye@naver.com','57.22.228.156','Male'),
	(16,'Maryrose','Shulver','mshulverf@amazon.de','6.202.230.117','Female'),
	(17,'Alyda','Swinn','aswinng@ucla.edu','10.208.212.185','Female'),
	(18,'Piper','Amdohr','pamdohrh@tumblr.com','170.145.122.249','Female'),
	(19,'Emanuel','Harkins','eharkinsi@gmpg.org','103.217.28.62','Male'),
	(20,'Randi','Rosenshine','rrosenshinej@pcworld.com','169.41.172.239','Female'),
	(21,'Kasey','Clohisey','kclohiseyk@alexa.com','187.191.182.77','Female'),
	(22,'Cicely','Stubbings','cstubbingsl@wikipedia.org','192.245.74.138','Female'),
	(23,'Lonnie','Malsher','lmalsherm@imdb.com','6.186.127.168','Female'),
	(24,'Dag','Stevings','dstevingsn@geocities.jp','84.230.49.144','Male'),
	(25,'Hayden','Plett','hpletto@hao123.com','50.151.86.211','Male'),
	(26,'Ignace','Lutzmann','ilutzmannp@wikispaces.com','6.143.160.50','Male'),
	(27,'Giulietta','Grennan','ggrennanq@un.org','229.134.250.16','Female'),
	(28,'Jard','Morando','jmorandor@gnu.org','208.98.231.174','Male'),
	(29,'Ketty','Combe','kcombes@digg.com','111.31.25.120','Female'),
	(30,'Eleanore','Holde','eholdet@unc.edu','188.99.24.252','Female'),
	(31,'Rosamund','Jenkison','rjenkisonu@si.edu','108.89.31.43','Female'),
	(32,'Josephina','Hallstone','jhallstonev@com.com','13.119.76.89','Female'),
	(33,'Gustaf','Mulloch','gmullochw@princeton.edu','28.99.17.210','Male'),
	(34,'Robbie','Jacobbe','rjacobbex@google.pl','244.237.249.98','Female'),
	(35,'Esther','Cawthron','ecawthrony@aboutads.info','249.161.146.144','Female'),
	(36,'Mildred','Undy','mundyz@prnewswire.com','244.177.191.203','Female'),
	(37,'Sybil','Gout','sgout10@moonfruit.com','93.214.64.13','Female'),
	(38,'Engelbert','Mabbett','emabbett11@wufoo.com','162.88.179.1','Male'),
	(39,'Gillan','Eustanch','geustanch12@hud.gov','245.207.116.15','Female'),
	(40,'Carey','Giacobilio','cgiacobilio13@nbcnews.com','253.26.23.75','Female'),
	(41,'Aloin','De Clairmont','adeclairmont14@woothemes.com','158.173.18.51','Male'),
	(42,'Jule','Straker','jstraker15@plala.or.jp','38.109.203.37','Male'),
	(43,'Nathanael','Giraudel','ngiraudel16@ucoz.com','221.114.79.244','Male'),
	(44,'Arlina','Cullnean','acullnean17@google.ru','197.221.32.139','Female'),
	(45,'Wilmette','Marval','wmarval18@hubpages.com','144.165.115.242','Female'),
	(46,'Becki','Dykas','bdykas19@issuu.com','111.20.199.67','Female'),
	(47,'Nomi','Manntschke','nmanntschke1a@blogs.com','160.22.97.38','Female'),
	(48,'Ellwood','Moriarty','emoriarty1b@behance.net','217.7.246.77','Male'),
	(49,'Samuel','Genney','sgenney1c@ox.ac.uk','170.130.128.229','Male'),
	(50,'Kermie','Cranke','kcranke1d@symantec.com','81.147.85.219','Male'),
	(51,'Wye','Jackett','wjackett1e@multiply.com','51.135.248.99','Male'),
	(52,'Winnah','Bourner','wbourner1f@wix.com','218.220.113.204','Female'),
	(53,'Lisette','McCrostie','lmccrostie1g@ox.ac.uk','14.5.247.42','Female'),
	(54,'Laurella','Foli','lfoli1h@latimes.com','147.202.53.54','Female'),
	(55,'Alfred','Collingridge','acollingridge1i@i2i.jp','234.216.208.179','Male'),
	(56,'Carling','Symmers','csymmers1j@xing.com','24.4.232.171','Male'),
	(57,'Isiahi','Dawkins','idawkins1k@nasa.gov','163.97.35.162','Male'),
	(58,'Kailey','McDuall','kmcduall1l@slate.com','190.95.181.138','Female'),
	(59,'Chevy','Shortt','cshortt1m@newsvine.com','121.226.158.80','Male'),
	(60,'Mendy','Wood','mwood1n@msn.com','49.141.39.9','Male'),
	(61,'August','Spatoni','aspatoni1o@si.edu','101.151.98.75','Male'),
	(62,'Rory','Moorman','rmoorman1p@elegantthemes.com','230.2.114.52','Female'),
	(63,'Roseanna','Bromley','rbromley1q@e-recht24.de','21.152.239.210','Female'),
	(64,'Salvador','Byart','sbyart1r@topsy.com','40.33.108.0','Male'),
	(65,'Charmaine','Morston','cmorston1s@goo.gl','104.50.204.159','Female'),
	(66,'Ward','Buck','wbuck1t@nhs.uk','169.192.43.43','Male'),
	(67,'Kippie','Philpott','kphilpott1u@wufoo.com','183.75.247.3','Male'),
	(68,'Michael','Mitford','mmitford1v@europa.eu','246.206.50.82','Male'),
	(69,'Brod','Bangley','bbangley1w@devhub.com','130.54.90.57','Male'),
	(70,'Andreana','Pattie','apattie1x@woothemes.com','62.173.151.179','Female'),
	(71,'Harlin','Spruce','hspruce1y@zdnet.com','219.60.11.110','Male'),
	(72,'Bank','Gander','bgander1z@amazon.com','156.28.91.69','Male'),
	(73,'Mariana','Tallboy','mtallboy20@wix.com','127.175.147.3','Female'),
	(74,'Cristabel','Fearnyough','cfearnyough21@uol.com.br','24.36.162.230','Female'),
	(75,'Deirdre','Keedwell','dkeedwell22@umn.edu','158.31.81.48','Female'),
	(76,'Augusta','Claypole','aclaypole23@nifty.com','132.20.162.67','Female'),
	(77,'Blayne','Dilleway','bdilleway24@instagram.com','48.107.53.220','Male'),
	(78,'Alfreda','Morrice','amorrice25@xinhuanet.com','30.232.137.251','Female'),
	(79,'Fairfax','Cornwall','fcornwall26@mit.edu','215.126.51.210','Male'),
	(80,'Elnar','Mosey','emosey27@yale.edu','45.251.64.156','Male'),
	(81,'Dinah','Calverley','dcalverley28@live.com','251.141.72.196','Female'),
	(82,'Sandye','Darrigoe','sdarrigoe29@harvard.edu','25.215.76.20','Female'),
	(83,'Jocelyn','Pfaffel','jpfaffel2a@cam.ac.uk','24.8.155.240','Female'),
	(84,'Hilliard','Seabrook','hseabrook2b@hubpages.com','63.193.174.39','Male'),
	(85,'Annalee','D\'Onise','adonise2c@usda.gov','35.17.116.74','Female'),
	(86,'Neville','Redshaw','nredshaw2d@cnet.com','62.139.180.69','Male'),
	(87,'Averil','Savary','asavary2e@blogtalkradio.com','61.30.235.87','Male'),
	(88,'Tades','Hartin','thartin2f@soup.io','162.134.207.164','Male'),
	(89,'Faber','Hopewell','fhopewell2g@oaic.gov.au','82.202.166.61','Male'),
	(90,'Myrtice','Rawstorn','mrawstorn2h@netvibes.com','127.14.56.28','Female'),
	(91,'Devonna','Brave','dbrave2i@scientificamerican.com','235.119.186.217','Female'),
	(92,'Herculie','Heal','hheal2j@shinystat.com','86.125.208.26','Male'),
	(93,'Adelaide','Tinto','atinto2k@xrea.com','9.97.161.161','Female'),
	(94,'Vivian','Browning','vbrowning2l@ameblo.jp','53.158.173.194','Female'),
	(95,'Grata','Pullin','gpullin2m@answers.com','57.142.163.255','Female'),
	(96,'Micky','Rhymer','mrhymer2n@360.cn','66.217.203.213','Female'),
	(97,'Kendall','Sancias','ksancias2o@alibaba.com','177.193.233.75','Male'),
	(98,'Shir','Hanssmann','shanssmann2p@ox.ac.uk','161.182.92.249','Female'),
	(99,'Neysa','Waud','nwaud2q@123-reg.co.uk','92.224.242.176','Female'),
	(100,'Letty','Brundale','lbrundale2r@tripod.com','11.255.178.134','Female'),
	(101,'Delainey','Kleinholz','dkleinholz2s@merriam-webster.com','10.206.207.140','Male'),
	(102,'Crosby','Ruste','cruste2t@nih.gov','102.216.39.12','Male'),
	(103,'Luca','Turton','lturton2u@unblog.fr','20.180.173.112','Male'),
	(104,'Kameko','Nizet','knizet2v@lulu.com','242.140.4.180','Female'),
	(105,'Kai','Washington','kwashington2w@cbc.ca','222.255.136.74','Female'),
	(106,'Ester','Rustich','erustich2x@ihg.com','58.19.222.179','Female'),
	(107,'Marvin','Coggles','mcoggles2y@nsw.gov.au','11.161.31.1','Male'),
	(108,'Janessa','Cestard','jcestard2z@marriott.com','200.23.167.34','Female'),
	(109,'Randell','Ohms','rohms30@hostgator.com','189.191.228.2','Male'),
	(110,'Beverie','Pyrton','bpyrton31@gnu.org','127.216.138.155','Female'),
	(111,'Cristiano','Puffett','cpuffett32@ebay.co.uk','137.12.121.155','Male'),
	(112,'Innis','Jakeman','ijakeman33@dropbox.com','29.61.180.90','Male'),
	(113,'Sayres','Spadotto','sspadotto34@prweb.com','80.108.109.174','Male'),
	(114,'Jecho','Durrand','jdurrand35@multiply.com','68.42.88.64','Male'),
	(115,'Sybil','Lacroux','slacroux36@abc.net.au','221.232.29.85','Female'),
	(116,'Baudoin','Joliffe','bjoliffe37@vkontakte.ru','254.215.237.185','Male'),
	(117,'Andie','Figurski','afigurski38@disqus.com','31.158.211.91','Male'),
	(118,'Marta','Lahy','mlahy39@umn.edu','122.131.235.75','Female'),
	(119,'Kane','Bartkowiak','kbartkowiak3a@patch.com','31.143.231.156','Male'),
	(120,'Richie','Inger','ringer3b@sina.com.cn','114.203.241.102','Male'),
	(121,'Rafaelia','Ghiroldi','rghiroldi3c@themeforest.net','171.160.251.239','Female'),
	(122,'Rich','Mawhinney','rmawhinney3d@deviantart.com','3.71.69.154','Male'),
	(123,'Neely','Scadden','nscadden3e@jimdo.com','81.100.61.173','Female'),
	(124,'Loree','Bruckmann','lbruckmann3f@jugem.jp','111.104.142.29','Female'),
	(125,'Clare','Cotterrill','ccotterrill3g@wordpress.org','238.29.147.238','Female'),
	(126,'Adrea','Betteson','abetteson3h@ehow.com','172.101.255.191','Female'),
	(127,'Aristotle','Fright','afright3i@com.com','247.105.88.75','Male'),
	(128,'Marjorie','Dionsetto','mdionsetto3j@bandcamp.com','236.136.43.52','Female'),
	(129,'Hastie','Arangy','harangy3k@hhs.gov','248.235.227.247','Male'),
	(130,'Raimondo','Cust','rcust3l@mediafire.com','235.225.161.37','Male'),
	(131,'Hobard','McGeechan','hmcgeechan3m@tuttocitta.it','38.191.23.183','Male'),
	(132,'Samuel','Meatyard','smeatyard3n@java.com','13.73.141.27','Male'),
	(133,'Felicia','Cruddas','fcruddas3o@cdbaby.com','183.191.129.146','Female'),
	(134,'Tabina','Hutable','thutable3p@jiathis.com','125.198.216.16','Female'),
	(135,'Ariel','Blackborne','ablackborne3q@census.gov','247.200.198.156','Female'),
	(136,'Davey','Geldard','dgeldard3r@uol.com.br','186.19.165.65','Male'),
	(137,'Hersh','Linnock','hlinnock3s@washingtonpost.com','92.45.200.51','Male'),
	(138,'Nealon','Badman','nbadman3t@miibeian.gov.cn','203.128.225.191','Male'),
	(139,'Waylan','Giacopini','wgiacopini3u@umn.edu','209.189.215.180','Male'),
	(140,'Donnie','Asif','dasif3v@wp.com','80.29.178.221','Female'),
	(141,'Gavra','Schruur','gschruur3w@usatoday.com','172.31.134.185','Female'),
	(142,'Saundra','Akett','sakett3x@gravatar.com','136.210.102.87','Male'),
	(143,'Juana','Wilson','jwilson3y@yellowbook.com','101.199.12.105','Female'),
	(144,'Ring','Fussen','rfussen3z@myspace.com','51.88.173.106','Male'),
	(145,'Madella','Bailie','mbailie40@twitpic.com','218.12.111.104','Female'),
	(146,'Neilla','Roadnight','nroadnight41@trellian.com','34.214.32.91','Female'),
	(147,'Hedvig','Coventry','hcoventry42@ezinearticles.com','60.255.138.128','Female'),
	(148,'Gerri','Studdeard','gstuddeard43@com.com','72.123.157.53','Female'),
	(149,'Cassondra','Cyster','ccyster44@forbes.com','199.174.128.24','Female'),
	(150,'Andie','Sallinger','asallinger45@redcross.org','213.189.72.160','Male'),
	(151,'Bevan','Garza','bgarza46@weather.com','246.78.118.186','Male'),
	(152,'Joela','Zipsell','jzipsell47@oaic.gov.au','148.84.161.104','Female'),
	(153,'Wilek','Libbie','wlibbie48@nature.com','98.38.119.186','Male'),
	(154,'Mohandis','Tuminelli','mtuminelli49@slideshare.net','38.159.245.227','Male'),
	(155,'Allix','Giorgione','agiorgione4a@php.net','46.120.35.49','Female'),
	(156,'Dix','Alejandri','dalejandri4b@cnet.com','250.228.194.129','Female'),
	(157,'Elwood','Burgott','eburgott4c@about.com','189.144.130.213','Male'),
	(158,'Padraig','Douthwaite','pdouthwaite4d@umn.edu','139.117.166.192','Male'),
	(159,'Faber','Damrell','fdamrell4e@yandex.ru','8.239.153.133','Male'),
	(160,'Locke','Matelaitis','lmatelaitis4f@webnode.com','114.33.122.147','Male'),
	(161,'Carver','Rimer','crimer4g@gravatar.com','111.212.236.98','Male'),
	(162,'Allan','Boylan','aboylan4h@accuweather.com','56.59.39.58','Male'),
	(163,'Duff','Baccus','dbaccus4i@ed.gov','212.137.237.217','Male'),
	(164,'Ximenez','Stollwerk','xstollwerk4j@bing.com','221.236.77.150','Male'),
	(165,'Riannon','Luney','rluney4k@naver.com','128.112.104.57','Female'),
	(166,'Correna','Georgiev','cgeorgiev4l@shutterfly.com','21.246.18.217','Female'),
	(167,'Leena','Jackling','ljackling4m@dropbox.com','8.137.45.157','Female'),
	(168,'Netty','Ollerhead','nollerhead4n@delicious.com','85.206.204.253','Female'),
	(169,'Mignonne','Peeke-Vout','mpeekevout4o@google.ca','230.38.165.188','Female'),
	(170,'Sunshine','Scamadine','sscamadine4p@xrea.com','67.177.75.73','Female'),
	(171,'Jessy','Kennelly','jkennelly4q@foxnews.com','122.22.23.150','Female'),
	(172,'Rodi','Copeman','rcopeman4r@abc.net.au','213.80.159.136','Female'),
	(173,'Gunther','Pettitt','gpettitt4s@msu.edu','136.71.240.254','Male'),
	(174,'Bibby','Breeds','bbreeds4t@cloudflare.com','198.147.23.90','Female'),
	(175,'Holly','De Bischof','hdebischof4u@netvibes.com','250.150.196.157','Female'),
	(176,'Cloe','Dumberell','cdumberell4v@spiegel.de','61.96.71.43','Female'),
	(177,'Roldan','Redier','rredier4w@stanford.edu','189.199.11.160','Male'),
	(178,'Rafe','Minichi','rminichi4x@baidu.com','109.37.53.36','Male'),
	(179,'Von','Bier','vbier4y@dagondesign.com','48.88.191.52','Male'),
	(180,'Siusan','Braunston','sbraunston4z@devhub.com','45.29.90.70','Female'),
	(181,'Timothy','Sousa','tsousa50@ucoz.ru','232.66.207.161','Male'),
	(182,'Niccolo','Mundle','nmundle51@histats.com','238.138.75.221','Male'),
	(183,'Sibelle','Amber','samber52@newsvine.com','187.146.23.226','Female'),
	(184,'Isac','Hands','ihands53@sakura.ne.jp','152.155.42.227','Male'),
	(185,'Kathrine','Markie','kmarkie54@state.gov','142.151.64.61','Female'),
	(186,'Micaela','Garrand','mgarrand55@bbc.co.uk','131.143.71.41','Female'),
	(187,'Annamaria','Plevin','aplevin56@hatena.ne.jp','56.18.28.66','Female'),
	(188,'Sandy','Tremblet','stremblet57@seattletimes.com','135.130.155.80','Male'),
	(189,'Friederike','Fulleylove','ffulleylove58@tripod.com','13.163.137.89','Female'),
	(190,'Melisse','Sneath','msneath59@ucoz.com','25.87.148.246','Female'),
	(191,'Lily','Deeson','ldeeson5a@techcrunch.com','98.110.43.202','Female'),
	(192,'Elton','Fidele','efidele5b@icq.com','243.32.51.25','Male'),
	(193,'Antonetta','Hibbart','ahibbart5c@youtu.be','101.114.170.203','Female'),
	(194,'Byrann','Candish','bcandish5d@youku.com','68.228.217.143','Male'),
	(195,'Hubert','Ringer','hringer5e@google.pl','75.60.186.146','Male'),
	(196,'Ephrayim','Bucklan','ebucklan5f@1und1.de','221.23.146.140','Male'),
	(197,'Claire','Hulles','chulles5g@goo.ne.jp','27.114.83.42','Male'),
	(198,'Annabella','Lys','alys5h@goo.ne.jp','204.41.170.41','Female'),
	(199,'Pooh','Zuanazzi','pzuanazzi5i@symantec.com','79.5.206.82','Male'),
	(200,'Esra','Treven','etreven5j@goo.ne.jp','182.94.242.10','Male'),
	(201,'testtrigger','sandhu','testemail','127.0.0.2','male'),
	(202,'testtrigger2','sandhu','testemail','127.0.0.2','male'),
	(203,'test trigger 3','sandhu saab','shableen@gmail.com','2323.445.3.5','male');

/*!40000 ALTER TABLE `Person` ENABLE KEYS */;
UNLOCK TABLES;

DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `insertTriggerOnPerson` AFTER INSERT ON `Person` FOR EACH ROW BEGIN
INSERT INTO `PersonLog` (`FirstName`, `email`, `gender`, `enrolledDate`) 
VALUES (new.`first_name`, new.`email`,new.`gender`, now());
END */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;


# Dump of table PersonBackup
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PersonBackup`;

CREATE TABLE `PersonBackup` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ipaddress` tinytext NOT NULL,
  `gender` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `PersonBackup` WRITE;
/*!40000 ALTER TABLE `PersonBackup` DISABLE KEYS */;

INSERT INTO `PersonBackup` (`id`, `first_name`, `last_name`, `email`, `ipaddress`, `gender`)
VALUES
	(1,'Amar','Sandhu','amar.sjsu@gmail.com','64.106.73.163','Male'),
	(2,'Zerk','Naisby','znaisby1@cafepress.com','92.78.27.162','Male'),
	(3,'Zorah','Laphorn','zlaphorn2@narod.ru','225.235.116.206','Female'),
	(4,'Dougy','Devany','ddevany3@photobucket.com','198.148.168.193','Male'),
	(5,'Trina','Galletly','tgalletly4@edublogs.org','192.231.134.120','Female'),
	(6,'Phillip','Rosenvasser','prosenvasser5@photobucket.com','76.20.56.239','Male'),
	(7,'Robinetta','Marritt','rmarritt6@hp.com','178.181.235.108','Female'),
	(8,'Godart','Simonnet','gsimonnet7@sphinn.com','250.108.26.32','Male'),
	(9,'De witt','Bathurst','dbathurst8@reuters.com','165.253.26.21','Male'),
	(10,'Trina','Guinery','tguinery9@illinois.edu','248.183.15.25','Female'),
	(11,'Shurwood','Ghilardini','sghilardinia@ifeng.com','11.230.105.66','Male'),
	(12,'Travers','Gaynesford','tgaynesfordb@ustream.tv','217.90.180.232','Male'),
	(13,'Cthrine','Patershall','cpatershallc@booking.com','164.61.167.122','Female'),
	(14,'Lennard','Goulding','lgouldingd@scientificamerican.com','245.111.169.176','Male'),
	(15,'Flynn','Yabsley','fyabsleye@naver.com','57.22.228.156','Male'),
	(16,'Maryrose','Shulver','mshulverf@amazon.de','6.202.230.117','Female'),
	(17,'Alyda','Swinn','aswinng@ucla.edu','10.208.212.185','Female'),
	(18,'Piper','Amdohr','pamdohrh@tumblr.com','170.145.122.249','Female'),
	(19,'Emanuel','Harkins','eharkinsi@gmpg.org','103.217.28.62','Male'),
	(20,'Randi','Rosenshine','rrosenshinej@pcworld.com','169.41.172.239','Female'),
	(21,'Kasey','Clohisey','kclohiseyk@alexa.com','187.191.182.77','Female'),
	(22,'Cicely','Stubbings','cstubbingsl@wikipedia.org','192.245.74.138','Female'),
	(23,'Lonnie','Malsher','lmalsherm@imdb.com','6.186.127.168','Female'),
	(24,'Dag','Stevings','dstevingsn@geocities.jp','84.230.49.144','Male'),
	(25,'Hayden','Plett','hpletto@hao123.com','50.151.86.211','Male'),
	(26,'Ignace','Lutzmann','ilutzmannp@wikispaces.com','6.143.160.50','Male'),
	(27,'Giulietta','Grennan','ggrennanq@un.org','229.134.250.16','Female'),
	(28,'Jard','Morando','jmorandor@gnu.org','208.98.231.174','Male'),
	(29,'Ketty','Combe','kcombes@digg.com','111.31.25.120','Female'),
	(30,'Eleanore','Holde','eholdet@unc.edu','188.99.24.252','Female'),
	(31,'Rosamund','Jenkison','rjenkisonu@si.edu','108.89.31.43','Female'),
	(32,'Josephina','Hallstone','jhallstonev@com.com','13.119.76.89','Female'),
	(33,'Gustaf','Mulloch','gmullochw@princeton.edu','28.99.17.210','Male'),
	(34,'Robbie','Jacobbe','rjacobbex@google.pl','244.237.249.98','Female'),
	(35,'Esther','Cawthron','ecawthrony@aboutads.info','249.161.146.144','Female'),
	(36,'Mildred','Undy','mundyz@prnewswire.com','244.177.191.203','Female'),
	(37,'Sybil','Gout','sgout10@moonfruit.com','93.214.64.13','Female'),
	(38,'Engelbert','Mabbett','emabbett11@wufoo.com','162.88.179.1','Male'),
	(39,'Gillan','Eustanch','geustanch12@hud.gov','245.207.116.15','Female'),
	(40,'Carey','Giacobilio','cgiacobilio13@nbcnews.com','253.26.23.75','Female'),
	(41,'Aloin','De Clairmont','adeclairmont14@woothemes.com','158.173.18.51','Male'),
	(42,'Jule','Straker','jstraker15@plala.or.jp','38.109.203.37','Male'),
	(43,'Nathanael','Giraudel','ngiraudel16@ucoz.com','221.114.79.244','Male'),
	(44,'Arlina','Cullnean','acullnean17@google.ru','197.221.32.139','Female'),
	(45,'Wilmette','Marval','wmarval18@hubpages.com','144.165.115.242','Female'),
	(46,'Becki','Dykas','bdykas19@issuu.com','111.20.199.67','Female'),
	(47,'Nomi','Manntschke','nmanntschke1a@blogs.com','160.22.97.38','Female'),
	(48,'Ellwood','Moriarty','emoriarty1b@behance.net','217.7.246.77','Male'),
	(49,'Samuel','Genney','sgenney1c@ox.ac.uk','170.130.128.229','Male'),
	(50,'Kermie','Cranke','kcranke1d@symantec.com','81.147.85.219','Male'),
	(51,'Wye','Jackett','wjackett1e@multiply.com','51.135.248.99','Male'),
	(52,'Winnah','Bourner','wbourner1f@wix.com','218.220.113.204','Female'),
	(53,'Lisette','McCrostie','lmccrostie1g@ox.ac.uk','14.5.247.42','Female'),
	(54,'Laurella','Foli','lfoli1h@latimes.com','147.202.53.54','Female'),
	(55,'Alfred','Collingridge','acollingridge1i@i2i.jp','234.216.208.179','Male'),
	(56,'Carling','Symmers','csymmers1j@xing.com','24.4.232.171','Male'),
	(57,'Isiahi','Dawkins','idawkins1k@nasa.gov','163.97.35.162','Male'),
	(58,'Kailey','McDuall','kmcduall1l@slate.com','190.95.181.138','Female'),
	(59,'Chevy','Shortt','cshortt1m@newsvine.com','121.226.158.80','Male'),
	(60,'Mendy','Wood','mwood1n@msn.com','49.141.39.9','Male'),
	(61,'August','Spatoni','aspatoni1o@si.edu','101.151.98.75','Male'),
	(62,'Rory','Moorman','rmoorman1p@elegantthemes.com','230.2.114.52','Female'),
	(63,'Roseanna','Bromley','rbromley1q@e-recht24.de','21.152.239.210','Female'),
	(64,'Salvador','Byart','sbyart1r@topsy.com','40.33.108.0','Male'),
	(65,'Charmaine','Morston','cmorston1s@goo.gl','104.50.204.159','Female'),
	(66,'Ward','Buck','wbuck1t@nhs.uk','169.192.43.43','Male'),
	(67,'Kippie','Philpott','kphilpott1u@wufoo.com','183.75.247.3','Male'),
	(68,'Michael','Mitford','mmitford1v@europa.eu','246.206.50.82','Male'),
	(69,'Brod','Bangley','bbangley1w@devhub.com','130.54.90.57','Male'),
	(70,'Andreana','Pattie','apattie1x@woothemes.com','62.173.151.179','Female'),
	(71,'Harlin','Spruce','hspruce1y@zdnet.com','219.60.11.110','Male'),
	(72,'Bank','Gander','bgander1z@amazon.com','156.28.91.69','Male'),
	(73,'Mariana','Tallboy','mtallboy20@wix.com','127.175.147.3','Female'),
	(74,'Cristabel','Fearnyough','cfearnyough21@uol.com.br','24.36.162.230','Female'),
	(75,'Deirdre','Keedwell','dkeedwell22@umn.edu','158.31.81.48','Female'),
	(76,'Augusta','Claypole','aclaypole23@nifty.com','132.20.162.67','Female'),
	(77,'Blayne','Dilleway','bdilleway24@instagram.com','48.107.53.220','Male'),
	(78,'Alfreda','Morrice','amorrice25@xinhuanet.com','30.232.137.251','Female'),
	(79,'Fairfax','Cornwall','fcornwall26@mit.edu','215.126.51.210','Male'),
	(80,'Elnar','Mosey','emosey27@yale.edu','45.251.64.156','Male'),
	(81,'Dinah','Calverley','dcalverley28@live.com','251.141.72.196','Female'),
	(82,'Sandye','Darrigoe','sdarrigoe29@harvard.edu','25.215.76.20','Female'),
	(83,'Jocelyn','Pfaffel','jpfaffel2a@cam.ac.uk','24.8.155.240','Female'),
	(84,'Hilliard','Seabrook','hseabrook2b@hubpages.com','63.193.174.39','Male'),
	(85,'Annalee','D\'Onise','adonise2c@usda.gov','35.17.116.74','Female'),
	(86,'Neville','Redshaw','nredshaw2d@cnet.com','62.139.180.69','Male'),
	(87,'Averil','Savary','asavary2e@blogtalkradio.com','61.30.235.87','Male'),
	(88,'Tades','Hartin','thartin2f@soup.io','162.134.207.164','Male'),
	(89,'Faber','Hopewell','fhopewell2g@oaic.gov.au','82.202.166.61','Male'),
	(90,'Myrtice','Rawstorn','mrawstorn2h@netvibes.com','127.14.56.28','Female'),
	(91,'Devonna','Brave','dbrave2i@scientificamerican.com','235.119.186.217','Female'),
	(92,'Herculie','Heal','hheal2j@shinystat.com','86.125.208.26','Male'),
	(93,'Adelaide','Tinto','atinto2k@xrea.com','9.97.161.161','Female'),
	(94,'Vivian','Browning','vbrowning2l@ameblo.jp','53.158.173.194','Female'),
	(95,'Grata','Pullin','gpullin2m@answers.com','57.142.163.255','Female'),
	(96,'Micky','Rhymer','mrhymer2n@360.cn','66.217.203.213','Female'),
	(97,'Kendall','Sancias','ksancias2o@alibaba.com','177.193.233.75','Male'),
	(98,'Shir','Hanssmann','shanssmann2p@ox.ac.uk','161.182.92.249','Female'),
	(99,'Neysa','Waud','nwaud2q@123-reg.co.uk','92.224.242.176','Female'),
	(100,'Letty','Brundale','lbrundale2r@tripod.com','11.255.178.134','Female'),
	(101,'Delainey','Kleinholz','dkleinholz2s@merriam-webster.com','10.206.207.140','Male'),
	(102,'Crosby','Ruste','cruste2t@nih.gov','102.216.39.12','Male'),
	(103,'Luca','Turton','lturton2u@unblog.fr','20.180.173.112','Male'),
	(104,'Kameko','Nizet','knizet2v@lulu.com','242.140.4.180','Female'),
	(105,'Kai','Washington','kwashington2w@cbc.ca','222.255.136.74','Female'),
	(106,'Ester','Rustich','erustich2x@ihg.com','58.19.222.179','Female'),
	(107,'Marvin','Coggles','mcoggles2y@nsw.gov.au','11.161.31.1','Male'),
	(108,'Janessa','Cestard','jcestard2z@marriott.com','200.23.167.34','Female'),
	(109,'Randell','Ohms','rohms30@hostgator.com','189.191.228.2','Male'),
	(110,'Beverie','Pyrton','bpyrton31@gnu.org','127.216.138.155','Female'),
	(111,'Cristiano','Puffett','cpuffett32@ebay.co.uk','137.12.121.155','Male'),
	(112,'Innis','Jakeman','ijakeman33@dropbox.com','29.61.180.90','Male'),
	(113,'Sayres','Spadotto','sspadotto34@prweb.com','80.108.109.174','Male'),
	(114,'Jecho','Durrand','jdurrand35@multiply.com','68.42.88.64','Male'),
	(115,'Sybil','Lacroux','slacroux36@abc.net.au','221.232.29.85','Female'),
	(116,'Baudoin','Joliffe','bjoliffe37@vkontakte.ru','254.215.237.185','Male'),
	(117,'Andie','Figurski','afigurski38@disqus.com','31.158.211.91','Male'),
	(118,'Marta','Lahy','mlahy39@umn.edu','122.131.235.75','Female'),
	(119,'Kane','Bartkowiak','kbartkowiak3a@patch.com','31.143.231.156','Male'),
	(120,'Richie','Inger','ringer3b@sina.com.cn','114.203.241.102','Male'),
	(121,'Rafaelia','Ghiroldi','rghiroldi3c@themeforest.net','171.160.251.239','Female'),
	(122,'Rich','Mawhinney','rmawhinney3d@deviantart.com','3.71.69.154','Male'),
	(123,'Neely','Scadden','nscadden3e@jimdo.com','81.100.61.173','Female'),
	(124,'Loree','Bruckmann','lbruckmann3f@jugem.jp','111.104.142.29','Female'),
	(125,'Clare','Cotterrill','ccotterrill3g@wordpress.org','238.29.147.238','Female'),
	(126,'Adrea','Betteson','abetteson3h@ehow.com','172.101.255.191','Female'),
	(127,'Aristotle','Fright','afright3i@com.com','247.105.88.75','Male'),
	(128,'Marjorie','Dionsetto','mdionsetto3j@bandcamp.com','236.136.43.52','Female'),
	(129,'Hastie','Arangy','harangy3k@hhs.gov','248.235.227.247','Male'),
	(130,'Raimondo','Cust','rcust3l@mediafire.com','235.225.161.37','Male'),
	(131,'Hobard','McGeechan','hmcgeechan3m@tuttocitta.it','38.191.23.183','Male'),
	(132,'Samuel','Meatyard','smeatyard3n@java.com','13.73.141.27','Male'),
	(133,'Felicia','Cruddas','fcruddas3o@cdbaby.com','183.191.129.146','Female'),
	(134,'Tabina','Hutable','thutable3p@jiathis.com','125.198.216.16','Female'),
	(135,'Ariel','Blackborne','ablackborne3q@census.gov','247.200.198.156','Female'),
	(136,'Davey','Geldard','dgeldard3r@uol.com.br','186.19.165.65','Male'),
	(137,'Hersh','Linnock','hlinnock3s@washingtonpost.com','92.45.200.51','Male'),
	(138,'Nealon','Badman','nbadman3t@miibeian.gov.cn','203.128.225.191','Male'),
	(139,'Waylan','Giacopini','wgiacopini3u@umn.edu','209.189.215.180','Male'),
	(140,'Donnie','Asif','dasif3v@wp.com','80.29.178.221','Female'),
	(141,'Gavra','Schruur','gschruur3w@usatoday.com','172.31.134.185','Female'),
	(142,'Saundra','Akett','sakett3x@gravatar.com','136.210.102.87','Male'),
	(143,'Juana','Wilson','jwilson3y@yellowbook.com','101.199.12.105','Female'),
	(144,'Ring','Fussen','rfussen3z@myspace.com','51.88.173.106','Male'),
	(145,'Madella','Bailie','mbailie40@twitpic.com','218.12.111.104','Female'),
	(146,'Neilla','Roadnight','nroadnight41@trellian.com','34.214.32.91','Female'),
	(147,'Hedvig','Coventry','hcoventry42@ezinearticles.com','60.255.138.128','Female'),
	(148,'Gerri','Studdeard','gstuddeard43@com.com','72.123.157.53','Female'),
	(149,'Cassondra','Cyster','ccyster44@forbes.com','199.174.128.24','Female'),
	(150,'Andie','Sallinger','asallinger45@redcross.org','213.189.72.160','Male'),
	(151,'Bevan','Garza','bgarza46@weather.com','246.78.118.186','Male'),
	(152,'Joela','Zipsell','jzipsell47@oaic.gov.au','148.84.161.104','Female'),
	(153,'Wilek','Libbie','wlibbie48@nature.com','98.38.119.186','Male'),
	(154,'Mohandis','Tuminelli','mtuminelli49@slideshare.net','38.159.245.227','Male'),
	(155,'Allix','Giorgione','agiorgione4a@php.net','46.120.35.49','Female'),
	(156,'Dix','Alejandri','dalejandri4b@cnet.com','250.228.194.129','Female'),
	(157,'Elwood','Burgott','eburgott4c@about.com','189.144.130.213','Male'),
	(158,'Padraig','Douthwaite','pdouthwaite4d@umn.edu','139.117.166.192','Male'),
	(159,'Faber','Damrell','fdamrell4e@yandex.ru','8.239.153.133','Male'),
	(160,'Locke','Matelaitis','lmatelaitis4f@webnode.com','114.33.122.147','Male'),
	(161,'Carver','Rimer','crimer4g@gravatar.com','111.212.236.98','Male'),
	(162,'Allan','Boylan','aboylan4h@accuweather.com','56.59.39.58','Male'),
	(163,'Duff','Baccus','dbaccus4i@ed.gov','212.137.237.217','Male'),
	(164,'Ximenez','Stollwerk','xstollwerk4j@bing.com','221.236.77.150','Male'),
	(165,'Riannon','Luney','rluney4k@naver.com','128.112.104.57','Female'),
	(166,'Correna','Georgiev','cgeorgiev4l@shutterfly.com','21.246.18.217','Female'),
	(167,'Leena','Jackling','ljackling4m@dropbox.com','8.137.45.157','Female'),
	(168,'Netty','Ollerhead','nollerhead4n@delicious.com','85.206.204.253','Female'),
	(169,'Mignonne','Peeke-Vout','mpeekevout4o@google.ca','230.38.165.188','Female'),
	(170,'Sunshine','Scamadine','sscamadine4p@xrea.com','67.177.75.73','Female'),
	(171,'Jessy','Kennelly','jkennelly4q@foxnews.com','122.22.23.150','Female'),
	(172,'Rodi','Copeman','rcopeman4r@abc.net.au','213.80.159.136','Female'),
	(173,'Gunther','Pettitt','gpettitt4s@msu.edu','136.71.240.254','Male'),
	(174,'Bibby','Breeds','bbreeds4t@cloudflare.com','198.147.23.90','Female'),
	(175,'Holly','De Bischof','hdebischof4u@netvibes.com','250.150.196.157','Female'),
	(176,'Cloe','Dumberell','cdumberell4v@spiegel.de','61.96.71.43','Female'),
	(177,'Roldan','Redier','rredier4w@stanford.edu','189.199.11.160','Male'),
	(178,'Rafe','Minichi','rminichi4x@baidu.com','109.37.53.36','Male'),
	(179,'Von','Bier','vbier4y@dagondesign.com','48.88.191.52','Male'),
	(180,'Siusan','Braunston','sbraunston4z@devhub.com','45.29.90.70','Female'),
	(181,'Timothy','Sousa','tsousa50@ucoz.ru','232.66.207.161','Male'),
	(182,'Niccolo','Mundle','nmundle51@histats.com','238.138.75.221','Male'),
	(183,'Sibelle','Amber','samber52@newsvine.com','187.146.23.226','Female'),
	(184,'Isac','Hands','ihands53@sakura.ne.jp','152.155.42.227','Male'),
	(185,'Kathrine','Markie','kmarkie54@state.gov','142.151.64.61','Female'),
	(186,'Micaela','Garrand','mgarrand55@bbc.co.uk','131.143.71.41','Female'),
	(187,'Annamaria','Plevin','aplevin56@hatena.ne.jp','56.18.28.66','Female'),
	(188,'Sandy','Tremblet','stremblet57@seattletimes.com','135.130.155.80','Male'),
	(189,'Friederike','Fulleylove','ffulleylove58@tripod.com','13.163.137.89','Female'),
	(190,'Melisse','Sneath','msneath59@ucoz.com','25.87.148.246','Female'),
	(191,'Lily','Deeson','ldeeson5a@techcrunch.com','98.110.43.202','Female'),
	(192,'Elton','Fidele','efidele5b@icq.com','243.32.51.25','Male'),
	(193,'Antonetta','Hibbart','ahibbart5c@youtu.be','101.114.170.203','Female'),
	(194,'Byrann','Candish','bcandish5d@youku.com','68.228.217.143','Male'),
	(195,'Hubert','Ringer','hringer5e@google.pl','75.60.186.146','Male'),
	(196,'Ephrayim','Bucklan','ebucklan5f@1und1.de','221.23.146.140','Male'),
	(197,'Claire','Hulles','chulles5g@goo.ne.jp','27.114.83.42','Male'),
	(198,'Annabella','Lys','alys5h@goo.ne.jp','204.41.170.41','Female'),
	(199,'Pooh','Zuanazzi','pzuanazzi5i@symantec.com','79.5.206.82','Male'),
	(200,'Esra','Treven','etreven5j@goo.ne.jp','182.94.242.10','Male');

/*!40000 ALTER TABLE `PersonBackup` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table PersonLog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `PersonLog`;

CREATE TABLE `PersonLog` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) NOT NULL,
  `email` varchar(70) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `enrolledDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `PersonLog` WRITE;
/*!40000 ALTER TABLE `PersonLog` DISABLE KEYS */;

INSERT INTO `PersonLog` (`id`, `FirstName`, `email`, `gender`, `enrolledDate`)
VALUES
	(1,'testtrigger','testemail','male','2017-07-22 16:36:22'),
	(2,'testtrigger2','testemail','male','2017-07-22 17:02:46'),
	(3,'test trigger 3','shableen@gmail.com','male','2017-07-24 19:22:43');

/*!40000 ALTER TABLE `PersonLog` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
