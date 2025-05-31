import { TableColumns } from 'naive-ui/es/data-table/src/interface';

import { ClientAppMap, ClientEnvMap } from '@/constant';
import { ILoginRecord } from '@/interface';

// eslint-disable-next-line
export const columnsConfig = (_t): TableColumns<ILoginRecord> => {
  return [
    {
      title: 'id',
      key: 'id',
      align: 'center',
      width: 150,
    },
    {
      title: 'uuid',
      key: 'uuid',
      align: 'center',
      width: 200,
    },
    {
      title: '系统',
      key: 'system',
      align: 'center',
      width: 200,
    },
    {
      title: '品牌',
      key: 'brand',
      align: 'center',
      width: 200,
    },
    {
      title: '型号',
      key: 'model',
      align: 'center',
      width: 200,
    },
    {
      title: '客户端ip',
      key: 'client_ip',
      align: 'center',
      width: 200,
    },
    {
      title: '客户端环境',
      key: 'client_env',
      align: 'center',
      width: 200,
      render(row) {
        return ClientEnvMap[row.client_env!];
      },
    },
    {
      title: '客户端app',
      key: 'client_app',
      align: 'center',
      width: 200,
      render(row) {
        return ClientAppMap[row.client_app!];
      },
    },
    {
      title: '客户端app版本',
      key: 'client_app_version',
      align: 'center',
      width: 200,
    },
    {
      title: 'ua',
      key: 'user_agent',
      align: 'center',
      width: 200,
    },
    {
      title: '备注',
      key: 'remark',
      align: 'center',
      width: 200,
    },
    {
      title: '创建时间',
      key: 'created_at',
      align: 'center',
      width: 180,
      fixed: 'right',
    },
    {
      title: '最后更新',
      key: 'updated_at',
      align: 'center',
      width: 180,
      fixed: 'right',
    },
  ];
};
