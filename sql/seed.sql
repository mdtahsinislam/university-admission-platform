

-- C:\Web-Development\MyNextjs Journey\tripgraphy\sql\seed.sql
create table universities (
  id serial primary key,
  name text,
  country text,
  degree text,
  tuition int,
  min_gpa float,
  min_ielts float
);

-- insert into universities (name, country, degree, tuition, min_gpa, min_ielts) values
-- ('Harvard University','USA','Bachelor',40000,3.5,7.0),
-- ('Oxford University','UK','Master',35000,3.4,7.5),
-- ('Toronto University','Canada','Bachelor',30000,3.0,6.5);


insert into universities (name, country, degree, tuition, min_gpa, min_ielts) values
('Harvard University','USA','Bachelor',40000,3.5,7.0),
('Oxford University','UK','Master',35000,3.4,7.5),
('Toronto University','Canada','Bachelor',30000,3.0,6.5),
('MIT','USA','Master',42000,3.6,7.5),
('Stanford University','USA','Bachelor',41000,3.5,7.0),
('University of Cambridge','UK','Master',36000,3.4,7.5),
('University of British Columbia','Canada','Bachelor',29000,3.0,6.5),
('McGill University','Canada','Master',31000,3.2,6.5),
('Yale University','USA','Bachelor',39000,3.4,7.0),
('Imperial College London','UK','Master',37000,3.5,7.0);
