import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { App } from '@vue/runtime-dom';
import Card from './Card/index.vue';
import LoginDialog from './LoginDialog/index.vue';
import Category from './Category/index.vue';
import EditTable from './EditTable/index.vue';
import TaskRelationTable from './TaskRelationTable/index.vue';

const componentMap = {
  ...ElementPlusIconsVue,
  Card,
  LoginDialog,
  Category,
  EditTable,
  TaskRelationTable
};

// 注册所有组件
const install = (app: App<Element>) => {
  for (const [key, component] of Object.entries(componentMap)) {
    app.component(key, component);
  }
};

export default install;
