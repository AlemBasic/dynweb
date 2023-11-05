# Use the official PostgreSQL image as the base image
FROM postgres

# Set the environment variable for the PostgreSQL password
ENV POSTGRES_USER=user
ENV POSTGRES_HOST=localhost
ENV POSTGRES_PASSWORD 1814
ENV POSTGRES_DB oblig

COPY start.sql /docker-entrypoint-initdb.d/
COPY insert.sql /docker-entrypoint-initdb.d/

# Expose the default PostgreSQL port
EXPOSE 5432
