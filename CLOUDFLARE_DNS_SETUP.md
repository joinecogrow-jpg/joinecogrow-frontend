# Cloudflare DNS Configuration for joinecogrow.com

## DNS Records to Add in Cloudflare:

### 1. Root Domain (A Record)
```
Type: A
Name: @
Content: 76.76.19.61
TTL: Auto
Proxy status: Proxied (orange cloud)
```

### 2. WWW Subdomain (CNAME)
```
Type: CNAME
Name: www
Content: cname.vercel-dns.com
TTL: Auto
Proxy status: Proxied (orange cloud)
```

### 3. Vercel TXT Record (for verification)
```
Type: TXT
Name: @
Content: vc-domain-verify=joinecogrow.com,<vercel-verification-code>
TTL: Auto
Proxy status: DNS only (gray cloud)
```

## Steps:
1. Log into your Cloudflare dashboard
2. Select your domain `joinecogrow.com`
3. Go to DNS > Records
4. Add the above records
5. Remove any conflicting records
6. Wait 5-10 minutes for propagation

## Alternative: Use Vercel Subdomain
If DNS configuration is complex, you can:
1. Keep using: `https://joinecogrow-platform-av9u7ndir-joinecogrow-9640s-projects.vercel.app`
2. Set up a redirect from `joinecogrow.com` to the Vercel URL
