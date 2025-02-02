import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mostone.life',
  name: '默往',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][text=null][visibleToUser=true] + TextView[visibleToUser=true][text=null][index=parent.childCount.minus(1)]',
      snapshotUrls: 'https://i.gkd.li/i/13832104',
    },
  ],
});
