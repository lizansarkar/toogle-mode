import http from 'http'

const req = http.get('http://localhost:5175', (res) => {
  let html = ''
  res.on('data', chunk => html += chunk)
  res.on('end', () => {
    console.log('=== HTML HEAD ===')
    const head = html.match(/<head>.*?<\/head>/s)?.[0]
    console.log(head ? head.substring(0, 2000) : 'No head found')
    console.log('\n=== BODY START ===')
    const body = html.match(/<body>.*?<\/body>/s)?.[0]
    console.log(body ? body.substring(0, 1000) : 'No body found')
    console.log('\n=== LOOKING FOR STYLE TAGS ===')
    const styles = html.match(/<style[^>]*>[\s\S]*?<\/style>/g) || []
    console.log(`Found ${styles.length} style tags`)
    styles.slice(0, 3).forEach(s => console.log(s.substring(0, 500)))
  })
})

req.on('error', err => {
  console.error('Connection error:', err.message)
  process.exit(1)
})
