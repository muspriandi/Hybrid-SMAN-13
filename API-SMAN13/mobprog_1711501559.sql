# Host: localhost  (Version 5.5.5-10.1.38-MariaDB)
# Date: 2019-12-24 16:07:39
# Generator: MySQL-Front 6.0  (Build 2.20)


#
# Structure for table "matapelajaran"
#

CREATE TABLE `matapelajaran` (
  `kdmapel` varchar(5) NOT NULL DEFAULT '',
  `nama_mapel` varchar(30) NOT NULL DEFAULT '',
  `kkm` int(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`kdmapel`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "matapelajaran"
#

INSERT INTO `matapelajaran` VALUES ('BHS01','Bahasa Indonesia',78),('BHS02','Bahasa Inggris',75),('IPA01','Biologi',78),('IPA02','Kimia',78),('IPS01','Sejarah',78);

#
# Structure for table "siswa"
#

CREATE TABLE `siswa` (
  `nis` int(11) NOT NULL DEFAULT '0',
  `nama` varchar(30) NOT NULL DEFAULT '',
  `alamat` text NOT NULL,
  `jen_kel` enum('Laki-laki','Perempuan') NOT NULL DEFAULT 'Laki-laki',
  `userid` varchar(20) NOT NULL,
  `userpass` varchar(255) NOT NULL DEFAULT '',
  `status` enum('siswa','admin') NOT NULL DEFAULT 'siswa',
  PRIMARY KEY (`nis`,`userid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

#
# Data for table "siswa"
#

INSERT INTO `siswa` VALUES (12345,'12345','Ciledug, Tangerang, Banten, 15151','Laki-laki','12345','12345','siswa'),(123456789,'Testing','Ciledug, Tangerang, Banten, 15151','Laki-laki','test','123','siswa'),(1711500000,'Test Nama','Test Alamat','Perempuan','171150000','123','siswa'),(1711501559,'Mus Priandi','Ciledug','Laki-laki','mus','123','admin');

#
# Structure for table "rapor"
#

CREATE TABLE `rapor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nis` int(11) NOT NULL DEFAULT '0',
  `kdmapel` varchar(5) NOT NULL DEFAULT '',
  `pengetahuan` int(3) NOT NULL DEFAULT '0',
  `praktik` int(3) NOT NULL DEFAULT '0',
  `sikap` int(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `nis` (`nis`),
  KEY `kdmapel` (`kdmapel`),
  CONSTRAINT `rapor_ibfk_1` FOREIGN KEY (`nis`) REFERENCES `siswa` (`nis`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rapor_ibfk_2` FOREIGN KEY (`kdmapel`) REFERENCES `matapelajaran` (`kdmapel`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

#
# Data for table "rapor"
#

INSERT INTO `rapor` VALUES (2,1711500000,'IPA01',80,90,100),(4,1711500000,'BHS01',88,90,92),(6,1711500000,'BHS02',77,80,90),(8,1711500000,'IPA02',86,87,88),(9,123456789,'BHS01',88,88,88),(10,123456789,'IPA01',90,91,92),(11,1711500000,'IPS01',90,91,92);
