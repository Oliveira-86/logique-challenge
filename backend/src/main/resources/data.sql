INSERT INTO tb_url (original_url, short_link, creation_date, expiration_date) VALUES ('http://www.google.com', 'google', TIMESTAMP WITHOUT TIME ZONE '2020-07-14T10:00:00Z',TIMESTAMP WITHOUT TIME ZONE '2020-07-14T12:00:00Z');
INSERT INTO tb_url (original_url, short_link, creation_date, expiration_date) VALUES ('http://www.facebook.com', 'facebook', TIMESTAMP WITHOUT TIME ZONE '2020-10-15T10:00:00Z', TIMESTAMP WITHOUT TIME ZONE '2020-10-15T12:00:00Z' );
INSERT INTO tb_url (original_url, short_link, creation_date, expiration_date) VALUES ('http://www.instagram.com', 'instagram', TIMESTAMP WITHOUT TIME ZONE '2021-09-06T23:29:00Z', TIMESTAMP WITHOUT TIME ZONE '2021-09-07T00:00:00Z');

INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Alex', 'Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (first_name, last_name, email, password) VALUES ('Maria', 'Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_OPERATOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_ADMIN');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2); 