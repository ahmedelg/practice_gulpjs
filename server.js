const staticServer=require('static-server');
const server=new staticServer({
  rootPath:'./build/',
  port:9000,
  // name:'lrn-gulp',
  // host:'10.0.0.100',
  // cors: '*',
  // followSymlink:true,
  // templates:{
  //   index:'foo.html',
  //   notFound:'404.html'
});

// START SERVER
server.start(function () {
  console.log('lrn-gulp listening to', server.port);
});

// node server.js



