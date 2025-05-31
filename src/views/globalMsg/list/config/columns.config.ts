import { GlobalMsgTypeEnumMap } from '@/constant';
import { IGlobalMsg, SwitchEnum, TableColumnsPlus } from '@/interface';

// eslint-disable-next-line
export const columnsConfig = (_t): TableColumnsPlus<IGlobalMsg> => {
  return [
    {
      title: 'id',
      key: 'id',
      align: 'center',
      width: 100,
    },
    {
      title: '客户端ip',
      key: 'client_ip',
      align: 'center',
      width: 100,
    },
    {
      title: '用户id',
      key: 'user_id',
      align: 'center',
      width: 100,
    },
    {
      title: '显示',
      key: 'show',
      align: 'center',
      width: 100,
      render(row) {
        return row.show === SwitchEnum.yes ? '是' : '否';
      },
    },
    {
      title: '权重',
      key: 'priority',
      align: 'center',
      width: 100,
    },
    {
      title: '类型',
      key: 'type',
      align: 'center',
      width: 100,
      render(row) {
        return GlobalMsgTypeEnumMap[row.type!];
      },
    },
    {
      title: '标题',
      key: 'title',
      align: 'center',
      width: 100,
    },
    {
      title: '内容',
      key: 'content',
      align: 'center',
      width: 100,
    },
    {
      title: '备注',
      key: 'remark',
      align: 'center',
      width: 100,
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
