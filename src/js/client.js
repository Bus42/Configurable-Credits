const client = new StreamerbotClient({
    host: socketConfig.url,
    port: socketConfig.port,
    endpoint: '/'
});