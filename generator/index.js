module.exports = (api, options) => {
  const pkg = {
    scripts: {
      'weex': "vue-cli-service weex ",
      'weex:build': "vue-cli-service weex  --mode 'production'"
    }
  }
  api.extendPackage(pkg)
  if(api.hasPlugin('typescript')){
    //ts template
    api.render('./ts-template')

  }else{
    //js template
    api.render('./template')

  }
  
}
