<template>
  <HForm
    ref="hFormRef"
    v-bind="formConfigRes"
    v-model="formData"
    :show-action="showAction"
    :confirm-loading="confirmLoading"
    @click:confirm="handleConfirm"
  ></HForm>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import {
  fetchGlobalMsgCreate,
  fetchGlobalMsgFind,
  fetchGlobalMsgUpdate,
} from '@/api/globalMsg';
import HForm from '@/components/Base/Form';
import { IGlobalMsg } from '@/interface';

import { formConfig } from './config/form.config';

const props = withDefaults(
  defineProps<{
    modelValue?: any;
    showAction?: boolean;
    edit?: boolean;
  }>(),
  {
    modelValue: {},
    showAction: true,
    edit: false,
  }
);

const route = useRoute();

const hFormRef = ref<InstanceType<typeof HForm>>();
const formConfigRes = ref();
const formData = ref({ ...props.modelValue });
const confirmLoading = ref(false);
const id = ref(-1);

defineExpose({
  validateForm,
  validateAndUpload,
});

onMounted(async () => {
  id.value = Number(route.query.id);
  await find();
  formConfigRes.value = formConfig;
});

async function find() {
  if (id.value) {
    const res = await fetchGlobalMsgFind(id.value);
    if (res.code !== 200) return;

    formData.value = {
      ...res.data,
    };
  }
}
async function handleUpdate(v: IGlobalMsg) {
  try {
    confirmLoading.value = true;
    const { code } = await fetchGlobalMsgUpdate({
      ...v,
    });
    if (code === 200) {
      window.$message.success('修改成功！');
    }
  } catch (error) {
    console.log(error);
  }
  confirmLoading.value = false;
}

async function handleCreate(v: IGlobalMsg) {
  try {
    confirmLoading.value = true;
    const { code } = await fetchGlobalMsgCreate(v);
    if (code === 200) {
      window.$message.success('新建成功！');
    }
  } catch (error) {
    console.log(error);
  }
  confirmLoading.value = false;
}

const handleConfirm = async (v) => {
  console.log(v, 'vvv');

  if (props.edit) {
    await handleUpdate(v);
  } else {
    await handleCreate(v);
  }
};

async function validateForm() {
  const res = await hFormRef.value?.handleValidate();
  return res;
}
async function validateAndUpload() {
  const res = await hFormRef.value?.validateAndUpload();
  return res;
}
</script>

<style lang="scss" scoped></style>
