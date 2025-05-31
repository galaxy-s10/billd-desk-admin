import { IForm } from '@/components/Base/Form';
import { GlobalMsgTypeEnumMap } from '@/constant';
import { FormTypeEnum, IGlobalMsg, SwitchEnum } from '@/interface';

export const formConfig: IForm<IGlobalMsg> = {
  gridSpan: 16,
  formStyle: {
    justifyContent: 'center',
  },
  labelPlacement: 'left',
  formItems: [
    {
      field: 'id',
      type: FormTypeEnum.number,
      label: 'id',
    },
    {
      field: 'user_id',
      type: FormTypeEnum.number,
      label: '用户id',
    },
    {
      field: 'client_ip',
      type: FormTypeEnum.input,
      label: '客户端ip',
    },
    {
      field: 'priority',
      type: FormTypeEnum.number,
      label: '权重',
    },
    {
      field: 'type',
      type: FormTypeEnum.radio,
      label: '类型',
      options: Object.keys(GlobalMsgTypeEnumMap).map((v) => {
        return { label: GlobalMsgTypeEnumMap[v], value: v };
      }),
      rule: { required: true, trigger: 'blur', type: 'any' },
    },
    {
      field: 'show',
      type: FormTypeEnum.switch,
      label: '是否显示',
      switchConfig: {
        checkedValue: SwitchEnum.yes,
        unCheckedValue: SwitchEnum.no,
        checkedText: '是',
        unCheckedText: '否',
      },
    },
    {
      field: 'title',
      type: FormTypeEnum.input,
      label: '标题',
    },
    {
      field: 'content',
      type: FormTypeEnum.input,
      label: '内容',
    },
    {
      field: 'remark',
      type: FormTypeEnum.input,
      label: '备注',
    },
  ],
};
