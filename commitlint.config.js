module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 自定义提交消息规则
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',

      // Git提交的信息，开头可引用以下这些类型
      [
        // 功能方面的提交
        'feat',

        // Bug方面的提交
        'fix',

        // 性能方面的提交
        'perf',

        // 针对代码样式的提交（不是CSS样式）
        'style',

        // 文档方面的提交
        'docs',

        // 数据方面的提交
        'data',

        // 测试方面的提交
        'test',

        // 重构方面的提交
        'refactor',

        // 编译打包方面的提交
        'build',

        // 持续集成方面的提交
        'ci',

        // 持续部署方面的提交
        'cd',

        // 数据库方面的提交
        'db',

        // 其他修改，比如构建流程，依赖管理
        'chore',

        // 回滚方面的提交
        'revert',

        // 工作流方面的提交
        'workflow',

        // 定义TS类型方面的提交
        'types',

        // 配置方面的提交
        'config',

        // 重命名方面的提交
        'rename',

        // 优化方面的提交
        'refine',

        // 清除废弃多余无用代码文件的提交
        'clean',

        // 整理代码及文件方面的提交
        'organize',

        // 依赖管理方面的提交
        'dependency',
      ],
    ],
  },
};
