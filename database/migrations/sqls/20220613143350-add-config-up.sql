CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE config
(
    id uuid NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
    name character varying(255) NOT NULL,
    data json NOT NULL,
    ref_id varchar,
    ref_uuid uuid,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now()
)