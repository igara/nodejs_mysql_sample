# docker起動

```
docker-compose up -d
```

# DB作成

```
docker-compose run nodejs sh
cd sample
node create_database.js
```

# Table作成

```
docker-compose run nodejs sh
cd sample
node create_table.js
```

# Insert実験

```
docker-compose run nodejs sh
cd sample
node inserts/json_table.js
```