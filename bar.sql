--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE comments (
    id integer NOT NULL,
    gamer_id integer,
    game_id integer,
    comments character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE comments OWNER TO "RickV";

--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: RickV
--

CREATE SEQUENCE comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE comments_id_seq OWNER TO "RickV";

--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: RickV
--

ALTER SEQUENCE comments_id_seq OWNED BY comments.id;


--
-- Name: gamers; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE gamers (
    id integer NOT NULL,
    gamer_tag text,
    gamer_icon text,
    gamer_pw text,
    gamer_quote text,
    "timestamp" timestamp without time zone
);


ALTER TABLE gamers OWNER TO "RickV";

--
-- Name: gamers_id_seq; Type: SEQUENCE; Schema: public; Owner: RickV
--

CREATE SEQUENCE gamers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE gamers_id_seq OWNER TO "RickV";

--
-- Name: gamers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: RickV
--

ALTER SEQUENCE gamers_id_seq OWNED BY gamers.id;


--
-- Name: games; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE games (
    id integer NOT NULL,
    console character varying(255),
    game_name character varying(255),
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE games OWNER TO "RickV";

--
-- Name: games_id_seq; Type: SEQUENCE; Schema: public; Owner: RickV
--

CREATE SEQUENCE games_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE games_id_seq OWNER TO "RickV";

--
-- Name: games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: RickV
--

ALTER SEQUENCE games_id_seq OWNED BY games.id;


--
-- Name: knex_migrations; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE knex_migrations (
    id integer NOT NULL,
    name character varying(255),
    batch integer,
    migration_time timestamp with time zone
);


ALTER TABLE knex_migrations OWNER TO "RickV";

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: RickV
--

CREATE SEQUENCE knex_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE knex_migrations_id_seq OWNER TO "RickV";

--
-- Name: knex_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: RickV
--

ALTER SEQUENCE knex_migrations_id_seq OWNED BY knex_migrations.id;


--
-- Name: knex_migrations_lock; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE knex_migrations_lock (
    is_locked integer
);


ALTER TABLE knex_migrations_lock OWNER TO "RickV";

--
-- Name: likes; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE likes (
    id integer NOT NULL,
    gamer_id integer,
    game_id integer,
    likes boolean,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE likes OWNER TO "RickV";

--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: RickV
--

CREATE SEQUENCE likes_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE likes_id_seq OWNER TO "RickV";

--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: RickV
--

ALTER SEQUENCE likes_id_seq OWNED BY likes.id;


--
-- Name: ratings; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE ratings (
    id integer NOT NULL,
    gamer_id integer,
    game_id integer,
    rating integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE ratings OWNER TO "RickV";

--
-- Name: ratings_id_seq; Type: SEQUENCE; Schema: public; Owner: RickV
--

CREATE SEQUENCE ratings_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE ratings_id_seq OWNER TO "RickV";

--
-- Name: ratings_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: RickV
--

ALTER SEQUENCE ratings_id_seq OWNED BY ratings.id;


--
-- Name: user_games; Type: TABLE; Schema: public; Owner: RickV
--

CREATE TABLE user_games (
    id integer NOT NULL,
    gamer_id integer,
    game_id integer,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);


ALTER TABLE user_games OWNER TO "RickV";

--
-- Name: user_games_id_seq; Type: SEQUENCE; Schema: public; Owner: RickV
--

CREATE SEQUENCE user_games_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE user_games_id_seq OWNER TO "RickV";

--
-- Name: user_games_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: RickV
--

ALTER SEQUENCE user_games_id_seq OWNED BY user_games.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY comments ALTER COLUMN id SET DEFAULT nextval('comments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY gamers ALTER COLUMN id SET DEFAULT nextval('gamers_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY games ALTER COLUMN id SET DEFAULT nextval('games_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY knex_migrations ALTER COLUMN id SET DEFAULT nextval('knex_migrations_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY likes ALTER COLUMN id SET DEFAULT nextval('likes_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY ratings ALTER COLUMN id SET DEFAULT nextval('ratings_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY user_games ALTER COLUMN id SET DEFAULT nextval('user_games_id_seq'::regclass);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY comments (id, gamer_id, game_id, comments, created_at, updated_at) FROM stdin;
1	4	0	please work	\N	\N
2	4	2	hi	\N	\N
3	4	1	hi	\N	\N
4	4	0	bye	\N	\N
5	4	0	bye bye	\N	\N
6	4	1	please work	\N	\N
7	4	1	please please work	\N	\N
8	4	1	please please please work	\N	\N
9	4	0	does this work	\N	\N
10	4	0	please work	\N	\N
11	4	1	does this work at all	\N	\N
12	4	0	hi	\N	\N
13	4	1		\N	\N
14	4	0	HI THERE!!!	\N	\N
15	4	1	Hi THERE!@@!!!!	\N	\N
16	4	1	HIII	\N	\N
17	4	2	How are you	\N	\N
18	14	7	Man your battle stations!	\N	\N
19	14	5	YOOOOLLLLOOOOO	\N	\N
20	15	5	I loooove this game!	\N	\N
21	15	0	uuu	\N	\N
22	15	5	uuu	\N	\N
23	15	8	ggggg	\N	\N
24	15	3	mmmmm	\N	\N
\.


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: RickV
--

SELECT pg_catalog.setval('comments_id_seq', 24, true);


--
-- Data for Name: gamers; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY gamers (id, gamer_tag, gamer_icon, gamer_pw, gamer_quote, "timestamp") FROM stdin;
4	3	http://findicons.com/files/icons/1700/2d/512/game.png	4	5	\N
11	2	http://findicons.com/files/icons/75/i_like_buttons_3a/512/cute_ball_games.png	2	2	\N
14	peach007	http://findicons.com/files/icons/75/i_like_buttons_3a/512/cute_ball_games.png	peachy	Everyone tells me dont get kidnapped	\N
15	TimmyGunnz	https://cdn4.iconfinder.com/data/icons/smashicons-game-flat/60/42_-_The_Triforce_Flat-512.png	qweasd	SAY WHAT AGAIN!!	\N
16	test	http://66.media.tumblr.com/tumblr_lvaj4kSscM1r6ewz4o1_540.png	test	testy test	\N
\.


--
-- Name: gamers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: RickV
--

SELECT pg_catalog.setval('gamers_id_seq', 21, true);


--
-- Data for Name: games; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY games (id, console, game_name, created_at, updated_at) FROM stdin;
1	NES	Super Mario 3	\N	\N
2	NES	Mike Tyson's Punchout	\N	\N
3	NES	Contra	\N	\N
5	SNES	Super Mario Kart	\N	\N
4	SNES	Street Fighter II Turbo	\N	\N
6	SNES	StarFox	\N	\N
7	NES64	Super Smash Bros.	\N	\N
8	NES64	NBA Jam	\N	\N
9	NES64	Mario Party 3	\N	\N
\.


--
-- Name: games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: RickV
--

SELECT pg_catalog.setval('games_id_seq', 1, false);


--
-- Data for Name: knex_migrations; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY knex_migrations (id, name, batch, migration_time) FROM stdin;
1	20161004142649_gamers.js	1	2016-10-04 15:15:39.626-06
2	20161004143148_games.js	1	2016-10-04 15:15:39.639-06
3	20161004143156_ratings.js	1	2016-10-04 15:15:39.649-06
4	20161004143206_likes.js	1	2016-10-04 15:15:39.656-06
5	20161004143213_comments.js	1	2016-10-04 15:15:39.663-06
6	20161007104539_user_games.js	2	2016-10-07 10:55:54.475-06
\.


--
-- Name: knex_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: RickV
--

SELECT pg_catalog.setval('knex_migrations_id_seq', 6, true);


--
-- Data for Name: knex_migrations_lock; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY knex_migrations_lock (is_locked) FROM stdin;
0
\.


--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY likes (id, gamer_id, game_id, likes, created_at, updated_at) FROM stdin;
\.


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: RickV
--

SELECT pg_catalog.setval('likes_id_seq', 1, false);


--
-- Data for Name: ratings; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY ratings (id, gamer_id, game_id, rating, created_at, updated_at) FROM stdin;
2	11	2	5	\N	\N
3	11	3	1	\N	\N
1	11	1	4	\N	\N
4	4	3	4	\N	\N
5	4	2	2	\N	\N
6	4	1	4	\N	\N
7	11	6	3	\N	\N
8	14	5	2	\N	\N
9	14	7	5	\N	\N
10	14	3	5	\N	\N
11	15	5	5	\N	\N
12	15	6	3	\N	\N
13	15	7	5	\N	\N
14	15	8	5	\N	\N
15	15	3	1	\N	\N
17	16	2	2	\N	\N
16	16	7	3	\N	\N
\.


--
-- Name: ratings_id_seq; Type: SEQUENCE SET; Schema: public; Owner: RickV
--

SELECT pg_catalog.setval('ratings_id_seq', 17, true);


--
-- Data for Name: user_games; Type: TABLE DATA; Schema: public; Owner: RickV
--

COPY user_games (id, gamer_id, game_id, created_at, updated_at) FROM stdin;
11	11	1	\N	\N
12	11	2	\N	\N
13	11	3	\N	\N
14	11	5	\N	\N
15	11	4	\N	\N
16	11	6	\N	\N
17	4	1	\N	\N
18	4	2	\N	\N
19	4	3	\N	\N
20	4	7	\N	\N
21	4	8	\N	\N
22	4	9	\N	\N
24	14	3	\N	\N
25	14	7	\N	\N
26	14	5	\N	\N
27	15	5	\N	\N
28	15	6	\N	\N
29	15	7	\N	\N
30	15	8	\N	\N
31	15	3	\N	\N
32	15	2	\N	\N
33	16	2	\N	\N
34	16	7	\N	\N
35	16	6	\N	\N
\.


--
-- Name: user_games_id_seq; Type: SEQUENCE SET; Schema: public; Owner: RickV
--

SELECT pg_catalog.setval('user_games_id_seq', 35, true);


--
-- Name: comments_pkey; Type: CONSTRAINT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: games_pkey; Type: CONSTRAINT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY games
    ADD CONSTRAINT games_pkey PRIMARY KEY (id);


--
-- Name: knex_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY knex_migrations
    ADD CONSTRAINT knex_migrations_pkey PRIMARY KEY (id);


--
-- Name: likes_pkey; Type: CONSTRAINT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: ratings_pkey; Type: CONSTRAINT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY ratings
    ADD CONSTRAINT ratings_pkey PRIMARY KEY (id);


--
-- Name: user_games_pkey; Type: CONSTRAINT; Schema: public; Owner: RickV
--

ALTER TABLE ONLY user_games
    ADD CONSTRAINT user_games_pkey PRIMARY KEY (id);


--
-- Name: public; Type: ACL; Schema: -; Owner: RickV
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM "RickV";
GRANT ALL ON SCHEMA public TO "RickV";
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

