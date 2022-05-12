#
# Copyright (c) 2021 Airbyte, Inc., all rights reserved.
#


import sys

from destination_clickhouse_multinode import DestinationClickhouseMultinode

if __name__ == "__main__":
    DestinationClickhouseMultinode().run(sys.argv[1:])
