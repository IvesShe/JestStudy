# JestStudy

# 安裝Jest

```shell
npm init -y
```

![image](./images/20200826175543.png)

```shell
# -D參數代表在開發環境使用，會寫到devDependencies內，只有開發時才使用
npm install jest@24.8.0 -D
```

![image](./images/20200826180231.png)

![image](./images/20200826205110.png)

# 修改package.json

原始

![image](./images/20200826203116.png)

修改後

![image](./images/20200826203200.png)

# 執行測試

```shell
npm run test
```

測試成功的畫面

![image](./images/20200826203503.png)

故意測試失敗的畫面

![image](./images/20200826203649.png)

# 測試分成
- 單元測試 unit testing
- 集成測試

# 執行jest初始化配置

```shell
npx jest --init
```

![image](./images/20200826205534.png)

生成jest.config.js檔案

![image](./images/20200826205753.png)

# coverage(代碼覆蓋率)

原始設定，生成測試報告的資料夾名稱

```json
coverageDirectory: "coverage",
```

```shell
npx jest --coverage
```

![image](./images/20200826210033.png)

生成報告檔

![image](./images/20200826210231.png)

![image](./images/20200826210301.png)

# 自訂指令

增加script

![image](./images/20200826210759.png)

執行

```shell
num run coverage
```

![image](./images/20200826210842.png)