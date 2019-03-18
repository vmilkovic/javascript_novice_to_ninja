const headers = new Headers({
							'Content-Type' : 'text/plain',
							'Accept-Charset': 'utf-8',
							'Accept-Encoding' : 'gzip, deflate'
							});
for( const entry of headers.entries() ) {
	console.log(entry);
}