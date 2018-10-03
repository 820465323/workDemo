create table p_product(
	pid integer primary key,
	pname varchar2(20) not null,
	pprice number(10,5) not null,
	porign varchar2(20) not null
);
create sequence p_p start with 1;
drop table p_product;
insert into p_product values(p_p.nextval,'苹果','28.8','阿富汗')
select * from p_product

create table c_car(
	cid integer primary key,
	cprice number(20,5) not null,
	cbrand varchar2(100) not null,
	ctime Date
);
insert into c_car values(cc.nextval,258888.88,'上海大众-全新朗逸',sysdate);
create sequence cc start with 1;
drop table c_car;
select * from(select c.*,rownum r from c_car c)where r>=1 and r<=20 order by cprice desc