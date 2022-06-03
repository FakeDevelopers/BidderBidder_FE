module.exports = {
  //outputDir : npm run build 빌드 시에 파일이 생성되는 위치
  outputDir: "./backend/public",
  //indexPath : index.html 파일이 생성될 위치
  indexPath: "./index.html",
  //SpringBoot 서버 접속 주소
  devServer: {
    proxy: "http://3.38.81.213:8080"
  },
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  }
};
