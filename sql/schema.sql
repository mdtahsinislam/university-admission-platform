create table applications (
  id serial primary key,
  university_id int references universities(id),
  full_name text,
  email text,
  phone text,
  gpa float,
  ielts float,
  created_at timestamp default now()
);
