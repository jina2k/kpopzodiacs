DROP TABLE IF EXISTS idolZodiacs;
DROP TABLE IF EXISTS idols;

SHOW GLOBAL VARIABLES LIKE 'local_infile';
SET GLOBAL local_infile = 'ON';
SHOW GLOBAL VARIABLES LIKE 'local_infile';

CREATE TABLE idols (
	stageName varchar(100) NOT NULL,
	birthday DATE NOT NULL,
	url varchar(200) NOT NULL,
	PRIMARY KEY (url)
);

CREATE TABLE idolZodiacs (
	url varchar(200) NOT NULL,
	zodiac varchar(100) NOT NULL,
	PRIMARY KEY(url),
	FOREIGN KEY(url) REFERENCES idols(url)
);

SET GLOBAL local_infile = 'ON';

LOAD DATA INFILE '..\\..\\htdocs\\kpopzodiac\\database\\kpop.csv'
INTO TABLE idols
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n' (stageName, birthday, url);



INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Aries" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-03-21') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-04-19') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Taurus" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-04-20') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-05-20') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Gemini" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-05-21') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-06-21') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Cancer" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-06-22') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-07-22') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Leo" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-07-23') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-08-22') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Virgo" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-08-23') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-09-22') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Libra" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-09-23') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-10-23') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Scorpio" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-10-24') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-11-21') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Sagittarius" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-11-22') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-12-21') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Capricorn" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-12-22') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-12-31') as DATETIME)
    OR
    idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-01-01') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-01-19') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Aquarius" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-01-20') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-02-18') as DATETIME);

INSERT INTO idolZodiacs(url, zodiac)
SELECT
	idols.url,
	"Pisces" as zodiac
FROM
	idols
WHERE
	idols.birthday BETWEEN CAST(CONCAT(year(idols.birthday), '-02-19') as DATETIME)
	AND CAST(CONCAT(year(idols.birthday), '-03-20') as DATETIME);
