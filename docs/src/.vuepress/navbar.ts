import { navbar } from 'vuepress-theme-hope';

export const zhNavbarConfig = navbar([
  '/guide/get-started/',
  '/cookbook/',
  {
    text: '迁移',
    icon: 'code-compare',
    prefix: '/migration/',
    children: ['client', 'valine', 'tool'],
  },
  {
    text: '参考',
    icon: 'book',
    prefix: '/reference/',
    children: [
      {
        text: '客户端',
        prefix: 'client/',
        children: ['api', 'props', 'file', 'style'],
      },
      {
        text: '服务端',
        prefix: 'server/',
        children: ['api', 'config', 'env'],
      },
    ],
  },
  {
    text: '高级',
    icon: 'gem',
    prefix: '/advanced/',
    children: ['intro', 'design', 'ecosystem', 'faq', 'contribution'],
  },
]);

export const enNavbarConfig = navbar([
  '/en/guide/get-started/',
  '/en/cookbook/',
  {
    text: 'Migration',
    icon: 'code-compare',
    prefix: '/en/migration/',
    children: ['client', 'valine', 'tool'],
  },
  {
    text: 'Reference',
    icon: 'book',
    prefix: '/en/reference/',
    children: [
      {
        text: 'Client',
        prefix: 'client/',
        children: ['api', 'props', 'file', 'style'],
      },
      {
        text: 'server',
        prefix: 'server/',
        children: ['api', 'config', 'env'],
      },
    ],
  },
  {
    text: 'Advanced',
    icon: 'gem',
    prefix: '/en/advanced/',
    children: ['intro', 'design', 'ecosystem', 'faq', 'contribution'],
  },
]);
