import React, { useCallback } from "react";
import { useQueryClient } from "react-query";

import { ConnectionTable } from "components/EntityTable";
import useSyncActions from "components/EntityTable/hooks";
import { ITableDataItem } from "components/EntityTable/types";
import { getConnectionTableData } from "components/EntityTable/utils";

import { invalidateConnectionsList } from "hooks/services/useConnectionHook";
import useRouter from "hooks/useRouter";
import { RoutePaths } from "pages/routePaths";
import { useDestinationDefinitionList } from "services/connector/DestinationDefinitionService";
import { useSourceDefinitionList } from "services/connector/SourceDefinitionService";

import { WebBackendConnectionRead } from "../../../../../core/request/AirbyteClient";

type IProps = {
  connections: WebBackendConnectionRead[];
};

const SourceConnectionTable: React.FC<IProps> = ({ connections }) => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const { changeStatus, syncManualConnection } = useSyncActions();

  const { sourceDefinitions } = useSourceDefinitionList();

  const { destinationDefinitions } = useDestinationDefinitionList();

  const data = getConnectionTableData(connections, sourceDefinitions, destinationDefinitions, "source");

  const onChangeStatus = useCallback(
    async (connectionId: string) => {
      const connection = connections.find((item) => item.connectionId === connectionId);

      if (connection) {
        await changeStatus(connection);
        await invalidateConnectionsList(queryClient);
      }
    },
    [changeStatus, connections, queryClient]
  );

  const onSync = useCallback(
    async (connectionId: string) => {
      const connection = connections.find((item) => item.connectionId === connectionId);
      if (connection) {
        await syncManualConnection(connection);
      }
    },
    [connections, syncManualConnection]
  );

  const clickRow = (source: ITableDataItem) => push(`../../../${RoutePaths.Connections}/${source.connectionId}`);

  return (
    <ConnectionTable
      data={data}
      onClickRow={clickRow}
      entity="source"
      onChangeStatus={onChangeStatus}
      onSync={onSync}
    />
  );
};

export default SourceConnectionTable;
