CREATE_MERGE_TREE_TABLE_QUERY = """CREATE TABLE `{0}` ON '{1}' 
({2}) 
ENGINE = MergeTree()
ORDER_BY = {3}
"""

CREATE_LOCAL_TABLE_TEST = """
CREATE TABLE airbyte_connection_test_table_xx_local ON CLUSTER {0} (
  date DateTime,
  user_id UInt32,
  bytes Float64
) ENGINE=MergeTree()
PARTITION BY toYYYYMM(date)
ORDER BY (user_id, date)
"""

CREATE_DIST_TABLE_TEST = """
CREATE TABLE airbyte_connection_test_table_xx on cluster {0} AS airbyte_connection_test_table_xx_local
ENGINE = Distributed({1}, default, airbyte_connection_test_table_xx_local, rand());
"""

INSERT_INTO_TEST_TABLE = """
INSERT INTO airbyte_connection_test_table_xx SELECT
  date_sub(second, number, now()),
  (rand() % 25) + 1,
  rand() % 100000
FROM system.numbers
LIMIT 10
"""

SELECT_COUNT_FROM_TEST_TABLE = """
SELECT count() FROM airbyte_connection_test_table_xx
"""

DROP_DIST_TEST_TABLE = """
DROP TABLE airbyte_connection_test_table_xx ON CLUSTER {0} NO DELAY"""

DROP_LOCAL_TEST_TABLE = """
DROP TABLE airbyte_connection_test_table_xx_local ON CLUSTER {0} NO DELAY"""
