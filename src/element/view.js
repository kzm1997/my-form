// 创建一个空对象用于存储动态加载的组件
const components = {};
// 使用 require.context 动态加载 'elements/' 目录下的所有子目录中的 view.vue 文件
// 参数说明：
// - 第一个参数: 要搜索的目录路径
// - 第二个参数: 是否搜索子目录 (true 表示递归搜索)
// - 第三个参数: 匹配文件的正则表达式 (匹配以 view.vue 结尾的文件)
const requireComponent = require.context('@/element/', true, /(view\.vue)$/);

// 遍历所有匹配到的文件
requireComponent.keys().forEach(fileName => {
    // 获取组件的配置信息
    const componentOptions = requireComponent(fileName);
    
    // 提取组件定义，优先使用默认导出，如果没有则使用模块本身
    const component = componentOptions.default || componentOptions;
    
    // 将组件注册到 components 对象中，使用组件的 name 属性作为键名
    // 这样可以通过组件的 name 来访问对应的组件定义
    components[component.name] = component;
});


// 导出包含所有动态加载组件的对象
export default components;
