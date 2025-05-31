import { IForm } from '@/components/Base/Form';
import { ClientAppMap, ClientEnvMap } from '@/constant';
import { useOrder } from '@/hooks/use-order';
import { FormTypeEnum, ILoginRecord, ISearch } from '@/interface';

import { columnsConfig } from './columns.config';

export const searchFormConfig = (t): IForm<ISearch<ILoginRecord>> => {
  return {
    gridSpan: 8,
    labelPlacement: 'left',
    formStyle: {
      justifyContent: 'center',
    },
    formItems: [
      {
        field: 'id',
        type: FormTypeEnum.number,
        label: 'id',
      },
      {
        field: 'uuid',
        type: FormTypeEnum.input,
        label: 'uuid',
      },
      {
        field: 'system',
        type: FormTypeEnum.input,
        label: '系统',
      },
      {
        field: 'brand',
        type: FormTypeEnum.input,
        label: '品牌',
      },
      {
        field: 'model',
        type: FormTypeEnum.input,
        label: '型号',
      },
      {
        field: 'client_env',
        type: FormTypeEnum.select,
        label: '客户端环境',
        options: Object.keys(ClientEnvMap).map((v) => {
          return {
            label: ClientEnvMap[v],
            value: v,
          };
        }),
      },
      {
        field: 'client_app',
        type: FormTypeEnum.select,
        label: '客户端app',
        options: Object.keys(ClientAppMap).map((v) => {
          return {
            label: ClientAppMap[v],
            value: v,
          };
        }),
      },
      {
        field: 'keyWord',
        type: FormTypeEnum.input,
        label: '关键字',
        placeholder: '系统/品牌/型号/客户端ip/客户端app版本/ua/备注',
      },
      {
        field: 'rangTimeType',
        type: FormTypeEnum.datePickerRange,
        label: '时间范围',
      },
      ...useOrder({ columnsConfig: columnsConfig(t), t }),
    ],
  };
};
