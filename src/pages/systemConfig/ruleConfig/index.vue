<template>
  <div class="global-config">
    <card>
      <el-row class="search-row">
        <el-col class="el-col" :span="6">
          <span class="label">规则名称</span>
          <el-input v-model="queryParam.ruleName" placeholder="请输入"></el-input>
        </el-col>
        <el-col class="el-col" :span="6">
          <el-button type="primary" @click="getDataList(1)">查询</el-button>
          <el-button @click="resetQuery">重置</el-button>
        </el-col>
      </el-row>
    </card>
    <card class="grid-box">
      <div class="grid-operation">
        <el-button type="primary" @click="showDialog('Add')">新增</el-button>
      </div>
      <el-table :data="dataList" key="id" :border="true" v-loading="loading" element-loading-text="加载中...">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="ruleName" label="规则名称" />
        <el-table-column prop="ruleType" label="规则类型" />
        <el-table-column prop="ruleStatus" label="规则状态" />
        <el-table-column prop="ruleLanguage" label="规则语言" />
        <el-table-column prop="ruleCode" label="代码" />
        <el-table-column prop="comments" label="描述" />
        <el-table-column prop="createdBy" label="创建人" />
        <el-table-column prop="createdDate" label="创建时间" />
        <el-table-column prop="updatedBy" label="更新人" />
        <el-table-column prop="updatedDate" label="更新时间" />
        <el-table-column width="120" label="操作">
          <template #default="scope">
            <div class="grid-column-operation">
              <el-link type="primary" :underline="false" @click="showDialog('Edit', scope.row)">编辑</el-link>
              <el-link type="danger" :underline="false" @click="deleteRule(scope.row.id)">删除</el-link>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          layout="total, sizes, prev, pager, next"
          background
          :currentPage="pageVO.pageNumber"
          :page-size="pageVO.pageSize"
          :page-sizes="[10, 20, 50, 100]"
          :total="pageVO.total"
          @current-change="currentChange"
          @size-change="sizeChange"
        />
      </div>
    </card>
    <rule-dialog
      v-model:visible="dialog.visible"
      :open-type="dialog.openType"
      :current-row="dialog.currentRow"
      @submit-success="getDataList(1)"
    />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, reactive } from 'vue';
import { getRuleListAPI, deleteRuleAPI } from './api';
import usePageQuery from '@hooks/usePageQuery';
import { IRuleConfig } from './interface';
import { deleteSingleData } from '@utils/index';
import ruleDialog from './components/ruleDialog.vue';

const queryParam = reactive({
  ruleName: '',
});
const dialog = reactive({
  visible: false,
  openType: 'Add',
  currentRow: {},
});
const { resetQuery, getDataList, loading, dataList, pageVO, currentChange, sizeChange } = usePageQuery(
  getRuleListAPI,
  queryParam
);

const showDialog = (openType: string, currentRow = {} as IRuleConfig) => {
  dialog.openType = openType;
  dialog.visible = true;
  dialog.currentRow = { ...currentRow };
};

const deleteRule = (id: number) => {
  deleteSingleData(id, deleteRuleAPI).then(() => {
    getDataList();
  });
};

onMounted(() => {
  getDataList(1);
});
</script>
<style lang="scss" scoped></style>
