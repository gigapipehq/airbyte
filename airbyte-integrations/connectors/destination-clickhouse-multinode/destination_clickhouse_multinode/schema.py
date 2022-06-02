from typing import List

from pydantic import (
    StrictInt,
    StrictStr,
    StrictFloat
)
from pydantic.main import BaseModel


class Column(BaseModel):
    name: StrictStr
    type: StrictStr


class QueryStats(BaseModel):
    elapsed: StrictFloat
    rows_read: StrictInt
    bytes_read: StrictInt


class QueryResult(BaseModel):
    meta: List[Column]
    data: List[dict]
    rows: StrictInt
    statistics: QueryStats
