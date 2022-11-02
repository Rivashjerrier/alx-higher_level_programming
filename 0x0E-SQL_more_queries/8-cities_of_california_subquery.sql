-- lists all the cities of california in the database
-- results stored in ascending order by cities.id
SELECT id, name
FROM cities
WHERE state_d = SELECT id FROM states WHERE name = "California"
ORDER BY id;
