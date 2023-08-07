//Hook to change a SOCKS Socket proxy
//Change SET_IP_ADDRESS and SET_PORT by your proxy config

Java.perform(function() {
    var sock = Java.use("java.net.Socket");
    
    sock.$init.overload("java.net.Proxy").implementation = function(proxy) {
        console.log('[*] Original Socket proxy: ' +proxy);
        var proxyObject = Java.use('java.net.Proxy').$new(Java.use('java.net.Proxy$Type').SOCKS.value, Java.use('java.net.InetSocketAddress').$new('SET_IP_ADDRESS', SET_PORT));
        console.log('[*] Fake Socket proxy: ' + proxyObject);
        this.$init.overload("java.net.Proxy").call(this, proxyObject);
    };

});
