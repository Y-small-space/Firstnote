/* 
    1.数据库的基本概念  
        1.1 什么是数据库
            数据库(database）是用来组织、存储和管理数据的仓库。 
            
                当今世界是一个充满着数据的互联网世界，充斥看大量的数据。
            数据的来源有很多，比如出行记录、消费记录、浏览的网页、发送的消息等等。
            除了文本类型的数据，图像、音乐、声音都是数据。
                为了方便管理互联网世界中的数据，就有了数据库管理系統的概念(简称：数据库)。
            用户可以对数据库中的数据进行新增、查询、更新、删除等操作。

        1.2 常见的数据库及分类
            市面上的数据库有很多种，最常见的数据库有如下几个：
            •MySQL数据库（目前使用最广泛、流行度最高的开源免费数据库;Community + Enterprise)
            •Oracle 数据库（收费）
            •SQL Server 数据库（收费）
            •Mongodb 数据库 (Community + Enterprise)

                其中，MysQL、 Oracle、SQL Server 属于传统型数据库（又叫做：关系型数据库 或 SQL 数据库），
            这三者的设计理念相同，用法比较类似。
                而 Mongodb 属于新型数据库（又叫做：非关系型数据库 或 NoSQL 数据库），它在一定程度上弥补了传统型
            数据库的缺陷。
        
        1.3 传统型数据库的数据组织结构
            1.数据的组织结构：指的就是数据以什么样的结构进行存储。
            2.传统型数据库的数据组织结构
        在传统型数据库中，数据的组织结构分为数据库(database)、数据表(table)、数据行(row)、字段(field)这 4 大部分组成。
            3.实际开发中库、表、行、字段的关系
        1).在实际项目开发中，一般情况下，每个项目都对应独立的数据库。
        2).不同的数据，要存储到数据库的不同表中，例如：用户数据存储到 users 表中，图书数据存储到books表中。
        3).每个表中具体存储哪些信息，由字段来决定，例奶：我们可以为 users 表设计 id、username、password 这3个
字段。
        4).表中的行，代表每一条具体的数据

*/
        
/* 
    使用 SQL 管理数据库
        1.什么是 SQL
            SQL (英文全称：Structured Query Language) 是结构化查询语言，
            专门用来访问和处理数据库的编程语言。能够让我们以编程的形式，操作数据库里面的数据。
            三个关键点：
                1).SQL是一门数据库编程语言
                2).使用SQL语言编写出来的代码，叫做 SQL语句
                3).SQL语言只能在关系型数据库中使用（例如 MySQL、Oracle. SQL Server)。非关系型数据库（ Mongodb)
            不支持 SQL 语言
        2.SQL 能做什么
            1).从数据库中查询数据
            2).向数据库中插入新的数据
            3).更新数据库中的数据
            4).从数据库删除数据
            5).可以创建新数据库
            6).可在数据库中创建新表
            7).可在数据库中创建存储过程、视图
            8).etc
        3.SQL 的学习目标
            重点掌握如何使用 SQL 从数据表中：
                查问数据(select）、插入款据(insert into)、更新数据(update)、删除数据（delete)
            
            额外需要掌握的4种 SQL 浯法：
                where条件、 and 和  or 运算符、 order by 排序、 count(*)函数
 */

            