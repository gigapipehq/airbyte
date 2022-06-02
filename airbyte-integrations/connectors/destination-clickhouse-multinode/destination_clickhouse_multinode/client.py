from clickhouse_driver import Client
from clickhouse_driver.errors import NetworkError
from requests import Session

from destination_clickhouse_multinode.schema import QueryResult


class ClickHouseClient(Client):
    host: str
    port: str
    cluster: str
    username: str
    password: str
    database: str
    secure: bool

    def __init__(self, host: str, port: str, cluster: str, username: str, password: str, database: str, secure: bool = True):
        self.host = host
        self.port = port
        self.cluster = cluster
        self.username = username
        self.password = password
        self.database = database
        self.secure = secure

        super().__init__(
            host=host, port=port, secure=secure, user=username, password=password
        )

    def execute(
            self,
            query,
            params=None,
            with_column_types=False,
            external_tables=None,
            query_id=None,
            settings=None,
            types_check=False,
            columnar=False
    ):

        try:
            return super().execute(
                query,
                params,
                with_column_types,
                external_tables,
                query_id,
                settings,
                types_check,
                columnar
            )
        except NetworkError as e:
            raise Exception(f"Could not connect to ClickHouse cluster {e}")


class ClickHouseHTTPClient(Session):
    _url: str
    host: str
    port: str
    cluster: str
    username: str
    password: str
    database: str
    secure: bool

    def __init__(self, host: str, port: str, cluster: str, username: str, password: str, database: str, secure: bool = False):
        print(host)
        self.host = host
        self.port = port
        self.cluster = cluster
        self.username = username
        self.password = password
        self.database = database
        self.secure = secure
        self._url = self._generate_url(host)
        print(self._url)
        super().__init__()
        self.headers.update({
            "X-ClickHouse-Format": "JSON",
            "X-ClickHouse-User": username,
            "X-ClickHouse-Key": password
        })

    def query(self, query: str):
        try:
            res = self.post(self._url, params={"query": query})
            res.raise_for_status()
        except Exception as e:
            raise Exception(f"Unable to make query: {e}")
        try:
            return QueryResult(**res.json())
        except Exception as e:
            raise Exception(f"Internal error {e}")

    def _generate_url(self, host: str) -> str:
        if self.secure:
            return f"https://{host}"
        return f"http://{host}:8123"
